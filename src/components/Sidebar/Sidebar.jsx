import "./sidebar.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className = "sidebarItem">
                <span className="sidebarTitle">FILTERS</span>
                <FormGroup>
                <FormControlLabel label="MENS" control={<Checkbox defaultunChecked />}  />
                <FormControlLabel label="WOMENS" control={<Checkbox defaultunChecked />}  />
                </FormGroup>
        
            </div>
            <div className = "sidebarItem">
            <span className="sidebarTitle">BRANDS</span>
            <FormGroup>
            <FormControlLabel label="612 Ivy League" control={<Checkbox defaultunChecked />}  />
            <FormControlLabel label="7th Heaven" control={<Checkbox defaultunChecked />}  />
            <FormControlLabel label="9teenAGAIN" control={<Checkbox defaultunChecked />}  />
            <FormControlLabel label="A Little Fable" control={<Checkbox defaultunChecked />}  />
            <FormControlLabel label="Allen Cooper" control={<Checkbox defaultunChecked />}  />
            </FormGroup>
            </div>
            <div className = "sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <FormGroup>
            <FormControlLabel label="SHIRTS" control={<Checkbox defaultunChecked />}  />
            <FormControlLabel label="T-SHIRTS" control={<Checkbox defaultunChecked />}  />
            <FormControlLabel label="KURTI" control={<Checkbox defaultunChecked />}  />
            <FormControlLabel label="SHOES" control={<Checkbox defaultunChecked />}  />
            <FormControlLabel label="PALAZZOS" control={<Checkbox defaultunChecked />}  />
            </FormGroup>
           

            </div>
            
        </div>
    )
}
