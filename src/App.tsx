import { Envelope, Lock } from "phosphor-react"
import { Heading } from "./components/Heading"
import { Text } from "./components/Text"
import { TextInput } from "./components/TextInput"
import { Logo } from "./Logo"
import "./styles/global.css"
import { Checkbox } from "./components/Checkbox"
import { Button } from "./components/Button"

export function App() {

  return (
    <>
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="text-2xl" className="mt-4 text-center">
          Bem-vindo à Rocket Infly
        </Heading>
        <Text size="text-lg" className="text-gray-400 mt-2  text-center">Faça login e comece a usar!</Text>
      </header>
      <form className="flex flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder="Digite seu e-mail"/>
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3 mt-4">
          <Text className="font-semibold">Sua Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="paswword" placeholder="********"/>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2 mt-4">
          <Checkbox id="remember"/>
          <Text size="text-sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="text-sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="text-sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora</a>
        </Text>
      </footer>
    </div>
    </>
  )
}
