
"use server"

import { db } from '@/db'
import { OrderStatus } from '@prisma/client'

interface ChangeOrdersStatusProps {
    id: string
    newStatus: OrderStatus
}

export const changeOrderStatus = async ({
    id,
    newStatus,
}: ChangeOrdersStatusProps) => {
    await db.order.update({
        where: { id },
        data: { status: newStatus },
    })
}
