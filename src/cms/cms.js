import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import SurveysPagePreview from './preview-templates/SurveysPagePreview'
import PantsPagePreview from './preview-templates/PantsPagePreview'
import ShirtsPagePreview from './preview-templates/ShirtsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('surveys', SurveysPagePreview)
CMS.registerPreviewTemplate('shirts', ShirtsPagePreview)
CMS.registerPreviewTemplate('pants', PantsPagePreview)
