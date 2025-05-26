import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'tachyons';
import Card from './Card.jsx';
import CardList from './CardList.jsx';
import { robots } from './robots.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList robots={robots}/>
  </StrictMode>,
)
