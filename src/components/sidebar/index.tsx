import { useSelector } from 'react-redux'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faTh } from '@fortawesome/free-solid-svg-icons'
import { AppState } from 'reducers'
import './Sidebar.scss'

const SpinSide = () => {
    const collapsed = useSelector((state: AppState) => state.app.toggleOfSidebar)

    return (
        <Sidebar className='sidebar' collapsed={collapsed}>
            <Menu>
                <SubMenu icon={<FontAwesomeIcon icon={faHome} />} label='Start'>
                    <MenuItem>Financial</MenuItem>
                    <MenuItem>Projects</MenuItem>
                    <MenuItem>Motor</MenuItem>
                    <MenuItem>System</MenuItem>
                    <MenuItem>Activity Team</MenuItem>
                    <MenuItem>E-Commerce</MenuItem>
                </SubMenu>
                <SubMenu icon={<FontAwesomeIcon icon={faTh} />} label='Widgets'>
                    <MenuItem>Data Widgets</MenuItem>
                    <MenuItem>Graph Widget</MenuItem>
                </SubMenu>
                <SubMenu suffix='🔥' icon={<FontAwesomeIcon icon={faColumns} />} label='Layout'>
                    <MenuItem>Default Page</MenuItem>
                    <MenuItem>Default Fixed</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}

export default SpinSide
