import { Request, Response } from 'express';
import { formatAddress } from '../utils';
import axios from 'axios';

const baseUrl: string = 'https://www.googleapis.com/civicinfo/v2';

export default {
    async findAllElections (req: Request, res: Response): Promise<void> {
        try {
            console.log(`${baseUrl}/elections?key=${process.env.API_KEY}`)
            const { data } = await axios.get(`${baseUrl}/elections?key=${process.env.API_KEY}`);
            res.json(data);
        } catch(err: any) {
            res.json(err.message)
        }
    },
    async findElectionsByAddress (req: Request, res: Response): Promise<void> {
        try {
            const { address } = req.body;
            console.log(`${baseUrl}/voterinfo?address=${formatAddress(address)}&key=${process.env.API_KEY}`)
            const { data } = await axios.get(`${baseUrl}/voterinfo?address=${formatAddress(address)}&key=${process.env.API_KEY}`);
            res.json(data);
        } catch(err: any) {
            res.json(err.message)
        }
    }
}