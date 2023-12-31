import { FC, PropsWithChildren } from 'react'

export const DarkLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div style={{backgroundColor: "#fffb", borderRadius: "5px", padding: "50px"}}>
      
      <h3>Dark-Layout</h3>

      <div>
        {children}
      </div>

    </div>
  )
}
