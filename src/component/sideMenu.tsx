

const SideMenu : React.FC = () => {
    const StrongStyle = {
        fontSize: 20,
    }

    const SelectLabelStyle = {
        fontSize: 15,
        marginTop: 15,
    }

    return <div className="side-menu">
        <label><strong style={StrongStyle}>Меню:</strong></label>
        <input type="text" placeholder="Enter name"></input>
        <label className="check-lbl"><input type="checkbox"/>Check</label>

        <label style={SelectLabelStyle}>Select:</label>
        <br/>
        <select>
            <option >Категория 1</option>
            <option >Категория 2</option>
        </select>
    </div>
}

export default SideMenu;