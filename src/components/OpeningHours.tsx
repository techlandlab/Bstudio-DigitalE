import React from 'react';

const openingHoursData = [
  { day: 'Poniedziałek', hours: '7:00 - 21:00' },
  { day: 'Wtorek', hours: '7:00 - 21:00' },
  { day: 'Środa', hours: '7:00 - 21:00' },
  { day: 'Czwartek', hours: '7:00 - 21:00' },
  { day: 'Piątek', hours: '7:00 - 21:00' },
  { day: 'Sobota', hours: '8:00 - 22:00' },
  { day: 'Niedziela', hours: '9:00 - 20:00' },
];

// JavaScript's getDay() returns 0 for Sunday, 1 for Monday, etc.
// This map aligns with that indexing.
const dayMap = [
    'Niedziela', 
    'Poniedziałek', 
    'Wtorek', 
    'Środa', 
    'Czwartek', 
    'Piątek', 
    'Sobota'
];

const OpeningHours: React.FC = () => {
  const todayIndex = new Date().getDay();
  const todayName = dayMap[todayIndex];

  return (
    <ul className="space-y-3">
      {openingHoursData.map(({ day, hours }) => {
        const isToday = day === todayName;
        return (
          <li key={day} className={`flex justify-between items-center transition-colors duration-300 ${isToday ? 'text-[#d4a373]' : 'text-gray-400'}`}>
            <span className={isToday ? 'font-bold' : ''}>{day}</span>
            <span className="font-mono">{hours}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default OpeningHours;