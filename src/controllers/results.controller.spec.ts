import { ResultsController } from "./results.controller";
import Container from "typedi";
import { MockLogger } from "../util/test-util";
import { SelectedFlashCards, ResultsResponse } from "../types/FlashCard";
import { ResultsService } from "../services";
import { BadRequestError, InternalServerError } from "routing-controllers";

Container.set("logger", new MockLogger());

const mockGetResults = jest.fn();
class MockResultsService {
  getResults = mockGetResults;
}

Container.set(ResultsService, new MockResultsService());

afterEach(() => {
  jest.clearAllMocks();
});

describe("The Results Controller", () => {
  let controller: ResultsController;
  let flashCardIds: SelectedFlashCards = { cards: ["test id 1", "test id 2"] };

  beforeEach(() => {
    controller = Container.get(ResultsController);
  });

  it("should return results", async () => {
    let expectedResponse: ResultsResponse = {
      results: [
        {
          _id: "test id 1",
          _rev: "test rev 1",
          expl_title: "some title 1",
          expl_body: "some body 1",
          image: "some image 1",
          recommendations: [
            {
              title: "some recommendation title 1",
              body: "some recommendation body 1",
            },
          ],
        },
        {
          _id: "test id 2",
          _rev: "test rev 2",
          expl_title: "some title 2",
          expl_body: "some body 2",
          image: "some image 2",
          recommendations: [
            {
              title: "some recommendation title 1",
              body: "some recommendation body 1",
            },
          ],
        },
      ],
    };

    mockGetResults.mockImplementation((ids: string[]) => {
      return expectedResponse;
    });

    let response = await controller.getResults(flashCardIds);

    expect(response).toEqual(expectedResponse);
    expect(mockGetResults).toHaveBeenCalledWith(["test id 1", "test id 2"]);
  });

  it("should return Bad request error if selected flash cards is missing", async () => {
    const functionToThrow = async () => await controller.getResults(undefined);

    await expect(functionToThrow()).rejects.toThrow(
      new BadRequestError(`Bad argument`)
    );
  });

  it("should return Bad request error if arg is not correctly defined", async () => {
    const functionToThrow = async () =>
      await controller.getResults({ cards: undefined });

    await expect(functionToThrow()).rejects.toThrow(
      new BadRequestError(`Bad argument`)
    );
  });

  it("should return Bad request error if arg is not correctly defined", async () => {
    const functionToThrow = async () =>
      await controller.getResults({ cards: [] });

    await expect(functionToThrow()).rejects.toThrow(
      new BadRequestError(`Bad argument`)
    );
  });

  it("should return Internal error if service throws an error", async () => {
    mockGetResults.mockImplementation(() => {
      throw new Error("Ugly error");
    });
    const functionToThrow = async () =>
      await controller.getResults(flashCardIds);

    await expect(functionToThrow()).rejects.toThrow(
      new InternalServerError(`failed to get results`)
    );
  });
});
