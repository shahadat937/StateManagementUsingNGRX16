import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Course:{},
  Lesson:{}
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata
};
