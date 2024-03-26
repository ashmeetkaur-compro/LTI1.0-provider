import { Injectable } from '@nestjs/common';
import {
  SPFileAccessService,
  SPTableAccessService,
} from '@elttechnology/lib-sharepoint-utility';
@Injectable()
export class AppService {
  constructor(
    private readonly libSharepointUtilityTableService: SPTableAccessService,
    private readonly libSharepointUtilityAccessService: SPFileAccessService,
  ) {}

  async getHello() {
    try {
      const fileData = await this.libSharepointUtilityAccessService.readFile(
        'knowledgeSharing',
        'learning/createdSecondFile.txt',
      );
      console.log(JSON.stringify(fileData));
    } catch (error) {
      console.log(error);
      // console.log(error.code);
    }

    // const allFilesData =
    //   await this.libSharepointUtilityAccessService.getAllFiles(
    //     'knowledgeSharing',
    //     'learning/subLearning',
    //   );
    // console.log('allFilesData   ', JSON.stringify(allFilesData));

    // const createFileData =
    //   await this.libSharepointUtilityAccessService.createFile(
    //     'knowledgeSharing',
    //     'learning/subLearning',
    //     'newFileashxlsm.txt',
    //   );
    // console.log('createFiledata ' + JSON.stringify(createFileData));

    // const deleteFileRes =
    //   await this.libSharepointUtilityAccessService.deleteFile(
    //     'knowledgeSharing',
    //     'learning/subLearning/newFileashxlsm.txt',
    //   );
    // console.log('deletedFileData ' + JSON.stringify(deleteFileRes));

    // const createTableRes =
    //   await this.libSharepointUtilityTableService.createTable(
    //     'knowledgeSharing',
    //     'learning/subLearning/Book1.xlsx',
    //     {
    //       address: 'Sheet1!F8:H8',
    //       tableName: 'Test_Table',
    //     },
    //   );
    // console.log('createdTableRes ' + JSON.stringify(createTableRes));

    // const addRowInTableRes =
    //   await this.libSharepointUtilityTableService.addRowInTable(
    //     'knowledgeSharing',
    //     'Test_Table',
    //     'learning/subLearning/Book1.xlsx',
    //     {
    //       index: null,
    //       values: [
    //         ['test1.pdf', 'Yes'],
    //         ['test2.jpg', 'No'],
    //       ],
    //     },
    //   );
    // console.log('addRowInTable ' + JSON.stringify(addRowInTableRes));
  }
}
