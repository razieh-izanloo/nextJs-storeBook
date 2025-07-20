  export const submitFormLogin = async (email: string, password: string) => {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      return data.status;    
  };

   export const messages: Record<number, { text: string; type: string }> = {
      200: { text: "login success", type: "success" },
      401: { text: "The email or password is incorrect.", type: "error" },
      500: {
        text: "There is a problem with the server. Please try again",
        type: "error",
      },
    };