import { Alert } from "react-native";
import { useSelector } from "react-redux"
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import XLSX from 'xlsx';
import { Strings } from "../contants";

export const useExportData = () => {

    const { trackLists } = useSelector(state => state.track);

    const convertDataIntoFormat = () => {
        const data = trackLists.map((location, index) => {
            return {
                "index": index+1,
                "title": location.locationTitle,
                "longitude": location?.location?.longitude,
                "latitude": location?.location?.latitude,
                "timestamp": location?.timestamp,
            }
        })

        return data;
    }

    const exportToExcel = async (type) => {
        const ws = XLSX.utils.json_to_sheet(convertDataIntoFormat());
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        const data = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

        const filePath = RNFS.DocumentDirectoryPath + `/${new Date().getTime()}.xlsx`;

        try {
            await RNFS.writeFile(filePath, data, 'ascii');
            if (type == "share") {
                await Share.open({ url: `file://${filePath}` });
                await RNFS.unlink(filePath);
            }
            else {
                Alert.alert(Strings.common.fileDownloaded, `${Strings.common.fileLocation} : ${filePath}`)
            }
        } catch (error) {
            // Either use has cancel the sharing
        }
    };

    const handleOnExport = (type) => {
        if (trackLists?.length == 0) {
            Alert.alert('No location added yet', "Please add some location to export data.");
        }
        else {
            exportToExcel(type);
        }
    }

    return {
        handleOnExport
    }
}
