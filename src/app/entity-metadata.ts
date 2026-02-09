import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Course:{
    entityDispatcherOptions:{
      optimisticUpdate:true,
      optimisticDelete:true
    }
  },
  Lesson:{}
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata
};
