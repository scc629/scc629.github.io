import React from 'react'
import PropTypes from 'prop-types'
import { SurveysPageTemplate } from '../../templates/surveys-page'

const SurveysPagePreview = ({ entry, widgetFor, getAsset }) => (
  <SurveysPageTemplate
    title={entry.getIn(['data', 'title'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
    link={entry.getIn(['data', 'link'])}
    image={getAsset(entry.getIn(['data', 'image']))}
    content={widgetFor('body')}
  />
)

SurveysPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SurveysPagePreview
