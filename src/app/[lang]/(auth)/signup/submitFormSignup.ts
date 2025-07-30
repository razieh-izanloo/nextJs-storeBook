  type ValuesProps = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    repeatPassword: string
  }
  export const submitFormSignup = async (values: ValuesProps) => {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values
        }),
      });

      const data = await res.json();
      return data.status;    
  };

   export const messages: Record<number, { text: string; type: string }> = {
      200: { text: "success", type: "success" },
      400: { text: "repetitionPass", type: "warning" },
      409: { text: "emailExists", type: "warning" },
      500: {
        text: "problemServer",
        type: "error",
      },
    };
