import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        heroImage={getAsset(data.heroImage)}
        heroHeading={data.heroHeading}
        heroSubheading={data.heroSubheading}
        shortBio={data.shortBio || {}}
        whatImDoingNow={data.whatImDoingNow || {}}
        portfolio={data.portfolio || {}}
        experience={data.experience || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
