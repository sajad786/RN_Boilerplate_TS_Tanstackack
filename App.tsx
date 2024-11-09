import { View, Text } from 'react-native'
import React from 'react'
import Routes from './src/navigation/Routes'
import {Provider} from 'react-redux';
import store from './src/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const App = () => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <Routes/>
      </QueryClientProvider>
    </Provider>
  )
}

export default App