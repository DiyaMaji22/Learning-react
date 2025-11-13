import React, { useState, useMemo } from 'react'
function UseMemoexample() {
    


    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light');

    const expensiveCalculation = useMemo(() => {
        console.log('Calculating...');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += count;
        }
        return result;
    }, [count]);

    const themeStyles = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '20px',
        borderRadius: '8px'
    };

    return (
        <div style={themeStyles}>
            <h2>useMemo Example</h2>
            <div>
                <button onClick={() => setCount(count + 1)}>
                    Increment Count: {count}
                </button>
            </div>
            <div style={{ marginTop: '10px' }}>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    Toggle Theme: {theme}
                </button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3>Expensive Calculation Result: {expensiveCalculation}</h3>
            </div>
        </div>
    )
}

export default UseMemoexample