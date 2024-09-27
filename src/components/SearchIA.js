import React, { useState } from 'react';
import { Search } from 'lucide-react';
import levenshtein from 'fast-levenshtein';

const brands = [
"Xiaomi", "Lenovo", "Vivo", "Oppo", "OnePlus", "Realme", "Tecno", "Infinix", "Meizu", "ZTE",
  "Micromax", "Lava", "Karbonn", "Intex", "Gionee", "Coolpad", "LeEco", "Itel", "Panasonic Mobile",
  "Sharp", "Toshiba", "Kyocera", "Casio", "Philips", "Alcatel", "BlackBerry", "Palm", "Nokia",
  "Siemens Mobile", "Motorola", "HTC", "LG Mobile", "Sony Mobile", "Ericsson", "Vodafone",
  "O2", "T-Mobile", "Orange", "Docomo", "SoftBank", "KDDI", "Rakuten Mobile", "Jio", "Airtel",
  "Vodacom", "MTN", "Etisalat", "Zain", "Ooredoo", "Telstra", "Optus", "Singtel", "StarHub",
  "Globe Telecom", "PLDT", "Telkomsel", "Indosat", "XL Axiata", "AIS", "TrueMove", "DTAC",
  "Celcom", "Maxis", "DiGi", "Telenor", "Jazz", "Zong", "Ufone", "Mobily", "STC", "du",
  "Batelco", "Verizon", "AT&T Mobility", "T-Mobile US", "Sprint", "US Cellular", "Cricket Wireless",
  "Metro by T-Mobile", "Boost Mobile", "Virgin Mobile", "Straight Talk", "TracFone", "Consumer Cellular",
  "Republic Wireless", "Ting", "Google Fi", "Mint Mobile", "Visible", "Xfinity Mobile", "Spectrum Mobile",
  "Rogers", "Bell", "Telus", "Freedom Mobile", "Videotron", "Koodo", "Fido", "Virgin Plus", "Chatr",
  "Public Mobile", "Lucky Mobile", "PC Mobile", "7-Eleven Speak Out Wireless", "Petro-Canada Mobility",
  "TekSavvy", "Distributel", "VMedia", "Start.ca", "Cogeco", "Shaw", "Eastlink", "SaskTel", "MTS",
  "Tbaytel", "Ice Wireless", "Iristel", "SSi Micro", "Xplornet", "Execulink", "Storm Internet",
  "CIK Telecom", "Acanac", "Primus", "ACN", "Vonage", "Ooma", "NetTalk", "MagicJack", "Skype",
  "WhatsApp", "Viber", "Line", "WeChat", "Telegram", "Signal", "Snapchat", "TikTok", "Instagram",
  "Facebook Messenger", "Twitter", "LinkedIn", "Pinterest", "Reddit", "Tumblr", "Flickr", "Imgur",
  "DeviantArt", "Behance", "Dribbble", "500px", "Unsplash", "Pexels", "Pixabay", "Shutterstock",
  "Getty Images", "Adobe Stock", "iStock", "Freepik", "Canva", "PicsArt", "VSCO", "Snapseed",
  "Lightroom", "Photoshop", "GIMP", "Inkscape", "Affinity Designer", "Sketch", "Figma", "InVision",
  "Adobe XD", "Axure", "Balsamiq", "Marvel", "Framer", "Proto.io", "Zeplin", "Abstract", "Principle",
  "ProtoPie", "Origami Studio", "Adobe After Effects", "Cinema 4D", "Blender", "Maya", "3ds Max",
  "ZBrush", "Houdini", "Nuke", "Fusion 360", "Rhino", "SketchUp", "AutoCAD", "SolidWorks", "Inventor",
  "Creo", "CATIA", "Alias", "Grasshopper", "Unity", "Unreal Engine", "CryEngine", "Godot", "GameMaker",
  "Construct", "RPG Maker", "Twine", "Ren'Py", "Phaser", "Cocos2d", "LibGDX", "MonoGame", "LÖVE",
  "Pygame", "SFML", "SDL", "OpenGL", "Vulkan", "DirectX", "Metal", "WebGL", "Three.js", "Babylon.js",];

// Función para obtener coincidencias aproximadas usando Levenshtein
const getClosestMatches = (input, brands) => {
  const threshold = 3;  // Ajusta la tolerancia de errores (entre más bajo, más preciso)
  return brands.filter(brand => levenshtein.get(input.toLowerCase(), brand.toLowerCase()) <= threshold);
};

const SearchIA = ({ onSearch }) => {  // Asegúrate de recibir onSearch como prop
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      alert('Por favor, ingrese una palabra válida. Los espacios no son permitidos.');
      onSearch(null);  // Si no hay input válido, pasamos null
      return;
    }

    const closestMatches = getClosestMatches(inputValue, brands);  // Filtra las marcas con Levenshtein
    onSearch(closestMatches);  // Pasa las coincidencias a App.js
  };

  return (
    <div className="w-full max-w-[1024px] mx-auto relative">
      <form
        onSubmit={handleSubmit}
        className="flex items-center h-[68px] rounded-[14px] shadow-md border-2 border-white bg-transparent"
      >
        <div className="flex items-center w-full pl-4 relative">
          <Search size={24} className="absolute left-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar marca..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-full py-4 pl-12 pr-4 outline-none text-white bg-transparent rounded-[14px]"
          />
        </div>
        <button
          type="submit"
          className="bg-[#04D99D] text-white rounded-[14px] px-4 h-[50px] mx-2 hover:bg-[#04B986] transition-colors"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchIA;
