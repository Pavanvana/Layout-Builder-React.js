// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-container">
          <h1 className="layout-heading">Layout</h1>
          <ul className="controller-container">
            <li className="control-item">
              <input
                type="checkBox"
                id="content"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </li>
            <li className="control-item">
              <input
                type="checkBox"
                id="leftNavbar"
                onChange={onChangeLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="leftNavbar" className="label">
                Left Navbar
              </label>
            </li>
            <li className="control-item">
              <input
                type="checkBox"
                id="rightNavbar"
                onChange={onChangeRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="rightNavbar" className="label">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
