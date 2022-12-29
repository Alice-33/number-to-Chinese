const digitalToChinese = (num: number) => {
    const chnNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const chnUnitSection = ['', '万', '亿', '万亿'];
    const chnUnit = ['', '十', '百', '千'];
    const chnStr: string[] = [];
    let unitPos = 0;
    let needZero = false;
    if (num === 0) {
        return '零';
    }

    const sectionToChinese = (section: number) => {
        let str = '';
        let unit = 0;
        let zero = true;
        const strIns:string[]=[];
        while (section > 0) {
            const v = section % 10;
            if (v === 0) {
                if (!zero) {
                    zero = true;
                    strIns.splice(0, 0, chnNum[v]);
                }
            } else {
                zero = false;
                str = chnNum[v];
                str += chnUnit[unit];
                strIns.splice(0, 0, str);
            }
            unit++;
            section = Math.floor(section / 10);
        }
        return strIns.join('');
    };
   
    while (num > 0) {
        const section = num % 10000;
        if (needZero) {
            chnStr.splice(0, 0, chnNum[0]);
        }
        let strIns = sectionToChinese(section);
        strIns += section !== 0 ? chnUnitSection[unitPos] : chnUnitSection[0];
        chnStr.splice(0, 0, strIns);
        needZero = section < 1000 && section > 0;
        num = Math.floor(num / 10000);
        unitPos++;
    }

    return chnStr.join('');
};

export default digitalToChinese;
