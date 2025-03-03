import { AuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "@/get-payload";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
