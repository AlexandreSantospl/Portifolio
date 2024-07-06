import { Routes, Route, Navigate } from 'react-router-dom'
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { PaginaInicial } from '../pages/pagina-inicial/PaginaInicial';

export const AppRoutes = () => {

    const { /* toggleDrawerOpen */ setDrawerOptions } = useDrawerContext();

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

            <Route path="/pagina-inicial" element={<PaginaInicial/>} />
            
            <Route path="*" element={<Navigate to="pagina-inicial" />} />

        </Routes>
    )
}