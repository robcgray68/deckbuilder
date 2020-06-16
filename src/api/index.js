import axios from 'axios';

import './index.css';

export async function fetchCards({ name, text}) {
  try {
    const { data } = await axios.get(
      `https://api.magicthegathering.io/v1/cards?name=${ name }&text=${ text }`
    );
    
    return data.cards || [];
  } catch (err) {
    throw err;
  }
}