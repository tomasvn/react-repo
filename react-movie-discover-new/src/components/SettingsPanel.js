import React from 'react'
import Select from './Select'

const SettingsPanel = ({onChangeVote, onChangePopularity, selectVoteText, selectPopularityText}) => {
  return (
    <div className="settings-panel u-mt-10">
      <Select onChange={onChangeVote} text={selectVoteText} />
      <Select onChange={onChangePopularity} text={selectPopularityText} />
    </div>
  )
}

export default SettingsPanel
