"use server"

import { db } from "@/db";
import { CaseColor, CaseFinish, CaseMaterial, PhoneModel } from "@prisma/client";

export type SaveConfiArgs = {
    color: CaseColor,
    finish: CaseFinish,
    material: CaseMaterial,
    model: PhoneModel,
    configId: string
}

export async function saveConfig({color, finish, material, model, configId} : SaveConfiArgs) {
    await db.configuration.update({
        where: {
            id: configId
        },
        data: {
            color,
            finish,
            material, 
            model
        }
    })
}