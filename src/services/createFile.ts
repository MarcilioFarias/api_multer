import express from "express";
import { writeFile, readFile, unlink } from "fs/promises";

// Create a file
export const writeTxt = async (user: string) => {
    console.log('Creating a file...');
    const list = [user];
    const listUser = list.join("\n");
    await writeFile('./src/list.txt', listUser); 
    console.log('File created');   
}

// Read a file
const readTxt = async () =>{
    const fileContent = await readFile('./list.txt', { encoding: 'utf-8' });
    const arrayTxt = fileContent.split('\n');
    console.log(arrayTxt);
}

// Update a file
export const updateList = async (user:string) => {
    const fileContent = await readFile('./list.txt', { encoding: 'utf-8' });
    const list  = fileContent.split('\n');
    list.push(user);

    const listTxt = list.join('\n');
    await writeFile('./list.txt', listTxt);
    console.log(listTxt);
};