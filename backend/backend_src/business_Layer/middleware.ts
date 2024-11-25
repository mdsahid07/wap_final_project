import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET = 'sahidmiuaugentryid618670';

export const authenticate = (req: any, res: any, next: any) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.json({ success: false, message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, SECRET) as JwtPayload & { userId: string; userName: string; };
        req.user = decoded;
        next();
    } catch (err) {
        return res.json({ success: false, message: 'Invalid token' });
    }
};
