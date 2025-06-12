/** @type {AppTypes.Config} */
window.config = {
  routerBasename: null,
  showStudyList: true,
  showPatientInfo: "visible",
  extensions: [],
  modes: [],
//  customizationService: ['@ohif/extension-default.customizationModule.multimonitor'],
  showWarningMessageForCrossOrigin: false,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  experimentalStudyBrowserSort: true,
  strictZSpacingForVolumeViewport: true,
  studyPrefetcher: {
    enabled: true,
    displaySetsCount: 2,
    order: 'closest',
  },
  defaultDataSourceName: 'dicomweb',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'Orthanc Server',
        name: 'Orthanc',
        wadoUriRoot: '/pacs/dicom-web',
        qidoRoot: '/pacs/dicom-web',
        wadoRoot: '/pacs/dicom-web',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        omitQuotationForMultipartRequest: true,
        supportsFuzzyMatching: false,
        supportsWildcard: true,
        staticWado: true,
        caseSensitive: false,
        dicomUploadEnabled: true,
        singlepart: 'bulkdata',
        acceptHeader: [ 'multipart/related; type=application/octet-stream; transfer-syntax=*' ],
        bulkDataURI: {
          enabled: true,
          relativeResolution: 'studies',
          startsWith: 'http://127.0.0.1/',
          prefixWith: '/pacs/',
        },
      },
    }],
  httpErrorHandler: error => {
    console.warn(`HTTP Error Handler (status: ${error.status})`, error);
  },
};
