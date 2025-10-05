// components/LocationSelector.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const LocationSelector = ({ isOpen, onClose, onLocationSelect }) => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [pingResults, setPingResults] = useState({});

  // Mock locations data - replace with your actual locations
  const defaultLocations = [
    { id: 1, name: 'New York, USA', code: 'nyc', endpoint: 'https://api.newyork.yourhost.com/ping' },
    { id: 2, name: 'London, UK', code: 'lon', endpoint: 'https://api.london.yourhost.com/ping' },
    { id: 3, name: 'Singapore', code: 'sg', endpoint: 'https://api.singapore.yourhost.com/ping' },
    { id: 4, name: 'Frankfurt, Germany', code: 'fra', endpoint: 'https://api.frankfurt.yourhost.com/ping' },
    { id: 5, name: 'Sydney, Australia', code: 'syd', endpoint: 'https://api.sydney.yourhost.com/ping' },
    { id: 6, name: 'São Paulo, Brazil', code: 'sao', endpoint: 'https://api.saopaulo.yourhost.com/ping' },
  ];

  useEffect(() => {
    if (isOpen) {
      setLocations(defaultLocations);
      pingAllLocations();
    }
  }, [isOpen]);

  const pingLocation = async (location) => {
    try {
      const startTime = Date.now();
      await axios.get(location.endpoint, { timeout: 5000 });
      const pingTime = Date.now() - startTime;
      
      return {
        success: true,
        ping: pingTime,
        status: 'online'
      };
    } catch (error) {
      return {
        success: false,
        ping: null,
        status: 'offline',
        error: error.message
      };
    }
  };

  const pingAllLocations = async () => {
    setLoading(true);
    const results = {};

    // Ping all locations concurrently
    const pingPromises = defaultLocations.map(async (location) => {
      const result = await pingLocation(location);
      results[location.id] = result;
    });

    await Promise.all(pingPromises);
    setPingResults(results);
    setLoading(false);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    onLocationSelect(location);
    onClose();
  };

  const getPingColor = (ping) => {
    if (!ping) return 'text-gray-500';
    if (ping < 50) return 'text-green-500';
    if (ping < 100) return 'text-yellow-500';
    if (ping < 200) return 'text-orange-500';
    return 'text-red-500';
  };

  const getStatusIcon = (locationId) => {
    const result = pingResults[locationId];
    if (!result) return '🔄';
    
    if (result.status === 'online') {
      return '🟢';
    } else {
      return '🔴';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Select Server Location</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Choose your preferred server location
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-600 mt-2">Testing server locations...</p>
          </div>
        )}

        {/* Locations List */}
        {!loading && (
          <div className="overflow-y-auto max-h-96">
            {locations.map((location) => {
              const pingResult = pingResults[location.id];
              
              return (
                <div
                  key={location.id}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <button
                    onClick={() => handleLocationSelect(location)}
                    className="w-full px-6 py-4 text-left hover:bg-blue-50 transition-colors focus:outline-none focus:bg-blue-50"
                    disabled={pingResult && !pingResult.success}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">
                            {getStatusIcon(location.id)}
                          </span>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {location.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {location.code.toUpperCase()}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {pingResult && pingResult.success && (
                        <div className={`font-mono text-sm font-semibold ${getPingColor(pingResult.ping)}`}>
                          {pingResult.ping}ms
                        </div>
                      )}
                      
                      {pingResult && !pingResult.success && (
                        <div className="text-sm text-red-500 font-medium">
                          Offline
                        </div>
                      )}
                    </div>
                    
                    {pingResult && !pingResult.success && (
                      <p className="text-xs text-red-400 mt-1 text-left">
                        Server temporarily unavailable
                      </p>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <button
              onClick={pingAllLocations}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>🔄</span>
              <span>Refresh Ping</span>
            </button>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>&lt;50ms</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>&lt;100ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;