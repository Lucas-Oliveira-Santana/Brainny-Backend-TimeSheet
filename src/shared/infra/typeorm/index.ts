import { Connection, ConnectionOptions, createConnection, getConnectionOptions } from "typeorm"

export default async (): Promise<Connection> => {
  const defaultOptions: ConnectionOptions = await getConnectionOptions()

  return createConnection(
    Object.assign(defaultOptions, {
      database: process.env.NODE_ENV === 'brainny' ? 'brainny' : defaultOptions.database
    })
  )
}