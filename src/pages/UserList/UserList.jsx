// Style
import React, { useMemo } from "react";
import "./UserList.css";
// React Table
import MaterialReactTable from "material-react-table";
// Material
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Data
import { userData } from "../../data/data";

const UserList = () => {

    const columns = useMemo(() => [
        {
            accessorKey: "name.firstName",
            header: 'Prénom',
        },
        {
            accessorKey: "name.lastName",
            header: 'Nom',
        },
        {
            accessorKey: "address",
            header: "Adresse",
        },
        {
            accessorKey: "city",
            header: "Ville",
        },
    ])

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode: "dark"
            }
        })
    )

    return (
        <div className="table-container">
            <ThemeProvider theme={theme}>
                <MaterialReactTable columns={columns} data={userData} />
            </ThemeProvider>
        </div>
    );
};

export default UserList;