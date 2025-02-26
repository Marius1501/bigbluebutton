import RedisPubSub from '/imports/startup/server/redis';
import handlePresentationAdded from './handlers/presentationAdded';
import handlePresentationRemove from './handlers/presentationRemove';
import handlePresentationCurrentSet from './handlers/presentationCurrentSet';
import handlePresentationConversionUpdate from './handlers/presentationConversionUpdate';
import handlePresentationDownloadableSet from './handlers/presentationDownloadableSet';
import handlePresentationExport from './handlers/presentationExport';

RedisPubSub.on('PdfConversionInvalidErrorEvtMsg', handlePresentationConversionUpdate);
RedisPubSub.on('PresentationPageGeneratedEvtMsg', handlePresentationConversionUpdate);
RedisPubSub.on('PresentationPageCountErrorEvtMsg', handlePresentationConversionUpdate);
RedisPubSub.on('PresentationUploadedFileTimeoutErrorEvtMsg', handlePresentationConversionUpdate);
RedisPubSub.on('PresentationConversionUpdateEvtMsg', handlePresentationConversionUpdate);
RedisPubSub.on('PresentationUploadedFileTooLargeErrorEvtMsg', handlePresentationConversionUpdate);
RedisPubSub.on('PresentationConversionCompletedEvtMsg', handlePresentationAdded);
RedisPubSub.on('RemovePresentationEvtMsg', handlePresentationRemove);
RedisPubSub.on('SetCurrentPresentationEvtMsg', handlePresentationCurrentSet);
RedisPubSub.on('SetPresentationDownloadableEvtMsg', handlePresentationDownloadableSet);
RedisPubSub.on('NewPresAnnFileAvailableEvtMsg', handlePresentationExport);
