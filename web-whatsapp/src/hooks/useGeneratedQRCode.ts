import { useEffect, useState } from "react";

import { v4 as uuid } from 'uuid'
import QrCode from "qrcode";

export function useGeneratedQRCode () {

    const [dataQRCode, setDataQRCode] = useState({ code: '', srcImg: '' });
    const [error, setError] = useState(false);

    useEffect(() => {

        generetedImageAndCode(setDataQRCode, setError);

        setInterval(() => generetedImageAndCode(setDataQRCode, setError), 1000 * 30);
    }, []);

    return { error, dataQRCode };
}

function generetedImageAndCode (
    setDataQRCode: React.Dispatch<React.SetStateAction<{ code: string; srcImg: string; }>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>
) {

    const newCode = uuid();

    QrCode.toDataURL(newCode, {}, function (err, url) {

        if (err) {
            setError(true);
            return;
        }

        setDataQRCode({
            code: newCode,
            srcImg: url
        });
    });

}