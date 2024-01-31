import { useState } from "react";

const PasswordGenerator = () => {
  const data = [
    {
      id: 1,
      name: "Include Uppercase Letters",
      checked: true,
      key: "uppercase",
    },
    {
      id: 2,
      name: "Include Lowercase Letters",
      checked: false,
      key: "lowercase",
    },
    {
      id: 3,
      name: "Include Numbers",
      checked: false,
      key: "numbers",
    },
    {
      id: 4,
      name: "Include Symbols",
      checked: false,
      key: "symbols",
    },
  ];
  const [generatedPassword, setGeneratedPassword] = useState("ABCDEFGHIJK");
  const [isCopied, setIsCopied] = useState(false);
  const [displayData, setDisplayData] = useState(data);
  const [passwordLength, setPasswordLength] = useState(12);
  const [passwordStrength, setPasswordStrength] = useState("weak");

  const handleCopyText = async () => {
    setIsCopied(true);
    await navigator.clipboard.writeText(generatedPassword);
    alert("Password is Copied");
  };

  const generatePassword = () => {
    const characters = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()-=_+[]{}|;:'\",.<>/?`~",
    };

    let allowedCharacters = "";

    displayData.forEach((item) => {
      if (item.checked) {
        allowedCharacters += characters[item.key];
      }
    });

    console.log("allowedCharacters:", allowedCharacters);

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
      password += allowedCharacters.charAt(randomIndex);
    }
    console.log("generated password", password);
    setGeneratedPassword(password);
  };

  const passwordStrengthGenerator = () => {
    let length = 0;
    displayData.forEach((item) => {
      if (item.checked) {
        length++;
      }
    });

    if (length === 4) {
      setPasswordStrength("Strong");
    } else if (length === 3) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  };

  const handleGeneratePassword = () => {
    generatePassword();
    passwordStrengthGenerator();
    setIsCopied(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Password Generator</h1>
      <div
        style={{
          height: "500px",
          width: "700px",
          background: "grey",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "20px",
            // alignItems: "center",
          }}
        >
          <h4>{generatedPassword}</h4>
          <button
            style={{ padding: "8px", width: "100px", height: "34px" }}
            onClick={handleCopyText}
          >
            {isCopied ? "Copied " : "Copy"}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h4>Character Length</h4>
          <h4>{generatedPassword?.length}</h4>
        </div>
        {/* ADD CODE FOR SLIDER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          {displayData?.map((item) => (
            <div
              key={item.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                type="checkbox"
                checked={item?.checked}
                onChange={() =>
                  setDisplayData((prevData) =>
                    prevData.map((prevItem) =>
                      prevItem.id === item.id
                        ? { ...prevItem, checked: !prevItem.checked }
                        : prevItem
                    )
                  )
                }
              />
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <h4>Strength</h4>
          <h4>{passwordStrength}</h4>
        </div>
        <div style={{}}>
          <button
            style={{ padding: "24px", width: "100%", borderRadius: "14px" }}
            onClick={handleGeneratePassword}
          >
            GENERATE PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
};
export default PasswordGenerator;
