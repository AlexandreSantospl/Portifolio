import { Routes, Route, Navigate } from 'react-router-dom'
import { useDrawerContext } from '../shared/contexts';
import { Button } from '@mui/material';
import { useEffect } from 'react';

export const AppRoutes = () => {

    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Pagina Inicial',
                icon: 'home',
                path: 'pagina-inicial',
            }
        ])
    }, [])

    return (
        <Routes>

            <Route path="/pagina-inicial" element={<Button variant="contained" color="error" onClick={toggleDrawerOpen}>Abrir</Button>} />

            <Route path="*" element={<Navigate to="pagina-inicial" />} />

        </Routes>
    )
}