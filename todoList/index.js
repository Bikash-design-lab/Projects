
const App = () => {
    const [text, setText] = React.useState("");
    const [todos, setTodos] = React.useState([]);
  
    const handleTodos = (e) => {
      setText(e.target.value);
      console.log("text : ", text);
    };
  
    const addTodos = () => {
      if (text.trim() !== "") {
        setTodos([...todos, text]);
        setText("");
      }
    };
  
    const handleDelete = (indx) => {
      const newTodos = todos.filter((_, i) => i != indx);
      setTodos(newTodos);
    };
  
    // Inline styles
    const appStyles = {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };
  
    const headingStyles = {
      fontSize: '2em',
      color: '#333',
      marginBottom: '20px',

    };
  
    const inputContainerStyles = {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginBottom: '20px',
    };
  
    const inputStyles = {
      padding: '10px',
      fontSize: '1em',
      width: '300px',
      border: '2px solid #ddd',
      borderRadius: '5px',
    };
  
    const buttonStyles = {
      padding: '10px 15px',
      fontSize: '1em',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };
  
    const todoListStyles = {
      marginTop: '20px',
    };
  
    const todoItemStyles = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid #ddd',
    };
  
    const deleteButtonStyles = {
      backgroundColor: '#ff4d4d',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
    };
  
    return (
      <div style={appStyles}>
        <h1 style={headingStyles}>Welcome users 🤩</h1>
        <div style={inputContainerStyles}>
          <input
            type="text"
            placeholder="Add a new task..."
            onChange={handleTodos}
            value={text}
            style={inputStyles}
          />
          <button onClick={addTodos} style={buttonStyles}>
            Add Todo
          </button>
        </div>
        <div style={todoListStyles}>
          <ul>
            {todos.map((ele, indx) => (
              <li key={indx} style={todoItemStyles}>
                <span>{ele}</span>
                <button
                  onClick={() => handleDelete(indx)}
                  style={deleteButtonStyles}
                >
                  Delete 🗑️
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  