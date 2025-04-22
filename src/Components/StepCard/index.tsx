interface StepCardProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({ number, icon, title, description, color, index }) => {
    const isRightAligned = (index + 1) % 2 === 0;  
  
    return (
      <div
        className={`flex ${isRightAligned ? 'flex-row-reverse' : 'flex-row'} items-center bg-white rounded-xl shadow-lg mb-8 transition-transform duration-300 transform hover:scale-105`}
        style={{
          borderLeft: !isRightAligned ? `8px solid ${color}` : 'none',
          borderRight: isRightAligned ? `8px solid ${color}` : 'none',
        }}
      >
        {/* Número e ícono */}
        <div className={`flex items-center ${isRightAligned ? 'flex-row-reverse' : ''} w-24 justify-center py-6`}>
          <div className="text-2xl font-bold text-gray-700 mx-2">
            {String(number).padStart(2, '0')}
          </div>
          <span className="text-4xl mx-2 text-center text-indigo-600">{icon}</span>
        </div>
  
        {/* Texto */}
        <div className={`flex-grow px-6 py-6 ${isRightAligned ? 'text-right' : 'text-left'}`}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  };
  export default StepCard;
  