import './App.css'

function App() {
  return (
    <div className="relative overflow-hidden">
      <img src="/gredient bg.png" alt="Background" className="w-full h-auto block" />
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5"
        style={{
          backgroundImage: 'url(/background-grid.gif)',
          backgroundSize: '33.333% auto',
          backgroundRepeat: 'repeat'
        }}
      >
      </div>
      <img 
        src="/skeleton-with-glasses.gif" 
        alt="Skeleton" 
        className="absolute"
        style={{
          left: '562px',
          top: '191px',
          width: '73px',
          height: 'auto',
          zIndex: 20
        }}
      />
      <img 
        src="/id card.png" 
        alt="ID Card" 
        className="absolute"
        style={{
          left: '461px',
          top: '0',
          width: '275px',
          height: 'auto'
        }}
      />
      <div 
        className="absolute text-white"
        style={{
          left: '740px',
          top: '170px',
          maxWidth: '380px',
          fontFamily: 'Forum, serif'
        }}
      >
        <h1 className="text-3xl mb-3 text-white">Hi, I'm Sudhanshu</h1>
        <p className="text-xl mb-3 text-gray-400">
          I build <span className="text-purple-400">full-stack applications</span>. Passionate<br />about creating projects that make a real-<br />world impact. I focus on clean code and <br />user experience.
        </p>
        <p className="text-xl text-gray-400 ">
          Open to <span className="text-purple-400">collaborations</span> and <span className="text-purple-400">opportunities</span>.<br /> Feel free to reach out!
        </p>
      </div>
    </div>
  )
}

export default App
