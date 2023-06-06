import { Request, Response } from 'express';
import { formatAddress, formatDivisionId } from '../utils';
import axios from 'axios';

const baseUrl: string = 'https://www.googleapis.com/civicinfo/v2/representatives';

export default {
    async findByAddress (req: Request, res: Response): Promise<void> {
        try {
            const { address } = req.body;
            const { data } = await axios.get(`${baseUrl}?address=${formatAddress(address)}&key=${process.env.API_KEY}`);
            res.json(data);
        } catch(err: any) {
            res.json(err.message)
        }
    },
    async findByDivision (req: Request, res: Response): Promise<void> {
        try {
            const { divisionId } = req.body;
            const { data } = await axios.get(`${baseUrl}/${formatDivisionId(divisionId)}?key=${process.env.API_KEY}`);
            res.json(data);
        } catch(err: any) {
            res.json(err.message)
        }
    }
}