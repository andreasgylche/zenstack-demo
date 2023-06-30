import { NextRequestHandler } from '@zenstackhq/server/next'
import { withPresets } from '@zenstackhq/runtime'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerAuthSession } from '~/server/auth'
import { prisma } from '~/server/db'

async function getPrisma(req: NextApiRequest, res: NextApiResponse) {

  const session = await getServerAuthSession({ req, res })

    return withPresets(prisma, { user: session?.user})
}

export default NextRequestHandler({ getPrisma })