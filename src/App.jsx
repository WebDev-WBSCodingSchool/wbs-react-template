const App = () => {
  return (
    <div className='main-container'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center gap-3 mb-5'>
          <h1 className='text-4xl wbs-gradient'>React + Tailwind + DaisyUI</h1>
          <div className='flex gap-3'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png'
              alt='React Logo'
              className='h-12'
            />
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png'
              alt='Tailwind Logo'
              className='h-12'
            />
            <img
              src='https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png'
              alt='DaisyUI Logo'
              className='h-12'
            />
          </div>
        </div>
        <div className='flex flex-col items-center gap-3 mb-5'>
          <h2 className='text-3xl wbs-gradient'>Built with Vite</h2>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg'
            alt='Vite Logo'
            className='h-10'
          />
        </div>
      </div>
      <h3 className='text-2xl my-2'>Clone into directory</h3>
      <div className='mockup-code w-full lg:w-2/3'>
        <pre data-prefix='$'>
          <code>
            git clone git@github.com:WebDev-WBSCodingSchool/wbs-react-template.git &lt;directory&gt;
          </code>
        </pre>
      </div>
      <h3 className='text-2xl my-2'>Install</h3>
      <div className='mockup-code w-full lg:w-2/3'>
        <pre data-prefix='$'>
          <code>cd &lt;directory&gt; && npm i</code>
        </pre>
      </div>
      <h3 className='text-2xl my-2'>Code</h3>
      <div className='mockup-code w-full lg:w-2/3'>
        <pre data-prefix='$'>
          <code>npm run dev</code>
        </pre>
        <pre>
          <code>
            <span className='text-green-400'>VITE v6.2.0 </span>
            <span className='text-gray-600'>ready in </span>
            508 ms
          </code>
        </pre>
        <pre>
          <code>
            <span className='text-green-400'> ➜ </span>
            Local: <span className='text-cyan-400 underline'>http://localhost:5173/</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className='text-green-400'> ➜ </span>
            <span className='text-gray-600'>Network: use </span>
            --host
            <span className='text-gray-600'> to expose</span>
          </code>
        </pre>
        <pre>
          <code>
            <span className='text-green-400'> ➜ </span>
            <span className='text-gray-600'>press </span>h + enter
            <span className='text-gray-600'> to show help</span>
          </code>
        </pre>
        <pre>
          <code>&#47;*! 🌼 daisyUI 5 *&#47;</code>
        </pre>
      </div>
    </div>
  );
};

export default App;
