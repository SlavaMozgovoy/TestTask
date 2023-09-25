export default class DataService {
    static async getAllData() {
        return this._data;
    } 

    static async getDataByLimit(limit, page) {
        if(limit == "all") {
            return this._data;
        }

        
        let pageCount = Math.ceil(this._data.length / limit);
        if (page > pageCount) {
            page = pageCount;
        }


        let startPoint = (page - 1) * limit;
        
        return this._data.slice(+startPoint, +startPoint + +limit);
    }

    static async getPageCount(limit) {
        if(limit == "all") {
            return 1;
        }
        return Math.ceil(this._data.length / limit);
    }

    static async getTotalXcount() {
        return this._data.length;
    }

 

    static _data = [
        {id: 0, pcStatus: true, title: "192.168.0.1", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 1, pcStatus: false, title: "TesT", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 2, pcStatus: false, title: "TEST", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 3, pcStatus: false, title: "test", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 4, pcStatus: false, title: "Lorem", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 5, pcStatus: false, title: "ipsum", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 6, pcStatus: false, title: "ZXC", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 7, pcStatus: false, title: "asD", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 8, pcStatus: true, title: "QWERTY", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 9, pcStatus: true, title: "192.168.2.1", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 10, pcStatus: false, title: "Admin", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 11, pcStatus: true, title: "SuperRules", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 12, pcStatus: true, title: "192.168.0.11", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 13, pcStatus: false, title: "TesT1", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 14, pcStatus: false, title: "TEST1", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 15, pcStatus: false, title: "test1", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 16, pcStatus: false, title: "Lorem1", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 17, pcStatus: false, title: "ipsum1", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 18, pcStatus: false, title: "ZXC1", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 19, pcStatus: false, title: "asD1", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 20, pcStatus: true, title: "QWERTY1", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 21, pcStatus: true, title: "192.168.2.11", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 22, pcStatus: false, title: "Admin1", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 23, pcStatus: true, title: "SuperRules1", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 24, pcStatus: true, title: "192.168.0.12", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 25, pcStatus: false, title: "TesT2", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 26, pcStatus: false, title: "TEST2", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 27, pcStatus: false, title: "test2", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 28, pcStatus: false, title: "Lorem2", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 29, pcStatus: false, title: "ipsum2", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 30, pcStatus: false, title: "ZXC2", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 31, pcStatus: false, title: "asD2", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 32, pcStatus: true, title: "QWERTY2", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 33, pcStatus: true, title: "192.168.2.12", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 34, pcStatus: false, title: "Admin2", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 35, pcStatus: true, title: "SuperRules2", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 36, pcStatus: true, title: "192.168.0.13", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 37, pcStatus: false, title: "TesT3", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 38, pcStatus: false, title: "TEST3", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 39, pcStatus: false, title: "test3", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 40, pcStatus: false, title: "Lorem3", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 41, pcStatus: false, title: "ipsum3", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 42, pcStatus: false, title: "ZXC3", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 43, pcStatus: false, title: "asD3", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 44, pcStatus: true, title: "QWERTY3", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 45, pcStatus: true, title: "192.168.2.13", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 46, pcStatus: false, title: "Admin3", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 47, pcStatus: true, title: "SuperRules3", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 48, pcStatus: true, title: "192.168.0.13", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 49, pcStatus: false, title: "TesT4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 50, pcStatus: false, title: "TEST4", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 51, pcStatus: false, title: "test4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 52, pcStatus: false, title: "Lorem4", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 53, pcStatus: false, title: "ipsum4", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 54, pcStatus: false, title: "ZXC4", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 55, pcStatus: false, title: "asD4", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 56, pcStatus: true, title: "QWERTY4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 57, pcStatus: true, title: "192.168.2.14", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 58, pcStatus: false, title: "Admin4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 59, pcStatus: true, title: "SuperRules4", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 60, pcStatus: true, title: "192.168.0.14", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 61, pcStatus: false, title: "TesT4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 62, pcStatus: false, title: "TEST4", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 63, pcStatus: false, title: "test4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 64, pcStatus: false, title: "Lorem4", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 65, pcStatus: false, title: "ipsum4", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 66, pcStatus: false, title: "ZXC4", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 67, pcStatus: false, title: "asD4", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 68, pcStatus: true, title: "QWERTY4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 69, pcStatus: true, title: "192.168.2.14", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 70, pcStatus: false, title: "Admin4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 71, pcStatus: true, title: "SuperRules4", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 72, pcStatus: true, title: "192.168.0.14", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 73, pcStatus: false, title: "TesT4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 74, pcStatus: false, title: "TEST4", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 75, pcStatus: false, title: "test4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 76, pcStatus: false, title: "Lorem4", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 77, pcStatus: false, title: "ipsum4", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 78, pcStatus: false, title: "ZXC4", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 79, pcStatus: false, title: "asD4", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 80, pcStatus: true, title: "QWERTY4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 81, pcStatus: true, title: "192.168.2.14", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 82, pcStatus: false, title: "Admin4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 83, pcStatus: true, title: "SuperRules4", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 84, pcStatus: true, title: "QWERTY4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 85, pcStatus: true, title: "192.168.2.14", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 86, pcStatus: false, title: "Admin4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 87, pcStatus: true, title: "SuperRules4", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 88, pcStatus: true, title: "192.168.0.14", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 89, pcStatus: false, title: "TesT4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 90, pcStatus: false, title: "TEST4", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 91, pcStatus: false, title: "test4", type: "pc1", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 92, pcStatus: false, title: "Lorem4", type: "pc2", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "red, green, blue", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
        {id: 93, pcStatus: false, title: "ipsum4", type: "pc3", location: "тест", orgEntity: "Lorem", invNumber: 1, tags: "blue, green", createTime: "2023-22-09 2:03", updateTime: "	2023-22-09 2:03", auditTime: "	2023-22-09 2:03"},
    ];
}


