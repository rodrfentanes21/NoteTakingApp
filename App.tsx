import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import MainScreen from './src/screens/MainScreen';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <MainScreen />
        </QueryClientProvider>
    );
};

export default App;
