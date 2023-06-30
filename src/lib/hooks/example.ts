/* eslint-disable */
import type { Prisma, Example } from '@prisma/client';
import { useContext } from 'react';
import { RequestHandlerContext, type RequestOptions } from './_helper';
import * as request from './_helper';

export function useMutateExample() {
    const { endpoint } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/example/find`,
        `${endpoint}/example/aggregate`,
        `${endpoint}/example/count`,
        `${endpoint}/example/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createExample<T extends Prisma.ExampleCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.ExampleCreateArgs>,
    ) {
        try {
            return await request.post<Prisma.CheckSelect<T, Example, Prisma.ExampleGetPayload<T>>>(
                `${endpoint}/example/create`,
                args,
                mutate,
            );
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function createManyExample<T extends Prisma.ExampleCreateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ExampleCreateManyArgs>,
    ) {
        try {
            return await request.post<Prisma.BatchPayload>(`${endpoint}/example/createMany`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function updateExample<T extends Prisma.ExampleUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.ExampleUpdateArgs>,
    ) {
        try {
            return await request.put<Prisma.ExampleGetPayload<T>>(`${endpoint}/example/update`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function updateManyExample<T extends Prisma.ExampleUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ExampleUpdateManyArgs>,
    ) {
        try {
            return await request.put<Prisma.BatchPayload>(`${endpoint}/example/updateMany`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function upsertExample<T extends Prisma.ExampleUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.ExampleUpsertArgs>,
    ) {
        try {
            return await request.post<Prisma.ExampleGetPayload<T>>(`${endpoint}/example/upsert`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function deleteExample<T extends Prisma.ExampleDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.ExampleDeleteArgs>,
    ) {
        try {
            return await request.del<Prisma.ExampleGetPayload<T>>(`${endpoint}/example/delete`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function deleteManyExample<T extends Prisma.ExampleDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.ExampleDeleteManyArgs>,
    ) {
        try {
            return await request.del<Prisma.BatchPayload>(`${endpoint}/example/deleteMany`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }
    return {
        createExample,
        createManyExample,
        updateExample,
        updateManyExample,
        upsertExample,
        deleteExample,
        deleteManyExample,
    };
}

export function useFindManyExample<T extends Prisma.ExampleFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ExampleFindManyArgs>,
    options?: RequestOptions<Array<Prisma.ExampleGetPayload<T>>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.ExampleGetPayload<T>>>(`${endpoint}/example/findMany`, args, options);
}

export function useFindUniqueExample<T extends Prisma.ExampleFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ExampleFindUniqueArgs>,
    options?: RequestOptions<Prisma.ExampleGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Prisma.ExampleGetPayload<T>>(`${endpoint}/example/findUnique`, args, options);
}

export function useFindFirstExample<T extends Prisma.ExampleFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ExampleFindFirstArgs>,
    options?: RequestOptions<Prisma.ExampleGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Prisma.ExampleGetPayload<T>>(`${endpoint}/example/findFirst`, args, options);
}

export function useAggregateExample<T extends Prisma.ExampleAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.ExampleAggregateArgs>,
    options?: RequestOptions<Prisma.GetExampleAggregateType<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetExampleAggregateType<T>>(`${endpoint}/example/aggregate`, args, options);
}

export function useGroupByExample<
    T extends Prisma.ExampleGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ExampleGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ExampleGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.TupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
        ? {
              [P in HavingFields]: P extends ByFields
                  ? never
                  : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
>(
    args?: Prisma.SubsetIntersection<T, Prisma.ExampleGroupByArgs, OrderByArg> & InputErrors,
    options?: RequestOptions<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.ExampleGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ExampleGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ExampleGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ExampleGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.ExampleGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ExampleGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ExampleGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ExampleGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/example/groupBy`, args, options);
}

export function useCountExample<T extends Prisma.ExampleCountArgs>(
    args?: Prisma.Subset<T, Prisma.ExampleCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ExampleCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ExampleCountAggregateOutputType>
            : number
    >(`${endpoint}/example/count`, args, options);
}
