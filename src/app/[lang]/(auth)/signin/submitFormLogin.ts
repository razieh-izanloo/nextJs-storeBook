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

      const { status } = await res.json();
      return status;    
  };