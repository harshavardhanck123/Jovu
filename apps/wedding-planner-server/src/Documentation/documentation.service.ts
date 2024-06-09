import { Injectable } from "@nestjs/common";

@Injectable()
export class DocumentationService {
  constructor() {}
  async CreateReadme(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
