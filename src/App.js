import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components';

const App = () => {
  return ( 
    <BrowserRouter>
        <Box sx={{background: '#000'}}>
            <Navbar />
            <Routes>
                <Route exact path="/"  element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App

/* 
BrowserRouter - A `browser-router` stores the current location in the browser's address bar using clean URL and navigates using the browser's built-in history stack.
 */