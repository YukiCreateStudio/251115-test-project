"use server";

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactData(_prevState: any, formData: FormData) {
  const rawFormData = {
    lastname: formData.get("lastname") as string,
    firstname: formData.get("firstname") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  if (!rawFormData.lastname) {
    return {
      status: "error",
      message: "姓を入力してください",
    };
  }

  if (!rawFormData.firstname) {
    return {
      status: "error",
      message: "名を入力してください",
    };
  }

  if (!rawFormData.company) {
    return {
      status: "error",
      message: "会社名を入力してください",
    };
  }

  if (!rawFormData.email) {
    return {
      status: "error",
      message: "メールアドレスを入力してください",
    };
  }

  if (!validateEmail(rawFormData.email)) {
    return {
      status: "error",
      message: "メールアドレスの形式が誤っています",
    };
  }
  if (!rawFormData.message) {
    return {
      status: "error",
      message: "メッセージを入力してください",
    };
  }

  const web3FormData = new FormData();
  web3FormData.append("access_key", process.env.WEB3FORMS_KEY!);

  web3FormData.append("lastname", rawFormData.lastname);
  web3FormData.append("firstname", rawFormData.firstname);
  web3FormData.append("company", rawFormData.company);
  web3FormData.append("email", rawFormData.email);
  web3FormData.append("message", rawFormData.message);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: web3FormData,
  });

  const data = await response.json();

  if (!data.success) {
    return {
      status: "error",
      message: "送信中にエラーが発生しました",
    };
  }

  return { status: "success", message: "OK" };
}
