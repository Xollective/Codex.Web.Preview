/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.3.6
 */
Bridge.assembly("Codex.View.Web", function ($asm, globals) {
    "use strict";

    var monaco_editor_ignored;

    Bridge.define("Codex.AdapterTypeAttribute", {
        inherits: [System.Attribute]
    });

    /** @namespace Codex */

    /**
     * Indicates an attached property which is not intrinsic to the parent object and should be
     excluded when computing the {@link }
     *
     * @public
     * @class Codex.AttachedAttribute
     * @augments System.Attribute
     */
    Bridge.define("Codex.AttachedAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.CodeReviewerStatus", {
        $kind: "enum",
        statics: {
            fields: {
                NotStarted: 0,
                Waiting: 1,
                ApprovedWithSuggestions: 2,
                Approved: 3,
                Declined: 4
            }
        }
    });

    Bridge.define("Codex.CodeReviewStatus", {
        $kind: "enum"
    });

    Bridge.define("Codex.CoerceGetAttribute", {
        inherits: [System.Attribute],
        fields: {
            CoercedSourceType: null
        },
        ctors: {
            ctor: function (coercedSourceType) {
                if (coercedSourceType === void 0) { coercedSourceType = null; }

                this.$initialize();
                System.Attribute.ctor.call(this);
                this.CoercedSourceType = coercedSourceType;
            }
        }
    });

    Bridge.define("Codex.CommentImportance", {
        $kind: "enum",
        statics: {
            fields: {
                /**
                 * Indicates that the author can decide to take the change or not
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 0
                 * @type Codex.CommentImportance
                 */
                AuthorDecides: 0,
                /**
                 * Default importance
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 1
                 * @type Codex.CommentImportance
                 */
                Info: 1,
                /**
                 * Reviewer would like further discussion on this comment
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 2
                 * @type Codex.CommentImportance
                 */
                Discuss: 2,
                /**
                 * Waiting on this comment to be addressed in order to approve
                 *
                 * @static
                 * @public
                 * @memberof Codex.CommentImportance
                 * @constant
                 * @default 3
                 * @type Codex.CommentImportance
                 */
                Blocker: 3
            }
        }
    });

    Bridge.define("Codex.CommentStatus", {
        $kind: "enum",
        statics: {
            fields: {
                Unpublished: 0,
                Active: 1,
                Resolved: 2,
                WontFix: 3,
                Pending: 4,
                Closed: 5
            }
        }
    });

    Bridge.define("Codex.DataInclusionAttribute", {
        inherits: [System.Attribute],
        fields: {
            DataInclusion: 0
        },
        ctors: {
            ctor: function (dataInclusion) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.DataInclusion = dataInclusion;
            }
        }
    });

    Bridge.define("Codex.DataInclusionOptions", {
        $kind: "enum",
        statics: {
            fields: {
                /**
                 * Data should always be included
                 *
                 * @static
                 * @public
                 * @memberof Codex.DataInclusionOptions
                 * @constant
                 * @default 0
                 * @type Codex.DataInclusionOptions
                 */
                None: 0,
                Definitions: 1,
                References: 2,
                Classifications: 4,
                SearchDefinitions: 8,
                SearchReferences: 16,
                Content: 32,
                All: 63,
                Default: 62
            }
        }
    });

    Bridge.define("Codex.ISerializableEntity", {
        $kind: "interface"
    });

    Bridge.define("Codex.EntityIdAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.EntityUtilities", {
        statics: {
            methods: {
                NullOrCopy: function (T, TTarget, obj, copy) {
                    if (obj == null) {
                        return null;
                    }
                    return copy(obj);
                }
            }
        }
    });

    /**
     * Describes change kinds for files
     *
     * @public
     * @class Codex.FileChangeKind
     */
    Bridge.define("Codex.FileChangeKind", {
        $kind: "enum",
        statics: {
            fields: {
                Add: 0,
                Edit: 1,
                Rename: 2,
                Delete: 3
            }
        }
    });

    Bridge.define("Codex.Framework.Types.IStore", {
        $kind: "interface"
    });

    /** @namespace Codex.Framework.Types */

    /**
     * High level storage operations
     *
     * @abstract
     * @public
     * @class Codex.Framework.Types.IStore$1
     */
    Bridge.definei("Codex.Framework.Types.IStore$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define("Codex.GeneratedClassNameAttribute", {
        inherits: [System.Attribute],
        fields: {
            Name: null
        },
        ctors: {
            ctor: function (name) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Name = name;
            }
        }
    });

    Bridge.define("Codex.IRepoScopeEntity", {
        $kind: "interface"
    });

    /**
     * Marker interface for searchable entities
     TODO: Consider moving {@link } out if its not needed by all searchable entities
     *
     * @abstract
     * @public
     * @class Codex.ISearchEntity
     */
    Bridge.define("Codex.ISearchEntity", {
        $kind: "interface"
    });

    /**
     * Describes a branch in a repository
     *
     * @abstract
     * @public
     * @class Codex.IBranch
     */
    Bridge.define("Codex.IBranch", {
        $kind: "interface"
    });

    Bridge.define("Codex.IClassificationList", {
        $kind: "interface"
    });

    Bridge.define("Codex.ISpan", {
        $kind: "interface"
    });

    /**
     * Describes styling for a given classification
     *
     * @abstract
     * @public
     * @class Codex.IClassificationStyle
     */
    Bridge.define("Codex.IClassificationStyle", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReview", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewComment", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewCommentThread", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewerInfo", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeReviewIteration", {
        $kind: "interface"
    });

    Bridge.define("Codex.ICodeSymbol", {
        $kind: "interface"
    });

    /**
     * Represents a version of a repository file for a commit
     *
     * @abstract
     * @public
     * @class Codex.ICommitFileLink
     */
    Bridge.define("Codex.ICommitFileLink", {
        $kind: "interface"
    });

    /**
     * Defines documentation about a symbol
     *
     * @abstract
     * @public
     * @class Codex.IDocumentationInfo
     */
    Bridge.define("Codex.IDocumentationInfo", {
        $kind: "interface"
    });

    /**
     * Describes encoding so that file may be reconstituted in a byte-identical form
     *
     * @abstract
     * @public
     * @class Codex.IEncodingDescription
     */
    Bridge.define("Codex.IEncodingDescription", {
        $kind: "interface"
    });

    Bridge.define("Codex.IFileStatistics", {
        $kind: "interface"
    });

    Bridge.define("Codex.ILanguageInfo", {
        $kind: "interface"
    });

    Bridge.definei("Codex.IMutable$2", function (TMutable, TImmutable) { return {
        $kind: "interface"
    }; });

    /**
     * Indicates stages for which the given property should be included
     *
     * @public
     * @class Codex.IncludeAttribute
     * @augments System.Attribute
     */
    Bridge.define("Codex.IncludeAttribute", {
        inherits: [System.Attribute],
        fields: {
            AllowedStages: 0
        },
        ctors: {
            ctor: function (stages) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.AllowedStages = stages;
            }
        }
    });

    Bridge.define("Codex.IOutliningRegion", {
        $kind: "interface"
    });

    /**
     * Documentation for a method parameter
     *
     * @abstract
     * @public
     * @class Codex.IParameterDocumentation
     */
    Bridge.define("Codex.IParameterDocumentation", {
        $kind: "interface"
    });

    Bridge.define("Codex.IPropertyMap", {
        $kind: "interface"
    });

    Bridge.define("Codex.IReferencedProject", {
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceList", {
        $kind: "interface"
    });

    Bridge.define("Codex.IRepository", {
        $kind: "interface"
    });

    Bridge.define("Codex.IRepositoryReference", {
        $kind: "interface"
    });

    /**
     * Information for creating an ICodexRepositoryStore
     *
     * @abstract
     * @public
     * @class Codex.IRepositoryStoreInfo
     */
    Bridge.define("Codex.IRepositoryStoreInfo", {
        $kind: "interface"
    });

    /**
     * Information about a source file as defined by the source control provider
     *
     * @abstract
     * @public
     * @class Codex.ISourceControlFileInfo
     */
    Bridge.define("Codex.ISourceControlFileInfo", {
        $kind: "interface"
    });

    /**
     * Defines text contents of a file and associated data
     *
     * @abstract
     * @public
     * @class Codex.ISourceFile
     */
    Bridge.define("Codex.ISourceFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.IStoredBoundSourceFile", {
        $kind: "interface"
    });

    Bridge.define("Codex.ISymbolLineSpanList", {
        $kind: "interface"
    });

    Bridge.define("Codex.MutableExtensions");

    Bridge.define("Codex.ObjectModel.CodexTypeUtilities", {
        statics: {
            fields: {
                s_typeMappings: null
            },
            ctors: {
                init: function () {
                    this.s_typeMappings = Codex.ObjectModel.CodexTypeUtilities.CreateTypeMapping();
                }
            },
            methods: {
                CreateTypeMapping: function () {
                    var typeMapping = new (System.Collections.Generic.Dictionary$2(Function,Function))();
                    typeMapping.add(Codex.ICommit, Codex.ObjectModel.Commit);
                    typeMapping.add(Codex.ObjectModel.Commit, Codex.ICommit);
                    typeMapping.add(Codex.ICommitChangedFile, Codex.ObjectModel.CommitChangedFile);
                    typeMapping.add(Codex.ObjectModel.CommitChangedFile, Codex.ICommitChangedFile);
                    typeMapping.add(Codex.ICommitFileLink, Codex.ObjectModel.CommitFileLink);
                    typeMapping.add(Codex.ObjectModel.CommitFileLink, Codex.ICommitFileLink);
                    typeMapping.add(Codex.IBranch, Codex.ObjectModel.Branch);
                    typeMapping.add(Codex.ObjectModel.Branch, Codex.IBranch);
                    typeMapping.add(Codex.IBoundSourceFile, Codex.ObjectModel.BoundSourceFile);
                    typeMapping.add(Codex.ObjectModel.BoundSourceFile, Codex.IBoundSourceFile);
                    typeMapping.add(Codex.IBoundSourceInfo, Codex.ObjectModel.BoundSourceInfo);
                    typeMapping.add(Codex.ObjectModel.BoundSourceInfo, Codex.IBoundSourceInfo);
                    typeMapping.add(Codex.ISourceControlFileInfo, Codex.ObjectModel.SourceControlFileInfo);
                    typeMapping.add(Codex.ObjectModel.SourceControlFileInfo, Codex.ISourceControlFileInfo);
                    typeMapping.add(Codex.ISourceFileInfo, Codex.ObjectModel.SourceFileInfo);
                    typeMapping.add(Codex.ObjectModel.SourceFileInfo, Codex.ISourceFileInfo);
                    typeMapping.add(Codex.IEncodingDescription, Codex.ObjectModel.EncodingDescription);
                    typeMapping.add(Codex.ObjectModel.EncodingDescription, Codex.IEncodingDescription);
                    typeMapping.add(Codex.ISourceFile, Codex.ObjectModel.SourceFile);
                    typeMapping.add(Codex.ObjectModel.SourceFile, Codex.ISourceFile);
                    typeMapping.add(Codex.IOutliningRegion, Codex.ObjectModel.OutliningRegion);
                    typeMapping.add(Codex.ObjectModel.OutliningRegion, Codex.IOutliningRegion);
                    typeMapping.add(Codex.IDefinitionSpan, Codex.ObjectModel.DefinitionSpan);
                    typeMapping.add(Codex.ObjectModel.DefinitionSpan, Codex.IDefinitionSpan);
                    typeMapping.add(Codex.IParameterDefinitionSpan, Codex.ObjectModel.ParameterDefinitionSpan);
                    typeMapping.add(Codex.ObjectModel.ParameterDefinitionSpan, Codex.IParameterDefinitionSpan);
                    typeMapping.add(Codex.IReferenceSpan, Codex.ObjectModel.ReferenceSpan);
                    typeMapping.add(Codex.ObjectModel.ReferenceSpan, Codex.IReferenceSpan);
                    typeMapping.add(Codex.IParameterReferenceSpan, Codex.ObjectModel.ParameterReferenceSpan);
                    typeMapping.add(Codex.ObjectModel.ParameterReferenceSpan, Codex.IParameterReferenceSpan);
                    typeMapping.add(Codex.IClassificationSpan, Codex.ObjectModel.ClassificationSpan);
                    typeMapping.add(Codex.ObjectModel.ClassificationSpan, Codex.IClassificationSpan);
                    typeMapping.add(Codex.ISymbolSpan, Codex.ObjectModel.SymbolSpan);
                    typeMapping.add(Codex.ObjectModel.SymbolSpan, Codex.ISymbolSpan);
                    typeMapping.add(Codex.ITextLineSpan, Codex.ObjectModel.TextLineSpan);
                    typeMapping.add(Codex.ObjectModel.TextLineSpan, Codex.ITextLineSpan);
                    typeMapping.add(Codex.ILineSpan, Codex.ObjectModel.LineSpan);
                    typeMapping.add(Codex.ObjectModel.LineSpan, Codex.ILineSpan);
                    typeMapping.add(Codex.ISpan, Codex.ObjectModel.Span);
                    typeMapping.add(Codex.ObjectModel.Span, Codex.ISpan);
                    typeMapping.add(Codex.ICodeReview, Codex.ObjectModel.CodeReview);
                    typeMapping.add(Codex.ObjectModel.CodeReview, Codex.ICodeReview);
                    typeMapping.add(Codex.ICodeReviewIteration, Codex.ObjectModel.CodeReviewIteration);
                    typeMapping.add(Codex.ObjectModel.CodeReviewIteration, Codex.ICodeReviewIteration);
                    typeMapping.add(Codex.ICodeReviewerInfo, Codex.ObjectModel.CodeReviewerInfo);
                    typeMapping.add(Codex.ObjectModel.CodeReviewerInfo, Codex.ICodeReviewerInfo);
                    typeMapping.add(Codex.ICodeReviewFile, Codex.ObjectModel.CodeReviewFile);
                    typeMapping.add(Codex.ObjectModel.CodeReviewFile, Codex.ICodeReviewFile);
                    typeMapping.add(Codex.ICodeReviewCommentThread, Codex.ObjectModel.CodeReviewCommentThread);
                    typeMapping.add(Codex.ObjectModel.CodeReviewCommentThread, Codex.ICodeReviewCommentThread);
                    typeMapping.add(Codex.ICodeReviewComment, Codex.ObjectModel.CodeReviewComment);
                    typeMapping.add(Codex.ObjectModel.CodeReviewComment, Codex.ICodeReviewComment);
                    typeMapping.add(Codex.ILanguageInfo, Codex.ObjectModel.LanguageInfo);
                    typeMapping.add(Codex.ObjectModel.LanguageInfo, Codex.ILanguageInfo);
                    typeMapping.add(Codex.IClassificationStyle, Codex.ObjectModel.ClassificationStyle);
                    typeMapping.add(Codex.ObjectModel.ClassificationStyle, Codex.IClassificationStyle);
                    typeMapping.add(Codex.IProject, Codex.ObjectModel.AnalyzedProject);
                    typeMapping.add(Codex.ObjectModel.AnalyzedProject, Codex.IProject);
                    typeMapping.add(Codex.IReferencedProject, Codex.ObjectModel.ReferencedProject);
                    typeMapping.add(Codex.ObjectModel.ReferencedProject, Codex.IReferencedProject);
                    typeMapping.add(Codex.IProjectFileLink, Codex.ObjectModel.ProjectFileLink);
                    typeMapping.add(Codex.ObjectModel.ProjectFileLink, Codex.IProjectFileLink);
                    typeMapping.add(Codex.IDocumentationInfo, Codex.ObjectModel.DocumentationInfo);
                    typeMapping.add(Codex.ObjectModel.DocumentationInfo, Codex.IDocumentationInfo);
                    typeMapping.add(Codex.IParameterDocumentation, Codex.ObjectModel.ParameterDocumentation);
                    typeMapping.add(Codex.ObjectModel.ParameterDocumentation, Codex.IParameterDocumentation);
                    typeMapping.add(Codex.ITypedParameterDocumentation, Codex.ObjectModel.TypedParameterDocumentation);
                    typeMapping.add(Codex.ObjectModel.TypedParameterDocumentation, Codex.ITypedParameterDocumentation);
                    typeMapping.add(Codex.IDocumentationReferenceSymbol, Codex.ObjectModel.DocumentationReferenceSymbol);
                    typeMapping.add(Codex.ObjectModel.DocumentationReferenceSymbol, Codex.IDocumentationReferenceSymbol);
                    typeMapping.add(Codex.IPropertySearchModel, Codex.ObjectModel.PropertySearchModel);
                    typeMapping.add(Codex.ObjectModel.PropertySearchModel, Codex.IPropertySearchModel);
                    typeMapping.add(Codex.IPropertyMap, Codex.ObjectModel.PropertyMap);
                    typeMapping.add(Codex.ObjectModel.PropertyMap, Codex.IPropertyMap);
                    typeMapping.add(Codex.IRepository, Codex.ObjectModel.Repository);
                    typeMapping.add(Codex.ObjectModel.Repository, Codex.IRepository);
                    typeMapping.add(Codex.IRepositoryReference, Codex.ObjectModel.RepositoryReference);
                    typeMapping.add(Codex.ObjectModel.RepositoryReference, Codex.IRepositoryReference);
                    typeMapping.add(Codex.ISearchEntity, Codex.ObjectModel.SearchEntity);
                    typeMapping.add(Codex.ObjectModel.SearchEntity, Codex.ISearchEntity);
                    typeMapping.add(Codex.IRepoScopeEntity, Codex.ObjectModel.RepoScopeEntity);
                    typeMapping.add(Codex.ObjectModel.RepoScopeEntity, Codex.IRepoScopeEntity);
                    typeMapping.add(Codex.ICommitScopeEntity, Codex.ObjectModel.CommitScopeEntity);
                    typeMapping.add(Codex.ObjectModel.CommitScopeEntity, Codex.ICommitScopeEntity);
                    typeMapping.add(Codex.IProjectScopeEntity, Codex.ObjectModel.ProjectScopeEntity);
                    typeMapping.add(Codex.ObjectModel.ProjectScopeEntity, Codex.IProjectScopeEntity);
                    typeMapping.add(Codex.IRepoFileScopeEntity, Codex.ObjectModel.RepoFileScopeEntity);
                    typeMapping.add(Codex.ObjectModel.RepoFileScopeEntity, Codex.IRepoFileScopeEntity);
                    typeMapping.add(Codex.IProjectFileScopeEntity, Codex.ObjectModel.ProjectFileScopeEntity);
                    typeMapping.add(Codex.ObjectModel.ProjectFileScopeEntity, Codex.IProjectFileScopeEntity);
                    typeMapping.add(Codex.IRegisteredEntity, Codex.ObjectModel.RegisteredEntity);
                    typeMapping.add(Codex.ObjectModel.RegisteredEntity, Codex.IRegisteredEntity);
                    typeMapping.add(Codex.IStoredFilter, Codex.ObjectModel.StoredFilter);
                    typeMapping.add(Codex.ObjectModel.StoredFilter, Codex.IStoredFilter);
                    typeMapping.add(Codex.IDefinitionSearchModel, Codex.ObjectModel.DefinitionSearchModel);
                    typeMapping.add(Codex.ObjectModel.DefinitionSearchModel, Codex.IDefinitionSearchModel);
                    typeMapping.add(Codex.ILanguageSearchModel, Codex.ObjectModel.LanguageSearchModel);
                    typeMapping.add(Codex.ObjectModel.LanguageSearchModel, Codex.ILanguageSearchModel);
                    typeMapping.add(Codex.IReferenceSearchModel, Codex.ObjectModel.ReferenceSearchModel);
                    typeMapping.add(Codex.ObjectModel.ReferenceSearchModel, Codex.IReferenceSearchModel);
                    typeMapping.add(Codex.ISourceSearchModelBase, Codex.ObjectModel.SourceSearchModelBase);
                    typeMapping.add(Codex.ObjectModel.SourceSearchModelBase, Codex.ISourceSearchModelBase);
                    typeMapping.add(Codex.IBoundSourceSearchModel, Codex.ObjectModel.BoundSourceSearchModel);
                    typeMapping.add(Codex.ObjectModel.BoundSourceSearchModel, Codex.IBoundSourceSearchModel);
                    typeMapping.add(Codex.ITextSourceSearchModel, Codex.ObjectModel.TextSourceSearchModel);
                    typeMapping.add(Codex.ObjectModel.TextSourceSearchModel, Codex.ITextSourceSearchModel);
                    typeMapping.add(Codex.IRepositorySearchModel, Codex.ObjectModel.RepositorySearchModel);
                    typeMapping.add(Codex.ObjectModel.RepositorySearchModel, Codex.IRepositorySearchModel);
                    typeMapping.add(Codex.IProjectSearchModel, Codex.ObjectModel.ProjectSearchModel);
                    typeMapping.add(Codex.ObjectModel.ProjectSearchModel, Codex.IProjectSearchModel);
                    typeMapping.add(Codex.IProjectReferenceSearchModel, Codex.ObjectModel.ProjectReferenceSearchModel);
                    typeMapping.add(Codex.ObjectModel.ProjectReferenceSearchModel, Codex.IProjectReferenceSearchModel);
                    typeMapping.add(Codex.ICommitSearchModel, Codex.ObjectModel.CommitSearchModel);
                    typeMapping.add(Codex.ObjectModel.CommitSearchModel, Codex.ICommitSearchModel);
                    typeMapping.add(Codex.ICommitFilesSearchModel, Codex.ObjectModel.CommitFilesSearchModel);
                    typeMapping.add(Codex.ObjectModel.CommitFilesSearchModel, Codex.ICommitFilesSearchModel);
                    typeMapping.add(Codex.IFileStatistics, Codex.ObjectModel.FileStatistics);
                    typeMapping.add(Codex.ObjectModel.FileStatistics, Codex.IFileStatistics);
                    typeMapping.add(Codex.IRepositoryStoreInfo, Codex.ObjectModel.RepositoryStoreInfo);
                    typeMapping.add(Codex.ObjectModel.RepositoryStoreInfo, Codex.IRepositoryStoreInfo);
                    typeMapping.add(Codex.ICommitFilesDirectory, Codex.ObjectModel.CommitFilesDirectory);
                    typeMapping.add(Codex.ObjectModel.CommitFilesDirectory, Codex.ICommitFilesDirectory);
                    typeMapping.add(Codex.IStoredBoundSourceFile, Codex.ObjectModel.StoredBoundSourceFile);
                    typeMapping.add(Codex.ObjectModel.StoredBoundSourceFile, Codex.IStoredBoundSourceFile);
                    typeMapping.add(Codex.IDefinitionSymbol, Codex.ObjectModel.DefinitionSymbol);
                    typeMapping.add(Codex.ObjectModel.DefinitionSymbol, Codex.IDefinitionSymbol);
                    typeMapping.add(Codex.IReferenceSymbol, Codex.ObjectModel.ReferenceSymbol);
                    typeMapping.add(Codex.ObjectModel.ReferenceSymbol, Codex.IReferenceSymbol);
                    typeMapping.add(Codex.ICodeSymbol, Codex.ObjectModel.Symbol);
                    typeMapping.add(Codex.ObjectModel.Symbol, Codex.ICodeSymbol);
                    typeMapping.add(Codex.Sdk.Search.IReferenceSearchResult, Codex.ObjectModel.ReferenceSearchResult);
                    typeMapping.add(Codex.ObjectModel.ReferenceSearchResult, Codex.Sdk.Search.IReferenceSearchResult);
                    typeMapping.add(Codex.Sdk.Search.ITextLineSpanResult, Codex.ObjectModel.TextLineSpanResult);
                    typeMapping.add(Codex.ObjectModel.TextLineSpanResult, Codex.Sdk.Search.ITextLineSpanResult);
                    typeMapping.add(Codex.Sdk.Search.ISearchResult, Codex.ObjectModel.SearchResult);
                    typeMapping.add(Codex.ObjectModel.SearchResult, Codex.Sdk.Search.ISearchResult);
                    typeMapping.add(Codex.Sdk.Search.IIndex, Codex.ObjectModel.Index);
                    typeMapping.add(Codex.ObjectModel.Index, Codex.Sdk.Search.IIndex);
                    return typeMapping;
                }
            }
        }
    });

    /** @namespace Codex.ObjectModel */

    /**
     * Allows defining extension data during analysis
     *
     * @public
     * @class Codex.ObjectModel.ExtensionData
     */
    Bridge.define("Codex.ObjectModel.ExtensionData");

    /**
     * Defines Codex glyphs
     *
     * @public
     * @class Codex.ObjectModel.Glyph
     */
    Bridge.define("Codex.ObjectModel.Glyph", {
        $kind: "enum",
        statics: {
            fields: {
                Unknown: -1,
                Assembly: 0,
                BasicFile: 1,
                BasicProject: 2,
                ClassPublic: 3,
                ClassProtected: 4,
                ClassPrivate: 5,
                ClassInternal: 6,
                CSharpFile: 7,
                CSharpProject: 8,
                ConstantPublic: 9,
                ConstantProtected: 10,
                ConstantPrivate: 11,
                ConstantInternal: 12,
                DelegatePublic: 13,
                DelegateProtected: 14,
                DelegatePrivate: 15,
                DelegateInternal: 16,
                EnumPublic: 17,
                EnumProtected: 18,
                EnumPrivate: 19,
                EnumInternal: 20,
                EnumMember: 21,
                Error: 22,
                EventPublic: 23,
                EventProtected: 24,
                EventPrivate: 25,
                EventInternal: 26,
                ExtensionMethodPublic: 27,
                ExtensionMethodProtected: 28,
                ExtensionMethodPrivate: 29,
                ExtensionMethodInternal: 30,
                FieldPublic: 31,
                FieldProtected: 32,
                FieldPrivate: 33,
                FieldInternal: 34,
                InterfacePublic: 35,
                InterfaceProtected: 36,
                InterfacePrivate: 37,
                InterfaceInternal: 38,
                Intrinsic: 39,
                Keyword: 40,
                Label: 41,
                Local: 42,
                Namespace: 43,
                MethodPublic: 44,
                MethodProtected: 45,
                MethodPrivate: 46,
                MethodInternal: 47,
                ModulePublic: 48,
                ModuleProtected: 49,
                ModulePrivate: 50,
                ModuleInternal: 51,
                OpenFolder: 52,
                Operator: 53,
                Parameter: 54,
                PropertyPublic: 55,
                PropertyProtected: 56,
                PropertyPrivate: 57,
                PropertyInternal: 58,
                RangeVariable: 59,
                Reference: 60,
                StructurePublic: 61,
                StructureProtected: 62,
                StructurePrivate: 63,
                StructureInternal: 64,
                TypeParameter: 65,
                Up: 66,
                Down: 67,
                Left: 68,
                Right: 69,
                Dot: 70,
                Snippet: 71
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities", {
        statics: {
            methods: {
                GetGlyphNumber: function (glyph) {
                    var result = (((((Codex.ObjectModel.GlyphUtilities.GetStandardGlyphGroup(glyph)) & 65535) + ((Codex.ObjectModel.GlyphUtilities.GetStandardGlyphItem(glyph)) & 65535)) | 0)) & 65535;
                    return result;
                },
                GetStandardGlyphGroup: function (glyph) {
                    switch (glyph) {
                        case Codex.ObjectModel.Glyph.Assembly: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphAssembly;
                        case Codex.ObjectModel.Glyph.ClassPublic: 
                        case Codex.ObjectModel.Glyph.ClassProtected: 
                        case Codex.ObjectModel.Glyph.ClassPrivate: 
                        case Codex.ObjectModel.Glyph.ClassInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupClass;
                        case Codex.ObjectModel.Glyph.ConstantPublic: 
                        case Codex.ObjectModel.Glyph.ConstantProtected: 
                        case Codex.ObjectModel.Glyph.ConstantPrivate: 
                        case Codex.ObjectModel.Glyph.ConstantInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupConstant;
                        case Codex.ObjectModel.Glyph.CSharpFile: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphCSharpFile;
                        case Codex.ObjectModel.Glyph.DelegatePublic: 
                        case Codex.ObjectModel.Glyph.DelegateProtected: 
                        case Codex.ObjectModel.Glyph.DelegatePrivate: 
                        case Codex.ObjectModel.Glyph.DelegateInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupDelegate;
                        case Codex.ObjectModel.Glyph.EnumPublic: 
                        case Codex.ObjectModel.Glyph.EnumProtected: 
                        case Codex.ObjectModel.Glyph.EnumPrivate: 
                        case Codex.ObjectModel.Glyph.EnumInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEnum;
                        case Codex.ObjectModel.Glyph.EnumMember: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEnumMember;
                        case Codex.ObjectModel.Glyph.Error: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupError;
                        case Codex.ObjectModel.Glyph.ExtensionMethodPublic: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethod;
                        case Codex.ObjectModel.Glyph.ExtensionMethodProtected: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodProtected;
                        case Codex.ObjectModel.Glyph.ExtensionMethodPrivate: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodPrivate;
                        case Codex.ObjectModel.Glyph.ExtensionMethodInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphExtensionMethodInternal;
                        case Codex.ObjectModel.Glyph.EventPublic: 
                        case Codex.ObjectModel.Glyph.EventProtected: 
                        case Codex.ObjectModel.Glyph.EventPrivate: 
                        case Codex.ObjectModel.Glyph.EventInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupEvent;
                        case Codex.ObjectModel.Glyph.FieldPublic: 
                        case Codex.ObjectModel.Glyph.FieldProtected: 
                        case Codex.ObjectModel.Glyph.FieldPrivate: 
                        case Codex.ObjectModel.Glyph.FieldInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupField;
                        case Codex.ObjectModel.Glyph.InterfacePublic: 
                        case Codex.ObjectModel.Glyph.InterfaceProtected: 
                        case Codex.ObjectModel.Glyph.InterfacePrivate: 
                        case Codex.ObjectModel.Glyph.InterfaceInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupInterface;
                        case Codex.ObjectModel.Glyph.Intrinsic: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupIntrinsic;
                        case Codex.ObjectModel.Glyph.Keyword: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphKeyword;
                        case Codex.ObjectModel.Glyph.Label: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupIntrinsic;
                        case Codex.ObjectModel.Glyph.Local: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.Namespace: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupNamespace;
                        case Codex.ObjectModel.Glyph.MethodPublic: 
                        case Codex.ObjectModel.Glyph.MethodProtected: 
                        case Codex.ObjectModel.Glyph.MethodPrivate: 
                        case Codex.ObjectModel.Glyph.MethodInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupMethod;
                        case Codex.ObjectModel.Glyph.ModulePublic: 
                        case Codex.ObjectModel.Glyph.ModuleProtected: 
                        case Codex.ObjectModel.Glyph.ModulePrivate: 
                        case Codex.ObjectModel.Glyph.ModuleInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupModule;
                        case Codex.ObjectModel.Glyph.OpenFolder: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphOpenFolder;
                        case Codex.ObjectModel.Glyph.Operator: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupOperator;
                        case Codex.ObjectModel.Glyph.Parameter: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.PropertyPublic: 
                        case Codex.ObjectModel.Glyph.PropertyProtected: 
                        case Codex.ObjectModel.Glyph.PropertyPrivate: 
                        case Codex.ObjectModel.Glyph.PropertyInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupProperty;
                        case Codex.ObjectModel.Glyph.RangeVariable: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupVariable;
                        case Codex.ObjectModel.Glyph.Reference: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphReference;
                        case Codex.ObjectModel.Glyph.StructurePublic: 
                        case Codex.ObjectModel.Glyph.StructureProtected: 
                        case Codex.ObjectModel.Glyph.StructurePrivate: 
                        case Codex.ObjectModel.Glyph.StructureInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupStruct;
                        case Codex.ObjectModel.Glyph.TypeParameter: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphGroupType;
                        case Codex.ObjectModel.Glyph.Up: 
                        case Codex.ObjectModel.Glyph.Down: 
                        case Codex.ObjectModel.Glyph.Left: 
                        case Codex.ObjectModel.Glyph.Right: 
                        case Codex.ObjectModel.Glyph.Dot: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup.GlyphArrow;
                        default: 
                            throw new System.ArgumentException("glyph");
                    }
                },
                GetStandardGlyphItem: function (icon) {
                    switch (icon) {
                        case Codex.ObjectModel.Glyph.ClassProtected: 
                        case Codex.ObjectModel.Glyph.ConstantProtected: 
                        case Codex.ObjectModel.Glyph.DelegateProtected: 
                        case Codex.ObjectModel.Glyph.EnumProtected: 
                        case Codex.ObjectModel.Glyph.EventProtected: 
                        case Codex.ObjectModel.Glyph.FieldProtected: 
                        case Codex.ObjectModel.Glyph.InterfaceProtected: 
                        case Codex.ObjectModel.Glyph.MethodProtected: 
                        case Codex.ObjectModel.Glyph.ModuleProtected: 
                        case Codex.ObjectModel.Glyph.PropertyProtected: 
                        case Codex.ObjectModel.Glyph.StructureProtected: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemProtected;
                        case Codex.ObjectModel.Glyph.ClassPrivate: 
                        case Codex.ObjectModel.Glyph.ConstantPrivate: 
                        case Codex.ObjectModel.Glyph.DelegatePrivate: 
                        case Codex.ObjectModel.Glyph.EnumPrivate: 
                        case Codex.ObjectModel.Glyph.EventPrivate: 
                        case Codex.ObjectModel.Glyph.FieldPrivate: 
                        case Codex.ObjectModel.Glyph.InterfacePrivate: 
                        case Codex.ObjectModel.Glyph.MethodPrivate: 
                        case Codex.ObjectModel.Glyph.ModulePrivate: 
                        case Codex.ObjectModel.Glyph.PropertyPrivate: 
                        case Codex.ObjectModel.Glyph.StructurePrivate: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemPrivate;
                        case Codex.ObjectModel.Glyph.ClassInternal: 
                        case Codex.ObjectModel.Glyph.ConstantInternal: 
                        case Codex.ObjectModel.Glyph.DelegateInternal: 
                        case Codex.ObjectModel.Glyph.EnumInternal: 
                        case Codex.ObjectModel.Glyph.EventInternal: 
                        case Codex.ObjectModel.Glyph.FieldInternal: 
                        case Codex.ObjectModel.Glyph.InterfaceInternal: 
                        case Codex.ObjectModel.Glyph.MethodInternal: 
                        case Codex.ObjectModel.Glyph.ModuleInternal: 
                        case Codex.ObjectModel.Glyph.PropertyInternal: 
                        case Codex.ObjectModel.Glyph.StructureInternal: 
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemFriend;
                        default: 
                            // We don't want any overlays
                            return Codex.ObjectModel.GlyphUtilities.StandardGlyphItem.GlyphItemPublic;
                    }
                }
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities.StandardGlyphGroup", {
        $kind: "enum",
        statics: {
            fields: {
                GlyphGroupClass: 0,
                GlyphGroupConstant: 6,
                GlyphGroupDelegate: 12,
                GlyphGroupEnum: 18,
                GlyphGroupEnumMember: 24,
                GlyphGroupEvent: 30,
                GlyphGroupException: 36,
                GlyphGroupField: 42,
                GlyphGroupInterface: 48,
                GlyphGroupMacro: 54,
                GlyphGroupMap: 60,
                GlyphGroupMapItem: 66,
                GlyphGroupMethod: 72,
                GlyphGroupOverload: 78,
                GlyphGroupModule: 84,
                GlyphGroupNamespace: 90,
                GlyphGroupOperator: 96,
                GlyphGroupProperty: 102,
                GlyphGroupStruct: 108,
                GlyphGroupTemplate: 114,
                GlyphGroupTypedef: 120,
                GlyphGroupType: 126,
                GlyphGroupUnion: 132,
                GlyphGroupVariable: 138,
                GlyphGroupValueType: 144,
                GlyphGroupIntrinsic: 150,
                GlyphGroupJSharpMethod: 156,
                GlyphGroupJSharpField: 162,
                GlyphGroupJSharpClass: 168,
                GlyphGroupJSharpNamespace: 174,
                GlyphGroupJSharpInterface: 180,
                GlyphGroupError: 186,
                GlyphBscFile: 191,
                GlyphAssembly: 192,
                GlyphLibrary: 193,
                GlyphVBProject: 194,
                GlyphCoolProject: 196,
                GlyphCppProject: 199,
                GlyphDialogId: 200,
                GlyphOpenFolder: 201,
                GlyphClosedFolder: 202,
                GlyphArrow: 203,
                GlyphCSharpFile: 204,
                GlyphCSharpExpansion: 205,
                GlyphKeyword: 206,
                GlyphInformation: 207,
                GlyphReference: 208,
                GlyphRecursion: 209,
                GlyphXmlItem: 210,
                GlyphJSharpProject: 211,
                GlyphJSharpDocument: 212,
                GlyphForwardType: 213,
                GlyphCallersGraph: 214,
                GlyphCallGraph: 215,
                GlyphWarning: 216,
                GlyphMaybeReference: 217,
                GlyphMaybeCaller: 218,
                GlyphMaybeCall: 219,
                GlyphExtensionMethod: 220,
                GlyphExtensionMethodInternal: 221,
                GlyphExtensionMethodFriend: 222,
                GlyphExtensionMethodProtected: 223,
                GlyphExtensionMethodPrivate: 224,
                GlyphExtensionMethodShortcut: 225,
                GlyphXmlAttribute: 226,
                GlyphXmlChild: 227,
                GlyphXmlDescendant: 228,
                GlyphXmlNamespace: 229,
                GlyphXmlAttributeQuestion: 230,
                GlyphXmlAttributeCheck: 231,
                GlyphXmlChildQuestion: 232,
                GlyphXmlChildCheck: 233,
                GlyphXmlDescendantQuestion: 234,
                GlyphXmlDescendantCheck: 235,
                GlyphCompletionWarning: 236,
                GlyphGroupUnknown: 237
            }
        }
    });

    Bridge.define("Codex.ObjectModel.GlyphUtilities.StandardGlyphItem", {
        $kind: "enum",
        statics: {
            fields: {
                GlyphItemPublic: 0,
                GlyphItemInternal: 1,
                GlyphItemFriend: 2,
                GlyphItemProtected: 3,
                GlyphItemPrivate: 4,
                GlyphItemShortcut: 5,
                TotalGlyphItems: 6
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.IIndex", {
        $kind: "interface"
    });

    /**
     * Defines standard set of project kinds
     *
     * @public
     * @class Codex.ObjectModel.ProjectKind
     */
    Bridge.define("Codex.ObjectModel.ProjectKind", {
        $kind: "enum",
        statics: {
            fields: {
                Source: 0,
                MetadataAsSource: 1,
                Decompilation: 2
            }
        }
    });

    /**
     * Defines standard set of reference kinds
     *
     * @public
     * @class Codex.ObjectModel.ReferenceKind
     */
    Bridge.define("Codex.ObjectModel.ReferenceKind", {
        $kind: "enum",
        statics: {
            fields: {
                Definition: 0,
                /**
                 * This represents a constructor declaration for the given type. This is different than
                 instantiation which actually represents a call to the constructor
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 1
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Constructor: 1,
                /**
                 * A call to the constructor of the type referenced by the symbol. This is different than
                 constructor which is the actual declaration for a constructor for the type symbol.
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 2
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Instantiation: 2,
                DerivedType: 3,
                InterfaceInheritance: 4,
                InterfaceImplementation: 5,
                Override: 6,
                InterfaceMemberImplementation: 7,
                Write: 8,
                Read: 9,
                GuidUsage: 10,
                UsingDispose: 11,
                /**
                 * The symbol is the return type of a method or property getter
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 12
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                ReturnType: 12,
                EmptyArrayAllocation: 13,
                MSBuildPropertyAssignment: 14,
                MSBuildPropertyUsage: 15,
                MSBuildItemAssignment: 16,
                MSBuildItemUsage: 17,
                MSBuildTargetDeclaration: 18,
                MSBuildTargetUsage: 19,
                MSBuildTaskDeclaration: 20,
                MSBuildTaskUsage: 21,
                Text: 22,
                ProjectLevelReference: 23,
                /**
                 * Catch-all reference comes after more specific reference kinds
                 *
                 * @static
                 * @public
                 * @memberof Codex.ObjectModel.ReferenceKind
                 * @constant
                 * @default 24
                 * @type Codex.ObjectModel.ReferenceKind
                 */
                Reference: 24
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.ISearchResult", {
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.SymbolId", {
        inherits: function () { return [System.IEquatable$1(Codex.ObjectModel.SymbolId)]; },
        $kind: "struct",
        statics: {
            methods: {
                UnsafeCreateWithValue: function (value) {
                    return new Codex.ObjectModel.SymbolId.$ctor2(value, true);
                },
                getDefaultValue: function () { return new Codex.ObjectModel.SymbolId(); }
            }
        },
        fields: {
            Value: null
        },
        alias: ["equalsT", "System$IEquatable$1$Codex$ObjectModel$SymbolId$equalsT"],
        ctors: {
            $ctor1: function (value) {
                this.$initialize();
                this.Value = value;
            },
            $ctor2: function (value, ignored) {
                this.$initialize();
                this.Value = value;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equalsT: function (other) {
                return Bridge.referenceEquals(this.Value, other.Value);
            },
            toString: function () {
                return this.Value;
            },
            getHashCode: function () {
                var h = Bridge.addHash([3333875138, this.Value]);
                return h;
            },
            $clone: function (to) {
                var s = to || new Codex.ObjectModel.SymbolId();
                s.Value = this.Value;
                return s;
            }
        }
    });

    Bridge.define("Codex.ObjectStage", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Analysis: 1,
                Index: 2,
                Search: 4,
                All: 7
            }
        }
    });

    Bridge.define("Codex.PlaceholderAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.QueryAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.ReadOnlyListAttribute", {
        inherits: [System.Attribute]
    });

    Bridge.define("Codex.RequiredForAttribute", {
        inherits: [System.Attribute],
        fields: {
            Stages: 0
        },
        ctors: {
            ctor: function (stages) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Stages = stages;
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.IndexFilter$1", function (T) { return {
        statics: {
            methods: {
                op_BitwiseAnd: function (left, right) {
                    return new (Codex.Sdk.Search.BinaryFilter$1(T))(Codex.Sdk.Search.BinaryOperator.And, left, right);
                },
                op_BitwiseOr: function (left, right) {
                    return new (Codex.Sdk.Search.BinaryFilter$1(T))(Codex.Sdk.Search.BinaryOperator.Or, left, right);
                }
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.BinaryOperator", {
        $kind: "enum",
        statics: {
            fields: {
                And: 0,
                Or: 1
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.CodexArgumentsBase", {
        props: {
            /**
             * The maximum number of results to return
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.CodexArgumentsBase
             * @function MaxResults
             * @type number
             */
            MaxResults: 0
        },
        ctors: {
            init: function () {
                this.MaxResults = 100;
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.CodexServiceMethod", {
        $kind: "enum",
        statics: {
            fields: {
                Search: 0,
                FindAllRefs: 1,
                FindDef: 2,
                FindDefLocation: 3,
                GetSource: 4
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.TermIndexProperty$1", function (T) { return {

    }; });

    /** @namespace Codex.Sdk.Search */

    /**
     * High level operations for codex
     *
     * @abstract
     * @public
     * @class Codex.Sdk.Search.ICodex
     */
    Bridge.define("Codex.Sdk.Search.ICodex", {
        $kind: "interface"
    });

    Bridge.definei("Codex.Sdk.Search.IIndexQuery$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.definei("Codex.Sdk.Search.IIndexQueryFilter$1", function (T) { return {
        $kind: "interface"
    }; });

    /**
     * High level query operations for indexed code
     *
     * @abstract
     * @public
     * @class Codex.Sdk.Search.Index$1
     */
    Bridge.define("Codex.Sdk.Search.Index$1", function (T) { return {

    }; });

    Bridge.define("Codex.Sdk.Search.IndexQuery$1", function (T) { return {
        props: {
            Filter: null,
            /**
             * The maximum number of results to return
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQuery$1
             * @function MaxResults
             * @type number
             */
            MaxResults: 0
        }
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryHits$1", function (T) { return {
        props: {
            /**
             * The total number of results matching the query. 
             NOTE: This may be greater than the number of hits returned.
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryHits$1
             * @function Total
             * @type number
             */
            Total: System.Int64(0),
            /**
             * The results of the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryHits$1
             * @function Hits
             * @type System.Collections.Generic.List$1
             */
            Hits: null
        },
        methods: {
            toString: function () {
                return System.String.format("Total: {0}, {1}", this.Total, System.Object.prototype.toString.call(this));
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryResponse", {
        props: {
            /**
             * If the query failed, this will contain the error message
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function Error
             * @type string
             */
            Error: null,
            /**
             * The raw query sent to the index server
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function RawQueries
             * @type System.Collections.Generic.List$1
             */
            RawQueries: null,
            /**
             * The spent executing the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function Duration
             * @type Codex.Sdk.Search.SerializableTimeSpan
             */
            Duration: null,
            /**
             * The spent executing the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse
             * @function ServerTime
             * @type Codex.Sdk.Search.SerializableTimeSpan
             */
            ServerTime: null
        },
        ctors: {
            init: function () {
                this.Duration = new Codex.Sdk.Search.SerializableTimeSpan();
                this.ServerTime = new Codex.Sdk.Search.SerializableTimeSpan();
            }
        },
        methods: {
            toString: function () {
                return System.String.format("Error: {0}, Duration: {1}", this.Error, this.Duration.$clone());
            }
        }
    });

    Bridge.definei("Codex.Sdk.Search.ITermProperty$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define("Codex.Sdk.Search.SerializableTimeSpan", {
        $kind: "struct",
        statics: {
            methods: {
                op_Implicit$1: function (value) {
                    return value.AsTimeSpan();
                },
                op_Implicit: function (value) {
                    return new Codex.Sdk.Search.SerializableTimeSpan.$ctor1(value);
                },
                getDefaultValue: function () { return new Codex.Sdk.Search.SerializableTimeSpan(); }
            }
        },
        props: {
            Ticks: System.Int64(0)
        },
        ctors: {
            $ctor1: function (timespan) {
                this.$initialize();
                this.Ticks = timespan.getTicks();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            AsTimeSpan: function () {
                return System.TimeSpan.fromTicks(this.Ticks);
            },
            toString: function () {
                return this.AsTimeSpan().toString();
            },
            getHashCode: function () {
                var h = Bridge.addHash([9077984700, this.Ticks]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Codex.Sdk.Search.SerializableTimeSpan)) {
                    return false;
                }
                return Bridge.equals(this.Ticks, o.Ticks);
            },
            $clone: function (to) {
                var s = to || new Codex.Sdk.Search.SerializableTimeSpan();
                s.Ticks = this.Ticks;
                return s;
            }
        }
    });

    Bridge.define("Codex.SearchBehavior", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Term: 1,
                NormalizedKeyword: 2,
                Sortword: 3,
                HierarchicalPath: 4,
                FullText: 5,
                Prefix: 6,
                PrefixFullName: 7
            }
        }
    });

    Bridge.define("Codex.SearchBehaviorAttribute", {
        inherits: [System.Attribute],
        fields: {
            Behavior: 0
        },
        ctors: {
            ctor: function (behavior) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Behavior = behavior;
            }
        }
    });

    Bridge.define("Codex.SearchDescriptorInlineAttribute", {
        inherits: [System.Attribute],
        fields: {
            Inline: false
        },
        ctors: {
            ctor: function (inline) {
                if (inline === void 0) { inline = false; }

                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Inline = inline;
            }
        }
    });

    Bridge.define("Codex.SearchType", {
        statics: {
            methods: {
                Create: function (T, registeredSearchTypes, name) {
                    if (name === void 0) { name = null; }
                    var searchType = new (Codex.SearchType$1(T))(name);
                    searchType.Id = registeredSearchTypes.Count;
                    registeredSearchTypes.add(searchType);
                    return searchType;
                }
            }
        },
        props: {
            Name: null,
            IndexName: null,
            Id: 0
        }
    });

    Bridge.define("Codex.SearchTypes", {
        statics: {
            fields: {
                RegisteredSearchTypes: null,
                Definition: null,
                /**
                 * @static
                 * @public
                 * @memberof Codex.SearchTypes
                 * @type Codex.SearchType
                 */
                Reference: null,
                TextSource: null,
                BoundSource: null,
                Language: null,
                Repository: null,
                Project: null,
                Commit: null,
                CommitFiles: null,
                ProjectReference: null,
                Property: null,
                StoredFilter: null,
                RegisteredEntity: null
            },
            ctors: {
                init: function () {
                    var $t, $t1, $t2, $t3, $t4, $t5;
                    this.RegisteredSearchTypes = new (System.Collections.Generic.List$1(Codex.SearchType)).ctor();
                    this.Definition = Codex.SearchType.Create(Codex.IDefinitionSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Definition");
                    this.Reference = Codex.SearchType.Create(Codex.IReferenceSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Reference");
                    this.TextSource = Codex.SearchType.Create(Codex.ITextSourceSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "TextSource");
                    this.BoundSource = Codex.SearchType.Create(Codex.IBoundSourceSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "BoundSource");
                    this.Language = Codex.SearchType.Create(Codex.ILanguageSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Language");
                    this.Repository = Codex.SearchType.Create(Codex.IRepositorySearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Repository");
                    this.Project = Codex.SearchType.Create(Codex.IProjectSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Project").Exclude(($t = { ntype: 38, t: Codex.IProjectSearchModel, n: "sm" }, ($t5 = { ntype: 10, t: System.Object, operand: ($t4 = Bridge.getMetadata(Codex.IReferencedProject).m[0], { ntype: 23, t: $t4.rt, expression: ($t3 = {"td":System.Linq.Enumerable,"a":2,"n":"First","is":true,"t":8,"pi":[{"n":"source","pt":System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject),"ps":0}],"tpc":1,"def":function (TSource, source) { return System.Linq.Enumerable.from(source).first(); },"rt":Codex.IReferencedProject,"p":[System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject)]}, { ntype: 6, t: $t3.rt, obj: null, method: $t3, args: Bridge.toList([{ ntype: 10, t: System.Collections.Generic.IEnumerable$1(Codex.IReferencedProject), operand: ($t2 = Bridge.getMetadata(Codex.IProject).m[2], { ntype: 23, t: $t2.rt, expression: ($t1 = Bridge.getMetadata(Codex.IProjectSearchModel).m[0], { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }), member: $t2 }) }]) }), member: $t4 }) }, { ntype: 18, t: Function, rt: $t5.t, body: $t5, p: Bridge.toList([$t]) })));
                    this.Commit = Codex.SearchType.Create(Codex.ICommitSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Commit");
                    this.CommitFiles = Codex.SearchType.Create(Codex.ICommitFilesSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "CommitFiles");
                    this.ProjectReference = Codex.SearchType.Create(Codex.IProjectReferenceSearchModel, Codex.SearchTypes.RegisteredSearchTypes, "ProjectReference");
                    this.Property = Codex.SearchType.Create(Codex.IPropertySearchModel, Codex.SearchTypes.RegisteredSearchTypes, "Property");
                    this.StoredFilter = Codex.SearchType.Create(Codex.IStoredFilter, Codex.SearchTypes.RegisteredSearchTypes, "StoredFilter");
                    this.RegisteredEntity = Codex.SearchType.Create(Codex.IRegisteredEntity, Codex.SearchTypes.RegisteredSearchTypes, "RegisteredEntity");
                }
            }
        }
    });

    Bridge.define("Codex.SerializationInterfaceAttribute", {
        inherits: [System.Attribute],
        fields: {
            Type: null
        },
        ctors: {
            ctor: function (type) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this.Type = type;
            }
        }
    });

    Bridge.define("Codex.Utilities.CollectionUtilities");

    Bridge.define("Codex.Utilities.CollectionUtilities.Empty$1", function (T) { return {
        statics: {
            fields: {
                List: null,
                Array: null
            },
            ctors: {
                init: function () {
                    this.List = new (System.Collections.Generic.List$1(T)).$ctor2(0);
                    this.Array = System.Array.init(0, function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                }
            }
        }
    }; });

    Bridge.define("Codex.Utilities.SerializationUtilities", {
        statics: {
            methods: {
                AssignDuplicate: function (T, value, lastValue) {
                    if (System.Collections.Generic.EqualityComparer$1(T).def.equals2(value, Bridge.getDefaultValue(T))) {
                        return lastValue.v;
                    } else {
                        lastValue.v = value;
                        return value;
                    }
                },
                RemoveDuplicate: function (T, value, lastValue) {
                    if (System.Collections.Generic.EqualityComparer$1(T).def.equals2(value, Bridge.getDefaultValue(T))) {
                        return Bridge.getDefaultValue(T);
                    } else {
                        lastValue.v = value;
                        return value;
                    }
                }
            }
        }
    });

    Bridge.define("Codex.View.App", {
        inherits: [System.Windows.Application],
        main: function Main () {
            System.Windows.ApplicationHost.Current.System$Windows$IApplicationHost$Run($asm.$.Codex.View.App.f1);
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Application.ctor.call(this);
                Codex.View.Styles.Initialize();
                // TODO: This should be configurable through build properties somehow
                Codex.View.CodexProvider.Instance = new Codex.View.Web.WebApiCodex("http://localhost:9491/api/codex/");
            }
        },
        methods: {
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/App.xaml"));
            }
        }
    });

    Bridge.ns("Codex.View.App", $asm.$);

    Bridge.apply($asm.$.Codex.View.App, {
        f1: function () {
            var application = new Codex.View.App();
            application.InitializeComponent();
            application.Run();
        }
    });

    Bridge.define("Codex.View.NotifyPropertyChangedBase", {
        inherits: [System.ComponentModel.INotifyPropertyChanged],
        events: {
            propertyChanged: null
        },
        alias: ["addPropertyChanged", "System$ComponentModel$INotifyPropertyChanged$addPropertyChanged",
        "removePropertyChanged", "System$ComponentModel$INotifyPropertyChanged$removePropertyChanged"],
        methods: {
            addPropertyChanged: function (value) {
                this.addpropertyChanged(value);
            },
            removePropertyChanged: function (value) {
                this.removepropertyChanged(value);
            },
            OnPropertyChanged: function (memberName) {
                if (memberName === void 0) { memberName = null; }
                !Bridge.staticEquals(this.propertyChanged, null) ? this.propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(memberName)) : null;
            }
        }
    });

    Bridge.define("Codex.View.IResultsStats", {
        $kind: "interface"
    });

    Bridge.define("Codex.View.LeftPaneChild");

    Bridge.define("Codex.View.CodexProvider", {
        statics: {
            props: {
                Instance: null
            }
        }
    });

    Bridge.define("Codex.View.Commands", {
        statics: {
            fields: {
                GoToDefinition: null,
                GoToSpan: null,
                GoToReference: null
            },
            ctors: {
                init: function () {
                    this.GoToDefinition = Codex.View.Commands.CreateCommand("GoToDefinition");
                    this.GoToSpan = Codex.View.Commands.CreateCommand("GoToSpan");
                    this.GoToReference = Codex.View.Commands.CreateCommand("GoToReference");
                }
            },
            methods: {
                CreateCommand: function (name) {
                    if (name === void 0) { name = null; }
                    return new System.Windows.Input.RoutedCommand(name, Codex.View.Commands);
                }
            }
        }
    });

    Bridge.define("Codex.View.Counter", {
        fields: {
            Parent: null,
            Count: 0
        },
        methods: {
            CreateChild: function () {
                var $t;
                return ($t = new Codex.View.Counter(), $t.Parent = this, $t);
            },
            Increment: function () {
                this.Count = (this.Count + 1) | 0;
            },
            Add: function (value) {
                this.Count = value;
            }
        }
    });

    Bridge.define("Codex.View.EditorHostControl", {
        inherits: [System.Windows.FrameworkElement,Granular.Presentation.Web.IHtmlElementHost],
        statics: {
            fields: {
                SourceFileProperty: null
            },
            ctors: {
                init: function () {
                    this.SourceFileProperty = System.Windows.DependencyProperty.Register("SourceFile", Codex.IBoundSourceFile, Codex.View.EditorHostControl, new System.Windows.PropertyMetadata.$ctor2(null, Codex.View.EditorHostControl.OnSourceFileChanged));
                }
            },
            methods: {
                OnSourceFileChanged: function (d, e) {
                    var $t;
                    ($t = (Bridge.as(d, Codex.View.EditorHostControl))) != null ? $t.OnSourceFileChanged() : null;
                }
            }
        },
        fields: {
            m_htmlElement: null,
            m_editor: null,
            renderQueue: null,
            m_text: null
        },
        props: {
            SourceFile: {
                get: function () {
                    return Bridge.cast(this.GetValue(Codex.View.EditorHostControl.SourceFileProperty), Codex.IBoundSourceFile);
                },
                set: function (value) {
                    this.SetValue(Codex.View.EditorHostControl.SourceFileProperty, value);
                }
            }
        },
        alias: ["SetRenderElement", "Granular$Presentation$Web$IHtmlElementHost$SetRenderElement"],
        ctors: {
            init: function () {
                this.renderQueue = new Granular.Host.RenderQueue();
                this.m_text = "Hello World";
            },
            ctor: function () {
                this.$initialize();
                System.Windows.FrameworkElement.ctor.call(this);
                this.Focusable = true;
                this.IsHitTestVisible = true;
            }
        },
        methods: {
            SetRenderElement: function (htmlElement) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    this.m_htmlElement = htmlElement;
                                    $task1 = Monaco.Editor.Create(htmlElement, { value: this.m_text, language: "text", readOnly: true });
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    this.m_editor = $taskResult1;

                                    this.VisualIsHitTestVisible = true;
                                    this.VisualBackground = System.Windows.Media.Brushes.Transparent;
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            ArrangeOverride: function (finalSize) {
                var currentSize = this.VisualBounds.Size;
                finalSize = System.Windows.FrameworkElement.prototype.ArrangeOverride.call(this, finalSize);

                if (!System.Windows.SizeExtensions.IsClose(currentSize, finalSize)) {
                    if (this.m_editor != null) {
                        this.renderQueue.InvokeAsync(Bridge.fn.bind(this, $asm.$.Codex.View.EditorHostControl.f1));
                    }
                }

                return finalSize;
            },
            OnSourceFileChanged: function () {
                var $t, $t1;
                this.m_text = ($t = (($t1 = this.SourceFile) != null ? $t1.Codex$IBoundSourceFile$SourceFile.Codex$ISourceFile$Content : null), $t != null ? $t : "");
                this.m_editor.setValue(this.m_text);
            }
        }
    });

    Bridge.ns("Codex.View.EditorHostControl", $asm.$);

    Bridge.apply($asm.$.Codex.View.EditorHostControl, {
        f1: function () {
            this.m_editor.layout();
        }
    });

    Bridge.define("Codex.View.TypedCommandBinding$1", function (T) { return {
        inherits: [System.Windows.Input.CommandBinding],
        events: {
            CommandExecuted: null
        },
        ctors: {
            ctor: function (command) {
                this.$initialize();
                System.Windows.Input.CommandBinding.ctor.call(this);
                this.Command = command;
                this.addExecuted(Bridge.fn.cacheBind(this, this.TypedCommandBinding_Executed));
            }
        },
        methods: {
            TypedCommandBinding_Executed: function (sender, e) {
                var parameter = e.Parameter;
                var typedParameter = Bridge.cast(Bridge.unbox(parameter), T);
                !Bridge.staticEquals(this.CommandExecuted, null) ? this.CommandExecuted(typedParameter) : null;
            }
        }
    }; });

    Bridge.define("Codex.View.GranularExtensions", {
        statics: {
            methods: {
                AsTriggerProperty: function (dependencyProperty) {
                    return new System.Windows.DependencyPropertyPathElement(dependencyProperty);
                },
                WithSetters: function (trigger, setters) {
                    var $t;
                    if (setters === void 0) { setters = []; }
                    $t = Bridge.getEnumerator(setters);
                    try {
                        while ($t.moveNext()) {
                            var setter = $t.Current;
                            trigger.Setters.add(setter);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }
                    return trigger;
                }
            }
        }
    });

    Bridge.define("Codex.View.LeftPaneView", {
        inherits: [System.Windows.Controls.UserControl,Granular.Presentation.Web.IHtmlElementHost],
        statics: {
            fields: {
                ViewModelProperty: null
            },
            ctors: {
                init: function () {
                    this.ViewModelProperty = Codex.View.ViewUtilities.RegisterDependencyProperty(Codex.View.LeftPaneView, Codex.View.LeftPaneViewModel, "ViewModelProperty", Codex.View.LeftPaneView.OnViewModelChanged, void 0);
                }
            },
            methods: {
                OnViewModelChanged: function (view, viewModel) {
                    throw new System.NotImplementedException();
                }
            }
        },
        fields: {
            m_htmlElement: null,
            m_childrenHost: null,
            SearchInfo: null,
            PaneContent: null
        },
        props: {
            ViewModel: {
                get: function () {
                    return Bridge.cast(this.GetValue(Codex.View.LeftPaneView.ViewModelProperty), Codex.View.LeftPaneViewModel);
                },
                set: function (value) {
                    this.SetValue(Codex.View.LeftPaneView.ViewModelProperty, value);
                }
            }
        },
        alias: ["SetRenderElement", "Granular$Presentation$Web$IHtmlElementHost$SetRenderElement"],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Controls.UserControl.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            SetRenderElement: function (htmlElement) {
                this.m_htmlElement = htmlElement;
                //this.VisualIsHitTestVisible = true;
                //VisualBackground = Brushes.Transparent;

                //RenderView(this, ViewModel);
            },
            RenderView: function (view, viewModel) {
                if (this.m_childrenHost != null) {
                    this.m_childrenHost.remove();
                }

                if (viewModel == null) {

                }
            },
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/LeftPaneView.xaml"));
            }
        }
    });

    /** @namespace Codex.View */

    /**
     * Interaction logic for MainWindow.xaml
     *
     * @public
     * @class Codex.View.MainWindow
     * @augments System.Windows.Window
     */
    Bridge.define("Codex.View.MainWindow", {
        inherits: [System.Windows.Window],
        fields: {
            ViewModel: null,
            SearchBox: null,
            SearchBoxAndImagesColumn: null,
            HeaderMenuColumn: null,
            LeftPaneScrollViewer: null,
            LeftPane: null
        },
        props: {
            CodexService: null
        },
        ctors: {
            init: function () {
                this.ViewModel = new Codex.View.ViewModelDataContext();
                this.CodexService = Codex.View.CodexProvider.Instance;
            },
            ctor: function () {
                this.$initialize();
                System.Windows.Window.ctor.call(this);
                this.InitializeComponent();
                this.DataContext = this.ViewModel;
                this.ViewModel.Initialize();
                this.SearchBox.Text = "as";
            }
        },
        methods: {
            Grid_Loaded: function (sender, e) {
                System.Console.WriteLine("Grid_Loaded");
            },
            SearchTextChanged: function (sender, e) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    searchString, 
                    $t, 
                    response, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    searchString = this.SearchBox.Text;
                                    searchString = searchString.trim();

                                    if (Bridge.referenceEquals(searchString, "ass")) {
                                    } else {
                                    }

                                    if (searchString.length < 3) {
                                        this.ViewModel.LeftPane = ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = "Enter at least 3 characters.", $t);
                                        return;
                                    }

                                    $task1 = this.CodexService.Codex$Sdk$Search$ICodex$SearchAsync(($t = new Codex.Sdk.Search.SearchArguments(), $t.SearchString = searchString, $t));
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    response = $taskResult1;

                                    this.ViewModel.LeftPane = Codex.View.LeftPaneViewModel.FromSearchResponse(searchString, response);
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            GoToSpanExecuted: function (lineSpan) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    sourceFileResponse, 
                    $t, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = this.CodexService.Codex$Sdk$Search$ICodex$GetSourceAsync(($t = new Codex.Sdk.Search.GetSourceArguments(), $t.ProjectId = lineSpan.Codex$IProjectScopeEntity$ProjectId, $t.ProjectRelativePath = lineSpan.Codex$IProjectFileScopeEntity$ProjectRelativePath, $t));
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    sourceFileResponse = $taskResult1;

                                    this.ViewModel.RightPane = new Codex.View.RightPaneViewModel.$ctor3(sourceFileResponse);
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            GoToReferenceExecuted: function (referenceResult) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    sourceFileResponse, 
                    $t, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = this.CodexService.Codex$Sdk$Search$ICodex$GetSourceAsync(($t = new Codex.Sdk.Search.GetSourceArguments(), $t.ProjectId = referenceResult.Codex$IProjectScopeEntity$ProjectId, $t.ProjectRelativePath = referenceResult.Codex$IProjectFileScopeEntity$ProjectRelativePath, $t));
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    sourceFileResponse = $taskResult1;

                                    this.ViewModel.RightPane = new Codex.View.RightPaneViewModel.$ctor3(sourceFileResponse);
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            FindAllReferencesExecuted: function (symbol) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    response, 
                    $t, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = this.CodexService.Codex$Sdk$Search$ICodex$FindAllReferencesAsync(($t = new Codex.Sdk.Search.FindAllReferencesArguments(), $t.ProjectId = symbol.Codex$ICodeSymbol$ProjectId, $t.SymbolId = symbol.Codex$ICodeSymbol$Id.Value, $t));
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    response = $taskResult1;

                                    this.ViewModel.LeftPane = Codex.View.LeftPaneViewModel.FromReferencesResponse(response);
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            GoToDefinitionExecuted: function (symbol) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $task2, 
                    $taskResult2, 
                    $jumpFromFinally, 
                    response, 
                    $t, 
                    reference, 
                    sourceFileResponse, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1,2,3,4,5,6,8], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = this.CodexService.Codex$Sdk$Search$ICodex$FindDefinitionLocationAsync(($t = new Codex.Sdk.Search.FindDefinitionLocationArguments(), $t.ProjectId = symbol.Codex$ICodeSymbol$ProjectId, $t.SymbolId = symbol.Codex$ICodeSymbol$Id.Value, $t));
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    response = $taskResult1;

                                    if (response.Error != null || response.Result.Hits.Count === 0) {
                                        $step = 2;
                                        continue;
                                    } else  {
                                        $step = 3;
                                        continue;
                                    }
                                }
                                case 2: {
                                    this.ViewModel.RightPane = new Codex.View.RightPaneViewModel.$ctor2(response);
                                    $step = 8;
                                    continue;
                                }
                                case 3: {
                                    if (response.Result.Hits.Count > 1 || !Bridge.referenceEquals(response.Result.Hits.getItem(0).Codex$Sdk$Search$IReferenceSearchResult$ReferenceSpan.Codex$IReferenceSpan$Reference.Codex$IReferenceSymbol$ReferenceKind, "Definition")) {
                                        $step = 4;
                                        continue;
                                    } else  {
                                        $step = 5;
                                        continue;
                                    }
                                }
                                case 4: {
                                    // Show definitions in left pane
                                    this.ViewModel.LeftPane = Codex.View.LeftPaneViewModel.FromReferencesResponse(response);
                                    $step = 7;
                                    continue;
                                }
                                case 5: {
                                    reference = response.Result.Hits.getItem(0);
                                    $task2 = this.CodexService.Codex$Sdk$Search$ICodex$GetSourceAsync(($t = new Codex.Sdk.Search.GetSourceArguments(), $t.ProjectId = reference.Codex$IProjectScopeEntity$ProjectId, $t.ProjectRelativePath = reference.Codex$IProjectFileScopeEntity$ProjectRelativePath, $t));
                                    $step = 6;
                                    $task2.continueWith($asyncBody, true);
                                    return;
                                }
                                case 6: {
                                    $taskResult2 = $task2.getAwaitedResult();
                                    sourceFileResponse = $taskResult2;

                                    this.ViewModel.RightPane = new Codex.View.RightPaneViewModel.$ctor3(sourceFileResponse);
                                    $step = 7;
                                    continue;
                                }

                                case 8: {
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            UpdateRightPane: function (getViewModel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    rightViewModel, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = getViewModel();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    rightViewModel = $taskResult1;
                                    this.ViewModel.RightPane = rightViewModel;
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/MainWindow.xaml"));
            }
        }
    });

    /**
     * Interaction logic for RightPaneView.xaml
     *
     * @public
     * @class Codex.View.RightPaneView
     * @augments System.Windows.Controls.UserControl
     */
    Bridge.define("Codex.View.RightPaneView", {
        inherits: [System.Windows.Controls.UserControl],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Controls.UserControl.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/RightPaneView.xaml"));
            }
        }
    });

    Bridge.define("Codex.View.Styles", {
        statics: {
            fields: {
                IsMouseOverHeaderProperty: null,
                HeaderOrientationProperty: null
            },
            ctors: {
                init: function () {
                    this.IsMouseOverHeaderProperty = System.Windows.DependencyProperty.RegisterAttached("IsMouseOverHeader", System.Boolean, Codex.View.Styles, new System.Windows.PropertyMetadata.$ctor1(Bridge.box(false, System.Boolean, System.Boolean.toString)));
                    this.HeaderOrientationProperty = System.Windows.DependencyProperty.RegisterAttached("HeaderOrientation", System.Windows.Controls.Orientation, Codex.View.Styles, new System.Windows.PropertyMetadata.$ctor1(Bridge.box(System.Windows.Controls.Orientation.Horizontal, System.Windows.Controls.Orientation, System.Enum.toStringFn(System.Windows.Controls.Orientation))));
                }
            },
            methods: {
                GetIsMouseOverHeader: function (obj) {
                    return System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj.GetValue(Codex.View.Styles.IsMouseOverHeaderProperty)), System.Boolean));
                },
                SetIsMouseOverHeader: function (obj, value) {
                    obj.SetValue(Codex.View.Styles.IsMouseOverHeaderProperty, Bridge.box(value, System.Boolean, System.Boolean.toString));
                },
                GetHeaderOrientation: function (obj) {
                    return System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj.GetValue(Codex.View.Styles.HeaderOrientationProperty)), System.Int32));
                },
                SetHeaderOrientation: function (obj, value) {
                    obj.SetValue(Codex.View.Styles.HeaderOrientationProperty, Bridge.box(value, System.Windows.Controls.Orientation, System.Enum.toStringFn(System.Windows.Controls.Orientation)));
                },
                Initialize: function () { }
            }
        }
    });

    Bridge.define("Codex.View.ViewUtilities", {
        statics: {
            methods: {
                ToggleExpandCollapse: function (arg) {
                    var headerElement = arg.currentTarget;
                    var collapsible = headerElement.nextElementSibling;
                    if (collapsible.style.display === "none") {
                        collapsible.style.display = "block";
                        Codex.View.ViewUtilities.SetBackgroundIcon(headerElement, "minus");
                    } else {
                        collapsible.style.display = "none";
                        Codex.View.ViewUtilities.SetBackgroundIcon(headerElement, "plus");
                    }

                    arg.stopPropagation();
                },
                SetBackgroundIcon: function (element, imageName) {
                    element.style.backgroundImage = System.String.format("url(content/icons/{0}.png)", imageName);
                    return element;
                },
                RenderHeaderedContent: function (parentElement, headerClass, headerText, contentClass) {
                    var $t;
                    // Header
                    parentElement.appendChild(($t = document.createElement("div"), $t.className = headerClass, $t.onclick = Codex.View.ViewUtilities.ToggleExpandCollapse, $t.textContent = headerText, $t));

                    // Content
                    var contentElement = ($t = document.createElement("div"), $t.className = contentClass, $t);
                    parentElement.appendChild(contentElement);
                    return contentElement;
                },
                EndsWith: function (s, value, comparison) {
                    var suffixStartIndex = (s.length - value.length) | 0;
                    return System.String.indexOf(s, value, suffixStartIndex, s.length, comparison) === suffixStartIndex;
                },
                GetFileNameGlyph: function (fileName) {
                    if (Codex.View.ViewUtilities.EndsWith(fileName, ".cs", 5)) {
                        return "csharp";
                    } else if (Codex.View.ViewUtilities.EndsWith(fileName, ".vb", 5)) {
                        return "vb";
                    } else if (Codex.View.ViewUtilities.EndsWith(fileName, ".ts", 5)) {
                        return "TypeScript";
                    } else if (Codex.View.ViewUtilities.EndsWith(fileName, ".xaml", 5)) {
                        return "xaml";
                    }

                    return "212";
                },
                Increment: function (T, value, counter) {
                    counter.Increment();
                    return value;
                },
                Add: function (T, value, computeCount) {
                    computeCount(value);
                    return value;
                },
                AddTo: function (T, value, counter) {
                    counter.Add(value.Codex$View$IResultsStats$Counter.Count);
                    return value;
                },
                AddFrom: function (T, value, counter) {
                    value.Codex$View$IResultsStats$Counter.Add(counter.Count);
                    return value;
                },
                RegisterDependencyProperty: function (TOwner, TPropertyType, dependencyPropertyName, onPropertyChanged, defaultValue) {
                    if (dependencyPropertyName === void 0) { dependencyPropertyName = null; }
                    if (onPropertyChanged === void 0) { onPropertyChanged = null; }
                    if (defaultValue === void 0) { defaultValue = Bridge.getDefaultValue(TPropertyType); }
                    return System.Windows.DependencyProperty.Register(dependencyPropertyName.substr(0, ((dependencyPropertyName.length - ("Property").length) | 0)), TPropertyType, TOwner, !Bridge.staticEquals(onPropertyChanged, null) ? new System.Windows.PropertyMetadata.$ctor2(defaultValue, function (owner, args) {
                        onPropertyChanged(Bridge.as(owner, TOwner), Bridge.cast(Bridge.unbox(args.NewValue), TPropertyType));
                    }) : new System.Windows.PropertyMetadata.$ctor1(defaultValue));
                },
                GetReferencesHeader: function (referenceKind, referenceCount, symbolName) {
                    var formatString = "";
                    switch (referenceKind) {
                        case Codex.ObjectModel.ReferenceKind.Reference: 
                            formatString = "{0} reference{1} to {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.Definition: 
                            formatString = "{0} definition{1} of {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.Constructor: 
                            formatString = "{0} constructor{1} of {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.Instantiation: 
                            formatString = "{0} instantiation{1} of {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.DerivedType: 
                            formatString = "{0} type{1} derived from {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.InterfaceInheritance: 
                            formatString = "{0} interface{1} inheriting from {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.InterfaceImplementation: 
                            formatString = "{0} implementation{1} of {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.Override: 
                            formatString = "{0} override{1} of {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.InterfaceMemberImplementation: 
                            formatString = "{0} implementation{1} of {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.Write: 
                            formatString = "{0} write{1} to {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.Read: 
                            formatString = "{0} read{1} of {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.GuidUsage: 
                            formatString = "{0} usage{1} of Guid {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.EmptyArrayAllocation: 
                            formatString = "{0} allocation{1} of empty arrays";
                            break;
                        case Codex.ObjectModel.ReferenceKind.MSBuildPropertyAssignment: 
                            formatString = "{0} assignment{1} to MSBuild property {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.MSBuildPropertyUsage: 
                            formatString = "{0} usage{1} of MSBuild property {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.MSBuildItemAssignment: 
                            formatString = "{0} assignment{1} to MSBuild item {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.MSBuildItemUsage: 
                            formatString = "{0} usage{1} of MSBuild item {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.MSBuildTargetDeclaration: 
                            formatString = "{0} declaration{1} of MSBuild target {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.MSBuildTargetUsage: 
                            formatString = "{0} usage{1} of MSBuild target {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.MSBuildTaskDeclaration: 
                            formatString = "{0} import{1} of MSBuild task {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.MSBuildTaskUsage: 
                            formatString = "{0} call{1} to MSBuild task {2}";
                            break;
                        case Codex.ObjectModel.ReferenceKind.Text: 
                            formatString = "{0} text search hit{1} for '{2}'";
                            break;
                        default: 
                            throw new System.NotImplementedException("Missing case for " + System.Enum.toString(Codex.ObjectModel.ReferenceKind, referenceKind));
                    }

                    return System.String.format(formatString, Bridge.box(referenceCount, System.Int32), referenceCount === 1 ? "" : "s", symbolName);
                }
            }
        }
    });

    Bridge.define("Codex.View.Web.Compatibility.Reference", {
        statics: {
            fields: {
                GranularPresentationGenericReference: null,
                JQueryReference: null
            }
        }
    });

    Bridge.define("Monaco.Editor", {
        statics: {
            methods: {
                Create: function (htmlElement, options) {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                        $returnValue, 
                        $async_e, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $step = System.Array.min([0,1], $step);
                                    switch ($step) {
                                        case 0: {
                                            $task1 = Monaco.MonacoLibrary.InitializeAsync();
                                            $step = 1;
                                            $task1.continueWith($asyncBody);
                                            return;
                                        }
                                        case 1: {
                                            $task1.getAwaitedResult();
                                            $tcs.setResult(monaco.editor.create(htmlElement, options));
                                            return;
                                        }
                                        default: {
                                            $tcs.setResult(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($async_e1) {
                                $async_e = System.Exception.create($async_e1);
                                $tcs.setException($async_e);
                            }
                        }, arguments);

                    $asyncBody();
                    return $tcs.task;
                }
            }
        }
    });

    /** @namespace Monaco */

    /**
     * Responsible for loading the monaco editor javascript library using the loader.js
     included with monaco
     *
     * @static
     * @abstract
     * @public
     * @class Monaco.MonacoLibrary
     */
    Bridge.define("Monaco.MonacoLibrary", {
        statics: {
            fields: {
                initializeTask: null
            },
            methods: {
                InitializeAsync: function () {
                    if (Monaco.MonacoLibrary.initializeTask == null) {
                        // Only initialize once
                        Monaco.MonacoLibrary.initializeTask = Monaco.MonacoLibrary.InitializeCoreAsync();
                    }

                    return Monaco.MonacoLibrary.initializeTask;
                },
                InitializeCoreAsync: function () {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                        $returnValue, 
                        $async_e, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $step = System.Array.min([0,1], $step);
                                    switch ($step) {
                                        case 0: {
                                            require.config({ paths: { 'vs': 'node_modules/monaco-editor/dev/vs' } });
                                            $task1 = Bridge.loadModule({amd: ["vs/editor/editor.main"]}, function () { monaco_editor_ignored = arguments[0]; });
                                            $step = 1;
                                            $task1.continueWith($asyncBody);
                                            return;
                                        }
                                        case 1: {
                                            $task1.getAwaitedResult();
                                            $tcs.setResult(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.setResult(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($async_e1) {
                                $async_e = System.Exception.create($async_e1);
                                $tcs.setException($async_e);
                            }
                        }, arguments);

                    $asyncBody();
                    return $tcs.task;
                }
            }
        }
    });

    Bridge.define("System.CompatibilityExtensions", {
        statics: {
            methods: {
                ToLowerInvariant: function (value) {
                    return value.toLowerCase();
                }
            }
        }
    });

    Bridge.define("Codex.EntityBase", {
        inherits: [Codex.ISerializableEntity],
        methods: {
            Initialize: function () { },
            OnSerializingCore: function () { },
            OnDeserializedCore: function () { },
            Codex$ISerializableEntity$OnSerializing: function () {
                this.OnSerializingCore();
            },
            Codex$ISerializableEntity$OnDeserialized: function () {
                this.OnDeserializedCore();
            }
        }
    });

    Bridge.define("Codex.IProjectScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IRepoFileScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISourceSearchModelBase", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Defines a classified span of text
     *
     * @abstract
     * @public
     * @class Codex.IClassificationSpan
     * @implements  Codex.ISpan
     */
    Bridge.define("Codex.IClassificationSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ICommitScopeEntity", {
        inherits: [Codex.IRepoScopeEntity],
        $kind: "interface"
    });

    /**
     * Represents a changed file in a commit
     *
     * @abstract
     * @public
     * @class Codex.ICommitChangedFile
     * @implements  Codex.ICommitFileLink
     */
    Bridge.define("Codex.ICommitChangedFile", {
        inherits: [Codex.ICommitFileLink],
        $kind: "interface"
    });

    Bridge.define("Codex.ICommitSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSymbol", {
        inherits: [Codex.ICodeSymbol],
        $kind: "interface"
    });

    Bridge.define("Codex.ILanguageSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ILineSpan", {
        inherits: [Codex.ISpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IProjectSearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IPropertySearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * In order to compute a stable integral id for each entity. This type is used to store into a 'follow' index which
     stores entities of this type using the {@link } of the corresponding search entity. Then the
     sequence number assigned by ElasticSearch is used as the shard stable id ({@link })
     for the entity. This approach is used in order to ensure that the stable id appears as an explicit field in the document rather
     which allows configuration of how the field is indexed (not true for sequence number field without code changes to ES).
     *
     * @abstract
     * @public
     * @class Codex.IRegisteredEntity
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.IRegisteredEntity", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IRepositorySearchModel", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Defines a stored filter which matches entities in a particular index shard in a stable manner
     *
     * @abstract
     * @public
     * @class Codex.IStoredFilter
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.IStoredFilter", {
        inherits: [Codex.ISearchEntity],
        $kind: "interface"
    });

    /**
     * Documentation for typed parameter
     *
     * @abstract
     * @public
     * @class Codex.ITypedParameterDocumentation
     * @implements  Codex.IParameterDocumentation
     */
    Bridge.define("Codex.ITypedParameterDocumentation", {
        inherits: [Codex.IParameterDocumentation],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.PropertyMapBase", {
        inherits: [System.Collections.Generic.Dictionary$2(System.String,System.String)]
    });

    Bridge.define("Codex.Sdk.Search.BinaryFilter$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexFilter$1(T)],
        fields: {
            Operator: 0,
            Left: null,
            Right: null
        },
        ctors: {
            ctor: function (op, left, right) {
                this.$initialize();
                Codex.Sdk.Search.IndexFilter$1(T).ctor.call(this);
                this.Operator = op;
                this.Left = left;
                this.Right = right;
            }
        }
    }; });

    Bridge.define("Codex.Sdk.Search.ContextCodexArgumentsBase", {
        inherits: [Codex.Sdk.Search.CodexArgumentsBase],
        props: {
            /**
             * The id of the repository referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @function ReferencingRepositoryId
             * @type string
             */
            ReferencingRepositoryId: null,
            /**
             * The id of the project referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @function ReferencingProjectId
             * @type string
             */
            ReferencingProjectId: null,
            /**
             * The id of the file referencing the symbol.
             NOTE: This is used to priority inter-repository matches over
             matches from outside the repository
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.ContextCodexArgumentsBase
             * @function ReferencingFileId
             * @type string
             */
            ReferencingFileId: null
        }
    });

    Bridge.define("Codex.Sdk.Search.FullTextIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.IndexQueryResponse$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexQueryResponse],
        props: {
            /**
             * The results of the query
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.IndexQueryResponse$1
             * @function Result
             * @type T
             */
            Result: Bridge.getDefaultValue(T)
        },
        methods: {
            toString: function () {
                return System.String.format("Result: {0}, {1}", this.Result, Codex.Sdk.Search.IndexQueryResponse.prototype.toString.call(this));
            }
        }
    }; });

    Bridge.definei("Codex.Sdk.Search.IPrefixProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.ITermProperty$1(T)],
        $kind: "interface"
    }; });

    Bridge.define("Codex.Sdk.Search.NormalizedKeywordIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.PrefixFullNameIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.PrefixIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.Sdk.Search.SortwordIndexProperty$1", function (T) { return {
        inherits: [Codex.Sdk.Search.TermIndexProperty$1(T)]
    }; });

    Bridge.define("Codex.SearchType$1", function (TSearchType) { return {
        inherits: [Codex.SearchType],
        fields: {
            CopyToFields: null,
            InheritFields: null
        },
        props: {
            Type: {
                get: function () {
                    return TSearchType;
                }
            }
        },
        ctors: {
            init: function () {
                this.CopyToFields = new (System.Collections.Generic.List$1(System.Object)).ctor();
                this.InheritFields = new (System.Collections.Generic.List$1(System.Object)).ctor();
            },
            ctor: function (name) {
                this.$initialize();
                Codex.SearchType.ctor.call(this);
                this.Name = name;
                this.IndexName = System.CompatibilityExtensions.ToLowerInvariant(this.Name);
            }
        },
        methods: {
            Inherit: function (T, providerField, searchField) {
                return this;
            },
            CopyTo: function (sourceField, targetField) {
                return this;
            },
            Exclude: function (searchField) {
                return this;
            },
            SearchAs: function (T, searchField, behavior) {
                return this;
            }
        }
    }; });

    Bridge.define("Codex.View.BindableValue$1", function (T) { return {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        fields: {
            value: Bridge.getDefaultValue(T)
        },
        props: {
            Value: {
                get: function () {
                    return this.value;
                },
                set: function (value) {
                    this.value = value;
                    this.OnPropertyChanged("Value");
                }
            }
        }
    }; });

    Bridge.define("Codex.View.LeftPaneContent", {
        inherits: [Codex.View.LeftPaneChild]
    });

    Bridge.define("Codex.View.CategoryGroupSearchResultsViewModel", {
        inherits: [Codex.View.IResultsStats],
        props: {
            Counter: null,
            HeaderVisibility: {
                get: function () {
                    return System.String.isNullOrEmpty(this.Header) ? System.Windows.Visibility.Collapsed : System.Windows.Visibility.Visible;
                }
            },
            Header: null,
            ProjectResults: null
        },
        alias: ["Counter", "Codex$View$IResultsStats$Counter"],
        ctors: {
            init: function () {
                this.Counter = new Codex.View.Counter();
                this.ProjectResults = new Codex.View.ProjectResultsViewModel.ctor();
            },
            $ctor1: function (searchString, response) {
                this.$initialize();
                var result = response.Result;

                this.PopulateProjectGroups(Bridge.global.Codex.Sdk.Search.ITextLineSpanResult, System.Linq.Enumerable.from(result.Hits).select($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f1), $asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f2);
                this.Header = System.String.format("{0} text search hits for '{1}'", Bridge.box(result.Hits.Count, System.Int32), searchString);
            },
            ctor: function (kind, symbolName, references) {
                this.$initialize();
                this.PopulateProjectGroups(Bridge.global.Codex.Sdk.Search.IReferenceSearchResult, references, $asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f3);
                this.Header = Codex.View.ViewUtilities.GetReferencesHeader(kind, System.Linq.Enumerable.from(references).count(), symbolName);
            }
        },
        methods: {
            Render: function (view, parentElement) {
                var contentElement = Codex.View.ViewUtilities.RenderHeaderedContent(parentElement, "rH", this.Header, "rK");
                this.ProjectResults.Render(view, contentElement);
            },
            PopulateProjectGroups: function (T, items, viewModelFactory) {
                this.ProjectResults.ProjectGroups.addRange(System.Linq.Enumerable.from(items).groupBy($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f4).select(Bridge.fn.bind(this, function (projectGroup) {
                    var $t;
                    return ($t = new Codex.View.ProjectGroupResultsViewModel(), $t.ProjectName = projectGroup.key(), $t.Items = projectGroup.groupBy($asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f5).select(Bridge.fn.bind(this, function (fileGroup) {
                        var $t1;
                        return Codex.View.ViewUtilities.AddTo(Bridge.global.Codex.View.FileResultsViewModel, Codex.View.ViewUtilities.Add(Bridge.global.Codex.View.FileResultsViewModel, ($t1 = new Codex.View.FileResultsViewModel(), $t1.Path = fileGroup.key(), $t1.Items = fileGroup.select(function (sr) {
                            return viewModelFactory(sr);
                        }).toList(Codex.View.TextSpanSearchResultViewModel), $t1), $asm.$.Codex.View.CategoryGroupSearchResultsViewModel.f6), this.Counter);
                    })).toList(Codex.View.FileResultsViewModel), $t);
                })));
            }
        }
    });

    Bridge.ns("Codex.View.CategoryGroupSearchResultsViewModel", $asm.$);

    Bridge.apply($asm.$.Codex.View.CategoryGroupSearchResultsViewModel, {
        f1: function (sr) {
            return sr.Codex$Sdk$Search$ISearchResult$TextLine;
        },
        f2: function (sr) {
            return new Codex.View.TextSpanSearchResultViewModel.$ctor1(sr);
        },
        f3: function (sr) {
            return new Codex.View.TextSpanSearchResultViewModel.ctor(sr);
        },
        f4: function (sr) {
            return sr.Codex$IProjectScopeEntity$ProjectId;
        },
        f5: function (sr) {
            return sr.Codex$IProjectFileScopeEntity$ProjectRelativePath;
        },
        f6: function (f) {
            return System.Array.getCount(f.Items, Codex.View.FileItemResultViewModel);
        }
    });

    Bridge.define("Codex.View.FileItemResultViewModel", {
        inherits: [Codex.View.LeftPaneChild]
    });

    Bridge.define("Codex.View.ProjectItemResultViewModel", {
        inherits: [Codex.View.LeftPaneChild]
    });

    Bridge.define("Codex.View.PaneViewModelBase", {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        props: {
            DataContext: null
        }
    });

    Bridge.define("Codex.View.ProjectGroupResultsViewModel", {
        inherits: [Codex.View.IResultsStats],
        props: {
            Counter: null,
            ProjectName: null,
            Items: null
        },
        alias: ["Counter", "Codex$View$IResultsStats$Counter"],
        ctors: {
            init: function () {
                this.Counter = new Codex.View.Counter();
            }
        },
        methods: {
            Render: function (view, parentElement) {
                var $t;
                var contentElement = Codex.View.ViewUtilities.RenderHeaderedContent(parentElement, "rA", System.String.format("{0} ({1})", this.ProjectName, Bridge.box(this.Counter.Count, System.Int32)), "rG");
                $t = Bridge.getEnumerator(this.Items, Codex.View.ProjectItemResultViewModel);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        item.Render(view, contentElement);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }}
        }
    });

    Bridge.define("Codex.View.ViewModelDataContext", {
        inherits: [Codex.View.NotifyPropertyChangedBase],
        fields: {
            leftPane: null,
            rightPane: null
        },
        props: {
            LeftPane: {
                get: function () {
                    return this.leftPane;
                },
                set: function (value) {
                    this.leftPane = value;
                    this.OnPropertyChanged("LeftPane");
                }
            },
            RightPane: {
                get: function () {
                    return this.rightPane;
                },
                set: function (value) {
                    this.rightPane = value;
                    this.OnPropertyChanged("RightPane");
                }
            }
        },
        ctors: {
            init: function () {
                this.rightPane = new Codex.View.RightPaneViewModel.ctor();
            }
        },
        methods: {
            Initialize: function () {
                this.LeftPane = Codex.View.LeftPaneViewModel.Initial;
            }
        }
    });

    Bridge.define("Codex.View.Web.WebApiCodex", {
        inherits: [Codex.Sdk.Search.ICodex],
        fields: {
            baseUrl: null
        },
        alias: [
            "FindAllReferencesAsync", "Codex$Sdk$Search$ICodex$FindAllReferencesAsync",
            "FindDefinitionAsync", "Codex$Sdk$Search$ICodex$FindDefinitionAsync",
            "FindDefinitionLocationAsync", "Codex$Sdk$Search$ICodex$FindDefinitionLocationAsync",
            "GetSourceAsync", "Codex$Sdk$Search$ICodex$GetSourceAsync",
            "SearchAsync", "Codex$Sdk$Search$ICodex$SearchAsync"
        ],
        ctors: {
            ctor: function (baseUrl) {
                this.$initialize();
                this.baseUrl = System.String.endsWith(baseUrl, "/") ? baseUrl : (baseUrl || "") + String.fromCharCode(47);
            }
        },
        methods: {
            FindAllReferencesAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryResponse$1(Codex.View.Web.SerializedReferencesResult), Codex.Sdk.Search.IndexQueryResponse$1(Codex.Sdk.Search.ReferencesResult), Codex.Sdk.Search.CodexServiceMethod.FindAllRefs, $arguments);
            },
            FindDefinitionAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.DefinitionSearchModel), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.IDefinitionSearchModel), Codex.Sdk.Search.CodexServiceMethod.FindDef, $arguments);
            },
            FindDefinitionLocationAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryResponse$1(Codex.View.Web.SerializedReferencesResult), Codex.Sdk.Search.IndexQueryResponse$1(Codex.Sdk.Search.ReferencesResult), Codex.Sdk.Search.CodexServiceMethod.FindDefLocation, $arguments);
            },
            GetSourceAsync: function ($arguments) {
                return this.PostAsync(Codex.Sdk.Search.IndexQueryResponse$1(Codex.ObjectModel.BoundSourceFile), Codex.Sdk.Search.IndexQueryResponse$1(Codex.IBoundSourceFile), Codex.Sdk.Search.CodexServiceMethod.GetSource, $arguments);
            },
            SearchAsync: function ($arguments) {
                if (Bridge.referenceEquals($arguments.SearchString, "tdt")) {
                    return this.GetTestAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.SearchResult), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.Sdk.Search.ISearchResult), Codex.Sdk.Search.CodexServiceMethod.Search, $arguments);
                }

                return this.PostAsync(Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.ObjectModel.SearchResult), Codex.Sdk.Search.IndexQueryHitsResponse$1(Codex.Sdk.Search.ISearchResult), Codex.Sdk.Search.CodexServiceMethod.Search, $arguments);
            },
            GetTestAsync: function (TSerializedResult, TResult, searchMethod, $arguments) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();

                var url = (this.baseUrl || "") + (System.Enum.toString(Codex.Sdk.Search.CodexServiceMethod, searchMethod) || "");
                System.Console.WriteLine(url);

                var config = { url: "testsearchdata.json", type: "GET", contentType: "application/json; charset=utf-8", success: function (data, textStatus, successRequest) {
                    tcs.setResult(Newtonsoft.Json.JsonConvert.DeserializeObject(successRequest.responseText, TSerializedResult));
                    return null;
                }, error: function (errorRequest, textStatus, errorThrown) {
                    var $t;
                    tcs.setResult(($t = new TResult(), $t.Error = System.String.format("Error: {0}", errorThrown), $t));

                    return null;
                } };

                jQuery.ajax(config);

                return tcs.task;
            },
            PostAsync: function (TSerializedResult, TResult, searchMethod, $arguments) {
                var tcs = new System.Threading.Tasks.TaskCompletionSource();

                var url = (this.baseUrl || "") + (System.Enum.toString(Codex.Sdk.Search.CodexServiceMethod, searchMethod) || "");
                System.Console.WriteLine(url);

                var argumentsData = Newtonsoft.Json.JsonConvert.SerializeObject($arguments);

                var config = { url: url, type: "POST", data: argumentsData, contentType: "application/json; charset=utf-8", success: function (data, textStatus, successRequest) {
                    tcs.setResult(Newtonsoft.Json.JsonConvert.DeserializeObject(successRequest.responseText, TSerializedResult));
                    return null;
                }, error: function (errorRequest, textStatus, errorThrown) {
                    var $t;
                    tcs.setResult(($t = new TResult(), $t.Error = System.String.format("Error: {0}", errorThrown), $t));

                    return null;
                } };

                jQuery.ajax(config);

                return tcs.task;
            }
        }
    });

    Bridge.define("Codex.IProjectFileScopeEntity", {
        inherits: [Codex.IRepoFileScopeEntity,Codex.IProjectScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IBoundSourceSearchModel", {
        inherits: [Codex.ISourceSearchModelBase],
        $kind: "interface"
    });

    /**
     * Describes a commit in version control
     *
     * @abstract
     * @public
     * @class Codex.ICommit
     * @implements  Codex.ICommitScopeEntity
     */
    Bridge.define("Codex.ICommit", {
        inherits: [Codex.ICommitScopeEntity],
        $kind: "interface"
    });

    /**
     * Represents a directory in source control
     *
     * @abstract
     * @public
     * @class Codex.ICommitFilesDirectory
     * @implements  Codex.IRepoFileScopeEntity
     */
    Bridge.define("Codex.ICommitFilesDirectory", {
        inherits: [Codex.IRepoFileScopeEntity],
        $kind: "interface"
    });

    /**
     * The set of files present in the repository at a given commit.
     *
     * @abstract
     * @public
     * @class Codex.ICommitFilesSearchModel
     * @implements  Codex.ICommitScopeEntity
     * @implements  Codex.IRepoScopeEntity
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.ICommitFilesSearchModel", {
        inherits: [Codex.ICommitScopeEntity,Codex.IRepoScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IDefinitionSymbol", {
        inherits: [Codex.IReferenceSymbol],
        $kind: "interface"
    });

    /**
     * Decribes a symbol related to a given documented symbol
     *
     * @abstract
     * @public
     * @class Codex.IDocumentationReferenceSymbol
     * @implements  Codex.IReferenceSymbol
     */
    Bridge.define("Codex.IDocumentationReferenceSymbol", {
        inherits: [Codex.IReferenceSymbol],
        $kind: "interface"
    });

    /**
     * A specialized definition span referring to a parameter of a method/property
     *
     * @abstract
     * @public
     * @class Codex.IParameterDefinitionSpan
     * @implements  Codex.ILineSpan
     */
    Bridge.define("Codex.IParameterDefinitionSpan", {
        inherits: [Codex.ILineSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ITextLineSpan", {
        inherits: [Codex.ILineSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IProject", {
        inherits: [Codex.IProjectScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IProjectReferenceSearchModel", {
        inherits: [Codex.IProjectScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ITextSourceSearchModel", {
        inherits: [Codex.ISourceSearchModelBase],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.RepoScopeEntity", {
        inherits: [Codex.EntityBase,Codex.IRepoScopeEntity],
        fields: {
            m_RepositoryName: null
        },
        props: {
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepoScopeEntity
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: ["RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepoScopeEntity, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Marker interface for searchable entities
     TODO: Consider moving {@link } out if its not needed by all searchable entities
     *
     * @public
     * @class Codex.ObjectModel.SearchEntity
     * @augments Codex.EntityBase
     * @implements  Codex.ISearchEntity
     */
    Bridge.define("Codex.ObjectModel.SearchEntity", {
        inherits: [Codex.EntityBase,Codex.ISearchEntity],
        fields: {
            m_Uid: null,
            m_EntityContentId: null,
            m_EntityContentSize: 0,
            m_EntityVersion: null,
            m_ShardStableId: System.Int64(0)
        },
        props: {
            Uid: {
                get: function () {
                    return this.m_Uid;
                },
                set: function (value) {
                    this.m_Uid = value;
                }
            },
            /**
             * Defines the content addressable identifier for the entity. This is used
             to determine if an entity with the same {@link } should be updated
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityContentId
             * @type string
             */
            EntityContentId: {
                get: function () {
                    return this.m_EntityContentId;
                },
                set: function (value) {
                    this.m_EntityContentId = value;
                }
            },
            /**
             * Defines the size of the raw serialized entity.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityContentSize
             * @type number
             */
            EntityContentSize: {
                get: function () {
                    return this.m_EntityContentSize;
                },
                set: function (value) {
                    this.m_EntityContentSize = value;
                }
            },
            /**
             * The version number used when storing the entity (for use by ElasticSearch concurrency control
             to prevent races when storing values)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function EntityVersion
             * @type ?number
             */
            EntityVersion: {
                get: function () {
                    return this.m_EntityVersion;
                },
                set: function (value) {
                    this.m_EntityVersion = value;
                }
            },
            /**
             * The per-shard stable identity (derived from ElasticSearch sequence number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchEntity
             * @function ShardStableId
             * @type number
             */
            ShardStableId: {
                get: function () {
                    return this.m_ShardStableId;
                },
                set: function (value) {
                    this.m_ShardStableId = value;
                }
            }
        },
        alias: [
            "Uid", "Codex$ISearchEntity$Uid",
            "EntityContentId", "Codex$ISearchEntity$EntityContentId",
            "EntityContentSize", "Codex$ISearchEntity$EntityContentSize",
            "EntityVersion", "Codex$ISearchEntity$EntityVersion",
            "ShardStableId", "Codex$ISearchEntity$ShardStableId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SearchEntity, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Uid = value.Codex$ISearchEntity$Uid;
                this.m_EntityContentId = value.Codex$ISearchEntity$EntityContentId;
                this.m_EntityContentSize = value.Codex$ISearchEntity$EntityContentSize;
                this.m_EntityVersion = value.Codex$ISearchEntity$EntityVersion;
                this.m_ShardStableId = value.Codex$ISearchEntity$ShardStableId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Describes a branch in a repository
     *
     * @public
     * @class Codex.ObjectModel.Branch
     * @augments Codex.EntityBase
     * @implements  Codex.IBranch
     */
    Bridge.define("Codex.ObjectModel.Branch", {
        inherits: [Codex.EntityBase,Codex.IBranch],
        fields: {
            m_Name: null,
            m_Description: null,
            m_HeadCommitId: null
        },
        props: {
            /**
             * The name of the branch
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The branch description
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * The head commit of the branch
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Branch
             * @function HeadCommitId
             * @type string
             */
            HeadCommitId: {
                get: function () {
                    return this.m_HeadCommitId;
                },
                set: function (value) {
                    this.m_HeadCommitId = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IBranch$Name",
            "Description", "Codex$IBranch$Description",
            "HeadCommitId", "Codex$IBranch$HeadCommitId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Branch, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IBranch$Name;
                this.m_Description = value.Codex$IBranch$Description;
                this.m_HeadCommitId = value.Codex$IBranch$HeadCommitId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Span", {
        inherits: [Codex.EntityBase,Codex.ISpan],
        fields: {
            m_Start: 0,
            m_Length: 0
        },
        props: {
            /**
             * The absolute character offset of the span within the document
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Span
             * @function Start
             * @type number
             */
            Start: {
                get: function () {
                    return this.m_Start;
                },
                set: function (value) {
                    this.m_Start = value;
                }
            },
            /**
             * The length of the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Span
             * @function Length
             * @type number
             */
            Length: {
                get: function () {
                    return this.m_Length;
                },
                set: function (value) {
                    this.m_Length = value;
                }
            },
            /**
             * The absolute character offset of the end (exclusive) of the span within the document
             *
             * @instance
             * @public
             * @readonly
             * @memberof Codex.ObjectModel.Span
             * @function End
             * @type number
             */
            End: {
                get: function () {
                    return ((this.Start + this.Length) | 0);
                }
            }
        },
        alias: [
            "Start", "Codex$ISpan$Start",
            "Length", "Codex$ISpan$Length"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Span, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Start = value.Codex$ISpan$Start;
                this.m_Length = value.Codex$ISpan$Length;
                return Bridge.cast((this), TTarget);
            },
            Contains: function (span) {
                if (span == null) {
                    return false;
                }

                return span.Start >= this.Start && span.End <= this.End;
            },
            SpanEquals: function (span) {
                if (span == null) {
                    return false;
                }

                return span.Start === this.Start && span.End === this.End;
            }
        }
    });

    /**
     * Describes styling for a given classification
     *
     * @public
     * @class Codex.ObjectModel.ClassificationStyle
     * @augments Codex.EntityBase
     * @implements  Codex.IClassificationStyle
     */
    Bridge.define("Codex.ObjectModel.ClassificationStyle", {
        inherits: [Codex.EntityBase,Codex.IClassificationStyle],
        fields: {
            m_Color: 0,
            m_Italic: false,
            m_Name: null
        },
        props: {
            /**
             * The default classification color for the classification. This is used for
             contexts where a mapping from classification id to color is not
             available.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Color
             * @type number
             */
            Color: {
                get: function () {
                    return this.m_Color;
                },
                set: function (value) {
                    this.m_Color = value;
                }
            },
            /**
             * Indicates whether the spans classified with this classification should have italic font by default
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Italic
             * @type boolean
             */
            Italic: {
                get: function () {
                    return this.m_Italic;
                },
                set: function (value) {
                    this.m_Italic = value;
                }
            },
            /**
             * The name of the classification
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationStyle
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: [
            "Color", "Codex$IClassificationStyle$Color",
            "Italic", "Codex$IClassificationStyle$Italic",
            "Name", "Codex$IClassificationStyle$Name"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ClassificationStyle, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Color = value.Codex$IClassificationStyle$Color;
                this.m_Italic = value.Codex$IClassificationStyle$Italic;
                this.m_Name = value.Codex$IClassificationStyle$Name;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReview", {
        inherits: [Codex.EntityBase,Codex.ICodeReview],
        fields: {
            m_Id: null,
            m_Description: null,
            m_Url: null,
            m_Status: 0
        },
        props: {
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * Url for accessing code review in source control management (i.e. GitHub or VSO)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReview
             * @function Url
             * @type string
             */
            Url: {
                get: function () {
                    return this.m_Url;
                },
                set: function (value) {
                    this.m_Url = value;
                }
            },
            Status: {
                get: function () {
                    return this.m_Status;
                },
                set: function (value) {
                    this.m_Status = value;
                }
            }
        },
        alias: [
            "Id", "Codex$ICodeReview$Id",
            "Description", "Codex$ICodeReview$Description",
            "Url", "Codex$ICodeReview$Url",
            "Status", "Codex$ICodeReview$Status"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReview, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Id = value.Codex$ICodeReview$Id;
                this.m_Description = value.Codex$ICodeReview$Description;
                this.m_Url = value.Codex$ICodeReview$Url;
                this.m_Status = value.Codex$ICodeReview$Status;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewComment", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewComment],
        fields: {
            m_Text: null,
            m_Reviewer: null,
            m_Importance: 0,
            m_CommentTime: null
        },
        props: {
            Text: {
                get: function () {
                    return this.m_Text;
                },
                set: function (value) {
                    this.m_Text = value;
                }
            },
            /**
             * The name of the reviewer which made the comment
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function Reviewer
             * @type string
             */
            Reviewer: {
                get: function () {
                    return this.m_Reviewer;
                },
                set: function (value) {
                    this.m_Reviewer = value;
                }
            },
            /**
             * The importance of the comment
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function Importance
             * @type Codex.CommentImportance
             */
            Importance: {
                get: function () {
                    return this.m_Importance;
                },
                set: function (value) {
                    this.m_Importance = value;
                }
            },
            /**
             * The time when the comment was submitted
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewComment
             * @function CommentTime
             * @type System.DateTime
             */
            CommentTime: {
                get: function () {
                    return this.m_CommentTime;
                },
                set: function (value) {
                    this.m_CommentTime = value;
                }
            }
        },
        alias: [
            "Text", "Codex$ICodeReviewComment$Text",
            "Reviewer", "Codex$ICodeReviewComment$Reviewer",
            "Importance", "Codex$ICodeReviewComment$Importance",
            "CommentTime", "Codex$ICodeReviewComment$CommentTime"
        ],
        ctors: {
            init: function () {
                this.m_CommentTime = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewComment, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Text = value.Codex$ICodeReviewComment$Text;
                this.m_Reviewer = value.Codex$ICodeReviewComment$Reviewer;
                this.m_Importance = value.Codex$ICodeReviewComment$Importance;
                this.m_CommentTime = value.Codex$ICodeReviewComment$CommentTime;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewCommentThread", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewCommentThread],
        fields: {
            m_OriginalSpan: null,
            m_StartIteration: 0,
            m_LastUpdated: null,
            m_FileRepoRelativePath: null,
            m_Comments: null
        },
        props: {
            /**
             * The original location for the comment in the originating iteration
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function Codex$ICodeReviewCommentThread$OriginalSpan
             * @type Codex.ILineSpan
             */
            Codex$ICodeReviewCommentThread$OriginalSpan: {
                get: function () {
                    return this.OriginalSpan;
                }
            },
            /**
             * The original location for the comment in the originating iteration
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function OriginalSpan
             * @type Codex.ObjectModel.LineSpan
             */
            OriginalSpan: {
                get: function () {
                    return this.m_OriginalSpan;
                },
                set: function (value) {
                    this.m_OriginalSpan = value;
                }
            },
            /**
             * The iteration where the comment originated
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function StartIteration
             * @type number
             */
            StartIteration: {
                get: function () {
                    return this.m_StartIteration;
                },
                set: function (value) {
                    this.m_StartIteration = value;
                }
            },
            /**
             * The last tie
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewCommentThread
             * @function LastUpdated
             * @type System.DateTime
             */
            LastUpdated: {
                get: function () {
                    return this.m_LastUpdated;
                },
                set: function (value) {
                    this.m_LastUpdated = value;
                }
            },
            FileRepoRelativePath: {
                get: function () {
                    return this.m_FileRepoRelativePath;
                },
                set: function (value) {
                    this.m_FileRepoRelativePath = value;
                }
            },
            Codex$ICodeReviewCommentThread$Comments: {
                get: function () {
                    return this.Comments;
                }
            },
            Comments: {
                get: function () {
                    return this.m_Comments;
                },
                set: function (value) {
                    this.m_Comments = value;
                }
            }
        },
        alias: [
            "StartIteration", "Codex$ICodeReviewCommentThread$StartIteration",
            "LastUpdated", "Codex$ICodeReviewCommentThread$LastUpdated",
            "FileRepoRelativePath", "Codex$ICodeReviewCommentThread$FileRepoRelativePath"
        ],
        ctors: {
            init: function () {
                this.m_LastUpdated = System.DateTime.getDefaultValue();
                this.m_Comments = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewComment)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewCommentThread, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_OriginalSpan = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LineSpan, Bridge.global.Codex.ObjectModel.LineSpan, this.OriginalSpan, $asm.$.Codex.ObjectModel.CodeReviewCommentThread.f1);
                ;
                this.m_StartIteration = value.Codex$ICodeReviewCommentThread$StartIteration;
                this.m_LastUpdated = value.Codex$ICodeReviewCommentThread$LastUpdated;
                this.m_FileRepoRelativePath = value.Codex$ICodeReviewCommentThread$FileRepoRelativePath;
                this.m_Comments = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewComment)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICodeReviewCommentThread$Comments).select($asm.$.Codex.ObjectModel.CodeReviewCommentThread.f3));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CodeReviewCommentThread", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CodeReviewCommentThread, {
        f1: function (v) {
            return new Codex.ObjectModel.LineSpan.ctor().CopyFrom$1(Codex.ObjectModel.LineSpan, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.CodeReviewComment.ctor().CopyFrom(Codex.ObjectModel.CodeReviewComment, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICodeReviewComment, Bridge.global.Codex.ObjectModel.CodeReviewComment, v, $asm.$.Codex.ObjectModel.CodeReviewCommentThread.f2);
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewerInfo", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewerInfo],
        fields: {
            m_Name: null
        },
        props: {
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: ["Name", "Codex$ICodeReviewerInfo$Name"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewerInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$ICodeReviewerInfo$Name;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewFile", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewFile],
        fields: {
            m_StartIteration: 0,
            m_RepoRelativePath: null,
            m_FileId: null,
            m_BaselineFileId: null,
            m_ChangeKind: 0
        },
        props: {
            /**
             * The first iteration in which this file appears
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function StartIteration
             * @type number
             */
            StartIteration: {
                get: function () {
                    return this.m_StartIteration;
                },
                set: function (value) {
                    this.m_StartIteration = value;
                }
            },
            /**
             * The relative path in the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The file id of the new version of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            },
            /**
             * The file id of the baseline version of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function BaselineFileId
             * @type string
             */
            BaselineFileId: {
                get: function () {
                    return this.m_BaselineFileId;
                },
                set: function (value) {
                    this.m_BaselineFileId = value;
                }
            },
            /**
             * The type of change applied to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CodeReviewFile
             * @function ChangeKind
             * @type Codex.FileChangeKind
             */
            ChangeKind: {
                get: function () {
                    return this.m_ChangeKind;
                },
                set: function (value) {
                    this.m_ChangeKind = value;
                }
            }
        },
        alias: [
            "StartIteration", "Codex$ICodeReviewFile$StartIteration",
            "RepoRelativePath", "Codex$ICodeReviewFile$RepoRelativePath",
            "FileId", "Codex$ICodeReviewFile$FileId",
            "BaselineFileId", "Codex$ICodeReviewFile$BaselineFileId",
            "ChangeKind", "Codex$ICodeReviewFile$ChangeKind"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_StartIteration = value.Codex$ICodeReviewFile$StartIteration;
                this.m_RepoRelativePath = value.Codex$ICodeReviewFile$RepoRelativePath;
                this.m_FileId = value.Codex$ICodeReviewFile$FileId;
                this.m_BaselineFileId = value.Codex$ICodeReviewFile$BaselineFileId;
                this.m_ChangeKind = value.Codex$ICodeReviewFile$ChangeKind;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CodeReviewIteration", {
        inherits: [Codex.EntityBase,Codex.ICodeReviewIteration],
        fields: {
            m_IterationNumber: 0,
            m_ReviewId: null,
            m_Description: null,
            m_Files: null
        },
        props: {
            IterationNumber: {
                get: function () {
                    return this.m_IterationNumber;
                },
                set: function (value) {
                    this.m_IterationNumber = value;
                }
            },
            ReviewId: {
                get: function () {
                    return this.m_ReviewId;
                },
                set: function (value) {
                    this.m_ReviewId = value;
                }
            },
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            Codex$ICodeReviewIteration$Files: {
                get: function () {
                    return this.Files;
                }
            },
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            }
        },
        alias: [
            "IterationNumber", "Codex$ICodeReviewIteration$IterationNumber",
            "ReviewId", "Codex$ICodeReviewIteration$ReviewId",
            "Description", "Codex$ICodeReviewIteration$Description"
        ],
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewFile)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CodeReviewIteration, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_IterationNumber = value.Codex$ICodeReviewIteration$IterationNumber;
                this.m_ReviewId = value.Codex$ICodeReviewIteration$ReviewId;
                this.m_Description = value.Codex$ICodeReviewIteration$Description;
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CodeReviewFile)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICodeReviewIteration$Files).select($asm.$.Codex.ObjectModel.CodeReviewIteration.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CodeReviewIteration", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CodeReviewIteration, {
        f1: function (_v) {
            return new Codex.ObjectModel.CodeReviewFile.ctor().CopyFrom(Codex.ObjectModel.CodeReviewFile, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICodeReviewFile, Bridge.global.Codex.ObjectModel.CodeReviewFile, v, $asm.$.Codex.ObjectModel.CodeReviewIteration.f1);
        }
    });

    /**
     * Represents a version of a repository file for a commit
     *
     * @public
     * @class Codex.ObjectModel.CommitFileLink
     * @augments Codex.EntityBase
     * @implements  Codex.ICommitFileLink
     */
    Bridge.define("Codex.ObjectModel.CommitFileLink", {
        inherits: [Codex.EntityBase,Codex.ICommitFileLink],
        fields: {
            m_RepoRelativePath: null,
            m_FileId: null,
            m_VersionControlFileId: null
        },
        props: {
            /**
             * The relative path in the repository to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * Unique identifer for file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            },
            /**
             * Unique identifer for file content as determined by version control
             (i.e. the blob hash)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFileLink
             * @function VersionControlFileId
             * @type string
             */
            VersionControlFileId: {
                get: function () {
                    return this.m_VersionControlFileId;
                },
                set: function (value) {
                    this.m_VersionControlFileId = value;
                }
            }
        },
        alias: [
            "RepoRelativePath", "Codex$ICommitFileLink$RepoRelativePath",
            "FileId", "Codex$ICommitFileLink$FileId",
            "VersionControlFileId", "Codex$ICommitFileLink$VersionControlFileId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.CommitFileLink, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$ICommitFileLink$RepoRelativePath;
                this.m_FileId = value.Codex$ICommitFileLink$FileId;
                this.m_VersionControlFileId = value.Codex$ICommitFileLink$VersionControlFileId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Symbol", {
        inherits: [Codex.EntityBase,Codex.ICodeSymbol],
        fields: {
            m_ProjectId: null,
            m_Id: null,
            m_Kind: null
        },
        props: {
            /**
             * The identifier of the project in which the symbol appears
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * The identifier for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function Id
             * @type Codex.ObjectModel.SymbolId
             */
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            /**
             * The symbol kind. (i.e. interface, method, field)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function Kind
             * @type string
             */
            Kind: {
                get: function () {
                    return this.m_Kind;
                },
                set: function (value) {
                    this.m_Kind = value;
                }
            },
            /**
             * Extension data used during analysis/search
             TODO: Why is this needed?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Symbol
             * @function ExtData
             * @type Codex.ObjectModel.ExtensionData
             */
            ExtData: null
        },
        alias: [
            "ProjectId", "Codex$ICodeSymbol$ProjectId",
            "Id", "Codex$ICodeSymbol$Id",
            "Kind", "Codex$ICodeSymbol$Kind"
        ],
        ctors: {
            init: function () {
                this.m_Id = new Codex.ObjectModel.SymbolId();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Symbol, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_ProjectId = value.Codex$ICodeSymbol$ProjectId;
                this.m_Id = value.Codex$ICodeSymbol$Id;
                this.m_Kind = value.Codex$ICodeSymbol$Kind;
                return Bridge.cast((this), TTarget);
            },
            Equals: function (other) {
                return System.String.equals(this.ProjectId, other.ProjectId, 4) && System.String.equals(this.Id.Value, other.Id.Value, 4);
            },
            equals: function (obj) {
                if (Bridge.referenceEquals(null, obj)) {
                    return false;
                }
                if (Bridge.referenceEquals(this, obj)) {
                    return true;
                }
                if (!Bridge.referenceEquals(Bridge.getType(obj), Bridge.getType(this))) {
                    return false;
                }
                return this.Equals(Bridge.cast(obj, Codex.ObjectModel.Symbol));
            },
            getHashCode: function () {
                var $t, $t1, $t2, $t3;
                return (Bridge.Int.mul((($t = (($t1 = this.ProjectId) != null ? Bridge.getHashCode($t1) : null), $t != null ? $t : 0)), 397)) ^ (($t2 = (($t3 = this.Id.Value) != null ? Bridge.getHashCode($t3) : null), $t2 != null ? $t2 : 0));
            },
            toString: function () {
                return this.Id.Value;
            }
        }
    });

    /**
     * Defines documentation about a symbol
     *
     * @public
     * @class Codex.ObjectModel.DocumentationInfo
     * @augments Codex.EntityBase
     * @implements  Codex.IDocumentationInfo
     */
    Bridge.define("Codex.ObjectModel.DocumentationInfo", {
        inherits: [Codex.EntityBase,Codex.IDocumentationInfo],
        fields: {
            m_DeclarationName: null,
            m_Comment: null,
            m_AssociatedSymbol: null,
            m_References: null,
            m_Summary: null,
            m_Remarks: null,
            m_Arguments: null,
            m_TypeParameters: null,
            m_Exceptions: null
        },
        props: {
            /**
             * The declaration name for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function DeclarationName
             * @type string
             */
            DeclarationName: {
                get: function () {
                    return this.m_DeclarationName;
                },
                set: function (value) {
                    this.m_DeclarationName = value;
                }
            },
            /**
             * The comment applied to the definition (this is the raw doc comment text)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            },
            /**
             * Identity of symbol which generated this documentation
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$AssociatedSymbol
             * @type Codex.ICodeSymbol
             */
            Codex$IDocumentationInfo$AssociatedSymbol: {
                get: function () {
                    return this.AssociatedSymbol;
                }
            },
            /**
             * Identity of symbol which generated this documentation
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function AssociatedSymbol
             * @type Codex.ObjectModel.Symbol
             */
            AssociatedSymbol: {
                get: function () {
                    return this.m_AssociatedSymbol;
                },
                set: function (value) {
                    this.m_AssociatedSymbol = value;
                }
            },
            /**
             * The other symbols referenced by this symbol (i.e. base type, implemented interface
             or interface members, overridden members, return type of method or property type)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$References: {
                get: function () {
                    return this.References;
                }
            },
            /**
             * The other symbols referenced by this symbol (i.e. base type, implemented interface
             or interface members, overridden members, return type of method or property type)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function References
             * @type System.Collections.Generic.List$1
             */
            References: {
                get: function () {
                    return this.m_References;
                },
                set: function (value) {
                    this.m_References = value;
                }
            },
            /**
             * Describes the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Summary
             * @type string
             */
            Summary: {
                get: function () {
                    return this.m_Summary;
                },
                set: function (value) {
                    this.m_Summary = value;
                }
            },
            /**
             * Supplementation information about the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Remarks
             * @type string
             */
            Remarks: {
                get: function () {
                    return this.m_Remarks;
                },
                set: function (value) {
                    this.m_Remarks = value;
                }
            },
            /**
             * Comments on arguments
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$Arguments
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$Arguments: {
                get: function () {
                    return this.Arguments;
                }
            },
            /**
             * Comments on arguments
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Arguments
             * @type System.Collections.Generic.List$1
             */
            Arguments: {
                get: function () {
                    return this.m_Arguments;
                },
                set: function (value) {
                    this.m_Arguments = value;
                }
            },
            /**
             * Comments on type parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$TypeParameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$TypeParameters: {
                get: function () {
                    return this.TypeParameters;
                }
            },
            /**
             * Comments on type parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function TypeParameters
             * @type System.Collections.Generic.List$1
             */
            TypeParameters: {
                get: function () {
                    return this.m_TypeParameters;
                },
                set: function (value) {
                    this.m_TypeParameters = value;
                }
            },
            /**
             * Information about exceptions which can be thrown
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Codex$IDocumentationInfo$Exceptions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDocumentationInfo$Exceptions: {
                get: function () {
                    return this.Exceptions;
                }
            },
            /**
             * Information about exceptions which can be thrown
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationInfo
             * @function Exceptions
             * @type System.Collections.Generic.List$1
             */
            Exceptions: {
                get: function () {
                    return this.m_Exceptions;
                },
                set: function (value) {
                    this.m_Exceptions = value;
                }
            }
        },
        alias: [
            "DeclarationName", "Codex$IDocumentationInfo$DeclarationName",
            "Comment", "Codex$IDocumentationInfo$Comment",
            "Summary", "Codex$IDocumentationInfo$Summary",
            "Remarks", "Codex$IDocumentationInfo$Remarks"
        ],
        ctors: {
            init: function () {
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.DocumentationReferenceSymbol)).ctor();
                this.m_Arguments = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).ctor();
                this.m_TypeParameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDocumentation)).ctor();
                this.m_Exceptions = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.DocumentationInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_DeclarationName = value.Codex$IDocumentationInfo$DeclarationName;
                this.m_Comment = value.Codex$IDocumentationInfo$Comment;
                this.m_AssociatedSymbol = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Symbol, Bridge.global.Codex.ObjectModel.Symbol, this.AssociatedSymbol, $asm.$.Codex.ObjectModel.DocumentationInfo.f1);
                ;
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.DocumentationReferenceSymbol)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$References).select($asm.$.Codex.ObjectModel.DocumentationInfo.f3));
                this.m_Summary = value.Codex$IDocumentationInfo$Summary;
                this.m_Remarks = value.Codex$IDocumentationInfo$Remarks;
                this.m_Arguments = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$Arguments).select($asm.$.Codex.ObjectModel.DocumentationInfo.f5));
                this.m_TypeParameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$TypeParameters).select($asm.$.Codex.ObjectModel.DocumentationInfo.f7));
                this.m_Exceptions = new (System.Collections.Generic.List$1(Codex.ObjectModel.TypedParameterDocumentation)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDocumentationInfo$Exceptions).select($asm.$.Codex.ObjectModel.DocumentationInfo.f5));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DocumentationInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DocumentationInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.Symbol.ctor().CopyFrom(Codex.ObjectModel.Symbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.DocumentationReferenceSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IDocumentationReferenceSymbol, Bridge.global.Codex.ObjectModel.DocumentationReferenceSymbol, v, $asm.$.Codex.ObjectModel.DocumentationInfo.f2);
        },
        f4: function (_v) {
            return new Codex.ObjectModel.TypedParameterDocumentation.ctor().CopyFrom$1(Codex.ObjectModel.TypedParameterDocumentation, _v);
        },
        f5: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ITypedParameterDocumentation, Bridge.global.Codex.ObjectModel.TypedParameterDocumentation, v, $asm.$.Codex.ObjectModel.DocumentationInfo.f4);
        },
        f6: function (_v) {
            return new Codex.ObjectModel.ParameterDocumentation.ctor().CopyFrom(Codex.ObjectModel.ParameterDocumentation, _v);
        },
        f7: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IParameterDocumentation, Bridge.global.Codex.ObjectModel.ParameterDocumentation, v, $asm.$.Codex.ObjectModel.DocumentationInfo.f6);
        }
    });

    /**
     * Describes encoding so that file may be reconstituted in a byte-identical form
     *
     * @public
     * @class Codex.ObjectModel.EncodingDescription
     * @augments Codex.EntityBase
     * @implements  Codex.IEncodingDescription
     */
    Bridge.define("Codex.ObjectModel.EncodingDescription", {
        inherits: [Codex.EntityBase,Codex.IEncodingDescription],
        fields: {
            m_Name: null,
            m_Preamble: null
        },
        props: {
            /**
             * The name of the encoding
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.EncodingDescription
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The encoding preamble
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.EncodingDescription
             * @function Preamble
             * @type Array.<number>
             */
            Preamble: {
                get: function () {
                    return this.m_Preamble;
                },
                set: function (value) {
                    this.m_Preamble = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IEncodingDescription$Name",
            "Preamble", "Codex$IEncodingDescription$Preamble"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.EncodingDescription, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IEncodingDescription$Name;
                this.m_Preamble = value.Codex$IEncodingDescription$Preamble;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.FileStatistics", {
        inherits: [Codex.EntityBase,Codex.IFileStatistics],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.FileStatistics, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.Index", {
        inherits: [Codex.EntityBase,Codex.Sdk.Search.IIndex],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Index, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.LanguageInfo", {
        inherits: [Codex.EntityBase,Codex.ILanguageInfo],
        fields: {
            m_Name: null,
            m_Classifications: null
        },
        props: {
            /**
             * The name of the language
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Describes the style for classified spans. See {@link }.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Codex$ILanguageInfo$Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ILanguageInfo$Classifications: {
                get: function () {
                    return this.Classifications;
                }
            },
            /**
             * Describes the style for classified spans. See {@link }.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LanguageInfo
             * @function Classifications
             * @type System.Collections.Generic.List$1
             */
            Classifications: {
                get: function () {
                    return this.m_Classifications;
                },
                set: function (value) {
                    this.m_Classifications = value;
                }
            }
        },
        alias: ["Name", "Codex$ILanguageInfo$Name"],
        ctors: {
            init: function () {
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationStyle)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.LanguageInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$ILanguageInfo$Name;
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationStyle)).$ctor1(System.Linq.Enumerable.from(value.Codex$ILanguageInfo$Classifications).select($asm.$.Codex.ObjectModel.LanguageInfo.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.LanguageInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.LanguageInfo, {
        f1: function (_v) {
            return new Codex.ObjectModel.ClassificationStyle.ctor().CopyFrom(Codex.ObjectModel.ClassificationStyle, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IClassificationStyle, Bridge.global.Codex.ObjectModel.ClassificationStyle, v, $asm.$.Codex.ObjectModel.LanguageInfo.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.OutliningRegion", {
        inherits: [Codex.EntityBase,Codex.IOutliningRegion],
        fields: {
            m_Kind: null,
            m_Header: null,
            m_Content: null
        },
        props: {
            Kind: {
                get: function () {
                    return this.m_Kind;
                },
                set: function (value) {
                    this.m_Kind = value;
                }
            },
            /**
             * Defines the region containing the header text of the outlining region
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Codex$IOutliningRegion$Header
             * @type Codex.ILineSpan
             */
            Codex$IOutliningRegion$Header: {
                get: function () {
                    return this.Header;
                }
            },
            /**
             * Defines the region containing the header text of the outlining region
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Header
             * @type Codex.ObjectModel.LineSpan
             */
            Header: {
                get: function () {
                    return this.m_Header;
                },
                set: function (value) {
                    this.m_Header = value;
                }
            },
            /**
             * Defines the region containing the collapsible content region of the outlining region
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Codex$IOutliningRegion$Content
             * @type Codex.ILineSpan
             */
            Codex$IOutliningRegion$Content: {
                get: function () {
                    return this.Content;
                }
            },
            /**
             * Defines the region containing the collapsible content region of the outlining region
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.OutliningRegion
             * @function Content
             * @type Codex.ObjectModel.LineSpan
             */
            Content: {
                get: function () {
                    return this.m_Content;
                },
                set: function (value) {
                    this.m_Content = value;
                }
            }
        },
        alias: ["Kind", "Codex$IOutliningRegion$Kind"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.OutliningRegion, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Kind = value.Codex$IOutliningRegion$Kind;
                this.m_Header = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LineSpan, Bridge.global.Codex.ObjectModel.LineSpan, this.Header, $asm.$.Codex.ObjectModel.OutliningRegion.f1);
                ;
                this.m_Content = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LineSpan, Bridge.global.Codex.ObjectModel.LineSpan, this.Content, $asm.$.Codex.ObjectModel.OutliningRegion.f1);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.OutliningRegion", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.OutliningRegion, {
        f1: function (v) {
            return new Codex.ObjectModel.LineSpan.ctor().CopyFrom$1(Codex.ObjectModel.LineSpan, v);
        }
    });

    /**
     * Documentation for a method parameter
     *
     * @public
     * @class Codex.ObjectModel.ParameterDocumentation
     * @augments Codex.EntityBase
     * @implements  Codex.IParameterDocumentation
     */
    Bridge.define("Codex.ObjectModel.ParameterDocumentation", {
        inherits: [Codex.EntityBase,Codex.IParameterDocumentation],
        fields: {
            m_Name: null,
            m_Comment: null
        },
        props: {
            /**
             * The name of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDocumentation
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * The comment associated with the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDocumentation
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IParameterDocumentation$Name",
            "Comment", "Codex$IParameterDocumentation$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ParameterDocumentation, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IParameterDocumentation$Name;
                this.m_Comment = value.Codex$IParameterDocumentation$Comment;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.PropertyMap", {
        inherits: [Codex.ObjectModel.PropertyMapBase,Codex.IPropertyMap],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.PropertyMapBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.PropertyMapBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.PropertyMap, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () { }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferencedProject", {
        inherits: [Codex.EntityBase,Codex.IReferencedProject],
        fields: {
            m_ProjectId: null,
            m_Definitions: null,
            m_DisplayName: null,
            m_Properties: null
        },
        props: {
            /**
             * The identifier of the referenced project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * Used definitions for the project. Sorted.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Codex$IReferencedProject$Definitions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IReferencedProject$Definitions: {
                get: function () {
                    return this.Definitions;
                }
            },
            /**
             * Used definitions for the project. Sorted.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Definitions
             * @type System.Collections.Generic.List$1
             */
            Definitions: {
                get: function () {
                    return this.m_Definitions;
                },
                set: function (value) {
                    this.m_Definitions = value;
                }
            },
            /**
             * The display name of the project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The properties of the project. Such as Version, PublicKey, etc.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Codex$IReferencedProject$Properties
             * @type Codex.IPropertyMap
             */
            Codex$IReferencedProject$Properties: {
                get: function () {
                    return this.Properties;
                }
            },
            /**
             * The properties of the project. Such as Version, PublicKey, etc.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferencedProject
             * @function Properties
             * @type Codex.ObjectModel.PropertyMap
             */
            Properties: {
                get: function () {
                    return this.m_Properties;
                },
                set: function (value) {
                    this.m_Properties = value;
                }
            }
        },
        alias: [
            "ProjectId", "Codex$IReferencedProject$ProjectId",
            "DisplayName", "Codex$IReferencedProject$DisplayName"
        ],
        ctors: {
            init: function () {
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSymbol)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ReferencedProject, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IReferencedProject$ProjectId;
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSymbol)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferencedProject$Definitions).select($asm.$.Codex.ObjectModel.ReferencedProject.f2));
                this.m_DisplayName = value.Codex$IReferencedProject$DisplayName;
                this.m_Properties = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.PropertyMap, Bridge.global.Codex.ObjectModel.PropertyMap, this.Properties, $asm.$.Codex.ObjectModel.ReferencedProject.f3);
                ;
                return Bridge.cast((this), TTarget);
            },
            toString: function () {
                var $t;
                return ($t = this.DisplayName, $t != null ? $t : this.ProjectId);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferencedProject", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferencedProject, {
        f1: function (_v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IDefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, v, $asm.$.Codex.ObjectModel.ReferencedProject.f1);
        },
        f3: function (v) {
            return new Codex.ObjectModel.PropertyMap.ctor().CopyFrom(Codex.ObjectModel.PropertyMap, v);
        }
    });

    Bridge.define("Codex.ObjectModel.Repository", {
        inherits: [Codex.EntityBase,Codex.IRepository],
        fields: {
            m_Name: null,
            m_Description: null,
            m_Id: null,
            m_WebAddress: null,
            m_SourceControlWebAddress: null,
            m_FileWebAddressTransformInputRegex: null,
            m_PrimaryBranch: null,
            m_RepositoryReferences: null
        },
        props: {
            /**
             * The name fo the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Describes the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            },
            WebAddress: {
                get: function () {
                    return this.m_WebAddress;
                },
                set: function (value) {
                    this.m_WebAddress = value;
                }
            },
            /**
             * The web address for source control of the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function SourceControlWebAddress
             * @type string
             */
            SourceControlWebAddress: {
                get: function () {
                    return this.m_SourceControlWebAddress;
                },
                set: function (value) {
                    this.m_SourceControlWebAddress = value;
                }
            },
            /**
             * The regex for extracting
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function FileWebAddressTransformInputRegex
             * @type string
             */
            FileWebAddressTransformInputRegex: {
                get: function () {
                    return this.m_FileWebAddressTransformInputRegex;
                },
                set: function (value) {
                    this.m_FileWebAddressTransformInputRegex = value;
                }
            },
            /**
             * The name of the primary branch for the repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Repository
             * @function PrimaryBranch
             * @type string
             */
            PrimaryBranch: {
                get: function () {
                    return this.m_PrimaryBranch;
                },
                set: function (value) {
                    this.m_PrimaryBranch = value;
                }
            },
            Codex$IRepository$RepositoryReferences: {
                get: function () {
                    return this.RepositoryReferences;
                }
            },
            RepositoryReferences: {
                get: function () {
                    return this.m_RepositoryReferences;
                },
                set: function (value) {
                    this.m_RepositoryReferences = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IRepository$Name",
            "Description", "Codex$IRepository$Description",
            "Id", "Codex$IRepository$Id",
            "WebAddress", "Codex$IRepository$WebAddress",
            "SourceControlWebAddress", "Codex$IRepository$SourceControlWebAddress",
            "FileWebAddressTransformInputRegex", "Codex$IRepository$FileWebAddressTransformInputRegex",
            "PrimaryBranch", "Codex$IRepository$PrimaryBranch"
        ],
        ctors: {
            init: function () {
                this.m_RepositoryReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.RepositoryReference)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.Repository, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IRepository$Name;
                this.m_Description = value.Codex$IRepository$Description;
                this.m_Id = value.Codex$IRepository$Id;
                this.m_WebAddress = value.Codex$IRepository$WebAddress;
                this.m_SourceControlWebAddress = value.Codex$IRepository$SourceControlWebAddress;
                this.m_FileWebAddressTransformInputRegex = value.Codex$IRepository$FileWebAddressTransformInputRegex;
                this.m_PrimaryBranch = value.Codex$IRepository$PrimaryBranch;
                this.m_RepositoryReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.RepositoryReference)).$ctor1(System.Linq.Enumerable.from(value.Codex$IRepository$RepositoryReferences).select($asm.$.Codex.ObjectModel.Repository.f2));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.Repository", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.Repository, {
        f1: function (_v) {
            return new Codex.ObjectModel.RepositoryReference.ctor().CopyFrom(Codex.ObjectModel.RepositoryReference, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IRepositoryReference, Bridge.global.Codex.ObjectModel.RepositoryReference, v, $asm.$.Codex.ObjectModel.Repository.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.RepositoryReference", {
        inherits: [Codex.EntityBase,Codex.IRepositoryReference],
        fields: {
            m_Name: null,
            m_Id: null
        },
        props: {
            /**
             * The name of the reference repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryReference
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            },
            /**
             * Optional. Id of repository
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryReference
             * @function Id
             * @type string
             */
            Id: {
                get: function () {
                    return this.m_Id;
                },
                set: function (value) {
                    this.m_Id = value;
                }
            }
        },
        alias: [
            "Name", "Codex$IRepositoryReference$Name",
            "Id", "Codex$IRepositoryReference$Id"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepositoryReference, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Name = value.Codex$IRepositoryReference$Name;
                this.m_Id = value.Codex$IRepositoryReference$Id;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Information for creating an ICodexRepositoryStore
     *
     * @public
     * @class Codex.ObjectModel.RepositoryStoreInfo
     * @augments Codex.EntityBase
     * @implements  Codex.IRepositoryStoreInfo
     */
    Bridge.define("Codex.ObjectModel.RepositoryStoreInfo", {
        inherits: [Codex.EntityBase,Codex.IRepositoryStoreInfo],
        fields: {
            m_Repository: null,
            m_Branch: null,
            m_Commit: null
        },
        props: {
            /**
             * The repository being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Repository
             * @type Codex.IRepository
             */
            Codex$IRepositoryStoreInfo$Repository: {
                get: function () {
                    return this.Repository;
                }
            },
            /**
             * The repository being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Repository
             * @type Codex.ObjectModel.Repository
             */
            Repository: {
                get: function () {
                    return this.m_Repository;
                },
                set: function (value) {
                    this.m_Repository = value;
                }
            },
            /**
             * The branch being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Branch
             * @type Codex.IBranch
             */
            Codex$IRepositoryStoreInfo$Branch: {
                get: function () {
                    return this.Branch;
                }
            },
            /**
             * The branch being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Branch
             * @type Codex.ObjectModel.Branch
             */
            Branch: {
                get: function () {
                    return this.m_Branch;
                },
                set: function (value) {
                    this.m_Branch = value;
                }
            },
            /**
             * The commit being stored
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Codex$IRepositoryStoreInfo$Commit
             * @type Codex.ICommit
             */
            Codex$IRepositoryStoreInfo$Commit: {
                get: function () {
                    return this.Commit;
                }
            },
            /**
             * The commit being stored
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepositoryStoreInfo
             * @function Commit
             * @type Codex.ObjectModel.Commit
             */
            Commit: {
                get: function () {
                    return this.m_Commit;
                },
                set: function (value) {
                    this.m_Commit = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.RepositoryStoreInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Repository = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Repository, Bridge.global.Codex.ObjectModel.Repository, this.Repository, $asm.$.Codex.ObjectModel.RepositoryStoreInfo.f1);
                ;
                this.m_Branch = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Branch, Bridge.global.Codex.ObjectModel.Branch, this.Branch, $asm.$.Codex.ObjectModel.RepositoryStoreInfo.f2);
                ;
                this.m_Commit = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Commit, Bridge.global.Codex.ObjectModel.Commit, this.Commit, $asm.$.Codex.ObjectModel.RepositoryStoreInfo.f3);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.RepositoryStoreInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.RepositoryStoreInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.Repository.ctor().CopyFrom(Codex.ObjectModel.Repository, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.Branch.ctor().CopyFrom(Codex.ObjectModel.Branch, v);
        },
        f3: function (v) {
            return new Codex.ObjectModel.Commit.ctor().CopyFrom$2(Codex.ObjectModel.Commit, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SearchResult", {
        inherits: [Codex.EntityBase,Codex.Sdk.Search.ISearchResult],
        fields: {
            m_TextLine: null,
            m_Definition: null
        },
        props: {
            /**
             * The text span for a text result
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SearchResult
             * @function Codex$Sdk$Search$ISearchResult$TextLine
             * @type Codex.Sdk.Search.ITextLineSpanResult
             */
            Codex$Sdk$Search$ISearchResult$TextLine: {
                get: function () {
                    return this.TextLine;
                }
            },
            /**
             * The text span for a text result
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchResult
             * @function TextLine
             * @type Codex.ObjectModel.TextLineSpanResult
             */
            TextLine: {
                get: function () {
                    return this.m_TextLine;
                },
                set: function (value) {
                    this.m_TextLine = value;
                }
            },
            /**
             * The definition of the search result
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SearchResult
             * @function Codex$Sdk$Search$ISearchResult$Definition
             * @type Codex.IDefinitionSymbol
             */
            Codex$Sdk$Search$ISearchResult$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            /**
             * The definition of the search result
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SearchResult
             * @function Definition
             * @type Codex.ObjectModel.DefinitionSymbol
             */
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SearchResult, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_TextLine = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.TextLineSpanResult, Bridge.global.Codex.ObjectModel.TextLineSpanResult, this.TextLine, $asm.$.Codex.ObjectModel.SearchResult.f1);
                ;
                this.m_Definition = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, this.Definition, $asm.$.Codex.ObjectModel.SearchResult.f2);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SearchResult", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SearchResult, {
        f1: function (v) {
            return new Codex.ObjectModel.TextLineSpanResult.ctor().CopyFrom$4(Codex.ObjectModel.TextLineSpanResult, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        }
    });

    /**
     * Information about a source file as defined by the source control provider
     *
     * @public
     * @class Codex.ObjectModel.SourceControlFileInfo
     * @augments Codex.EntityBase
     * @implements  Codex.ISourceControlFileInfo
     */
    Bridge.define("Codex.ObjectModel.SourceControlFileInfo", {
        inherits: [Codex.EntityBase,Codex.ISourceControlFileInfo],
        fields: {
            m_SourceControlContentId: null
        },
        props: {
            /**
             * Unique id for the source file content as defined by the source control provider (i.e. git SHA)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceControlFileInfo
             * @function SourceControlContentId
             * @type string
             */
            SourceControlContentId: {
                get: function () {
                    return this.m_SourceControlContentId;
                },
                set: function (value) {
                    this.m_SourceControlContentId = value;
                }
            }
        },
        alias: ["SourceControlContentId", "Codex$ISourceControlFileInfo$SourceControlContentId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceControlFileInfo, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_SourceControlContentId = value.Codex$ISourceControlFileInfo$SourceControlContentId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Defines text contents of a file and associated data
     *
     * @public
     * @class Codex.ObjectModel.SourceFile
     * @augments Codex.EntityBase
     * @implements  Codex.ISourceFile
     */
    Bridge.define("Codex.ObjectModel.SourceFile", {
        inherits: [Codex.EntityBase,Codex.ISourceFile],
        fields: {
            m_Info: null,
            m_Content: null,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The information about the source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFile
             * @function Codex$ISourceFile$Info
             * @type Codex.ISourceFileInfo
             */
            Codex$ISourceFile$Info: {
                get: function () {
                    return this.Info;
                }
            },
            /**
             * The information about the source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function Info
             * @type Codex.ObjectModel.SourceFileInfo
             */
            Info: {
                get: function () {
                    return this.m_Info;
                },
                set: function (value) {
                    this.m_Info = value;
                }
            },
            /**
             * The content of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function Content
             * @type string
             */
            Content: {
                get: function () {
                    return this.m_Content;
                },
                set: function (value) {
                    this.m_Content = value;
                }
            },
            /**
             * Indicates that the file should be excluded from text search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFile
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "Content", "Codex$ISourceFile$Content",
            "ExcludeFromSearch", "Codex$ISourceFile$ExcludeFromSearch"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_Info = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFileInfo, Bridge.global.Codex.ObjectModel.SourceFileInfo, this.Info, $asm.$.Codex.ObjectModel.SourceFile.f1);
                ;
                this.m_Content = value.Codex$ISourceFile$Content;
                this.m_ExcludeFromSearch = value.Codex$ISourceFile$ExcludeFromSearch;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SourceFile", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SourceFile, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceFileInfo.ctor().CopyFrom$5(Codex.ObjectModel.SourceFileInfo, v);
        }
    });

    Bridge.define("Codex.ObjectModel.StoredBoundSourceFile", {
        inherits: [Codex.EntityBase,Codex.IStoredBoundSourceFile],
        fields: {
            m_BoundSourceFile: null,
            m_CompressedClassifications: null,
            m_CompressedReferences: null
        },
        props: {
            Codex$IStoredBoundSourceFile$BoundSourceFile: {
                get: function () {
                    return this.BoundSourceFile;
                }
            },
            BoundSourceFile: {
                get: function () {
                    return this.m_BoundSourceFile;
                },
                set: function (value) {
                    this.m_BoundSourceFile = value;
                }
            },
            /**
             * Compressed list of classification spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredBoundSourceFile
             * @function CompressedClassifications
             * @type Codex.IClassificationList
             */
            CompressedClassifications: {
                get: function () {
                    return this.m_CompressedClassifications;
                },
                set: function (value) {
                    this.m_CompressedClassifications = value;
                }
            },
            /**
             * Compressed list of reference spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredBoundSourceFile
             * @function CompressedReferences
             * @type Codex.IReferenceList
             */
            CompressedReferences: {
                get: function () {
                    return this.m_CompressedReferences;
                },
                set: function (value) {
                    this.m_CompressedReferences = value;
                }
            }
        },
        alias: [
            "CompressedClassifications", "Codex$IStoredBoundSourceFile$CompressedClassifications",
            "CompressedReferences", "Codex$IStoredBoundSourceFile$CompressedReferences"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.StoredBoundSourceFile, value);
            }
        },
        methods: {
            CopyFrom: function (TTarget, value) {
                this.m_BoundSourceFile = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.BoundSourceFile, Bridge.global.Codex.ObjectModel.BoundSourceFile, this.BoundSourceFile, $asm.$.Codex.ObjectModel.StoredBoundSourceFile.f1);
                ;
                this.m_CompressedClassifications = value.Codex$IStoredBoundSourceFile$CompressedClassifications;
                this.m_CompressedReferences = value.Codex$IStoredBoundSourceFile$CompressedReferences;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.StoredBoundSourceFile", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.StoredBoundSourceFile, {
        f1: function (v) {
            return new Codex.ObjectModel.BoundSourceFile.ctor().CopyFrom$5(Codex.ObjectModel.BoundSourceFile, v);
        }
    });

    Bridge.define("Codex.Sdk.Search.FindSymbolArgumentsBase", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase],
        props: {
            /**
             * The symbol id of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.FindSymbolArgumentsBase
             * @function SymbolId
             * @type string
             */
            SymbolId: null,
            /**
             * The project id of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.Sdk.Search.FindSymbolArgumentsBase
             * @function ProjectId
             * @type string
             */
            ProjectId: null
        }
    });

    Bridge.define("Codex.Sdk.Search.GetSourceArguments", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase],
        props: {
            ProjectId: null,
            ProjectRelativePath: null
        }
    });

    Bridge.define("Codex.Sdk.Search.IndexQueryHitsResponse$1", function (T) { return {
        inherits: [Codex.Sdk.Search.IndexQueryResponse$1(Codex.Sdk.Search.IndexQueryHits$1(T))]
    }; });

    Bridge.define("Codex.Sdk.Search.SearchArguments", {
        inherits: [Codex.Sdk.Search.ContextCodexArgumentsBase],
        props: {
            SearchString: null
        }
    });

    Bridge.define("Codex.View.CategorizedSearchResultsViewModel", {
        inherits: [Codex.View.LeftPaneContent,Codex.View.IResultsStats],
        props: {
            Categories: null,
            Counter: null
        },
        alias: ["Counter", "Codex$View$IResultsStats$Counter"],
        ctors: {
            init: function () {
                this.Counter = new Codex.View.Counter();
            },
            ctor: function (searchString, response) {
                this.$initialize();
                Codex.View.LeftPaneContent.ctor.call(this);
                this.Categories = Bridge.fn.bind(this, function (_o1) {
                        _o1.add(Codex.View.ViewUtilities.AddTo(Bridge.global.Codex.View.CategoryGroupSearchResultsViewModel, new Codex.View.CategoryGroupSearchResultsViewModel.$ctor1(searchString, response), this.Counter));
                        return _o1;
                    })(new (System.Collections.Generic.List$1(Codex.View.CategoryGroupSearchResultsViewModel)).ctor());
            },
            $ctor1: function (symbolName, references) {
                this.$initialize();
                Codex.View.LeftPaneContent.ctor.call(this);
                this.Categories = System.Linq.Enumerable.from(references).groupBy($asm.$.Codex.View.CategorizedSearchResultsViewModel.f1).select(Bridge.fn.bind(this, function (referenceGroup) {
                    var referenceKind = { v : new Codex.ObjectModel.ReferenceKind() };
                    System.Enum.tryParse(Bridge.global.Codex.ObjectModel.ReferenceKind, referenceGroup.key(), referenceKind, true);
                    return Codex.View.ViewUtilities.AddTo(Bridge.global.Codex.View.CategoryGroupSearchResultsViewModel, new Codex.View.CategoryGroupSearchResultsViewModel.ctor(referenceKind.v, symbolName, referenceGroup), this.Counter);
                })).toList(Codex.View.CategoryGroupSearchResultsViewModel);
            }
        },
        methods: {
            Render: function (view, parentElement) {
                var $t;
                $t = Bridge.getEnumerator(this.Categories);
                try {
                    while ($t.moveNext()) {
                        var category = $t.Current;
                        category.Render(view, parentElement);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }}
        }
    });

    Bridge.ns("Codex.View.CategorizedSearchResultsViewModel", $asm.$);

    Bridge.apply($asm.$.Codex.View.CategorizedSearchResultsViewModel, {
        f1: function (r) {
            return r.Codex$Sdk$Search$IReferenceSearchResult$ReferenceSpan.Codex$IReferenceSpan$Reference.Codex$IReferenceSymbol$ReferenceKind.toLowerCase();
        }
    });

    Bridge.define("Codex.View.FileResultsViewModel", {
        inherits: [Codex.View.ProjectItemResultViewModel,Codex.View.IResultsStats],
        props: {
            Counter: null,
            Path: null,
            Items: null
        },
        alias: ["Counter", "Codex$View$IResultsStats$Counter"],
        ctors: {
            init: function () {
                this.Counter = new Codex.View.Counter();
            }
        },
        methods: {
            Render: function (view, parentElement) {
                var $t;
                var fileGroupElement = ($t = document.createElement("div"), $t.className = "rF", $t);
                parentElement.appendChild(fileGroupElement);

                fileGroupElement.appendChild(Codex.View.ViewUtilities.SetBackgroundIcon(($t = document.createElement("div"), $t.className = "rN", $t.textContent = System.String.format("{0} ({1})", this.Path, Bridge.box(this.Counter.Count, System.Int32)), $t), Codex.View.ViewUtilities.GetFileNameGlyph(this.Path)));

                $t = Bridge.getEnumerator(this.Items, Codex.View.FileItemResultViewModel);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        item.Render(view, fileGroupElement);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }}
        }
    });

    Bridge.define("Codex.View.GoToDefinitionCommandBinding", {
        inherits: [Codex.View.TypedCommandBinding$1(Codex.IReferenceSymbol)],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.View.TypedCommandBinding$1(Codex.IReferenceSymbol).ctor.call(this, Codex.View.Commands.GoToDefinition);
            }
        }
    });

    Bridge.define("Codex.View.LeftPaneViewModel", {
        inherits: [Codex.View.PaneViewModelBase],
        statics: {
            fields: {
                Initial: null
            },
            ctors: {
                init: function () {
                    var $t;
                    this.Initial = ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = "Enter a search string. Start with ` for full text search results only.", $t);
                }
            },
            methods: {
                FromReferencesResponse: function (response) {
                    var $t, $t1, $t2;
                    if (response.Error != null) {
                        return ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = response.Error, $t);
                    } else if ((($t = response.Result) != null ? $t.Hits : null) == null || response.Result.Hits.Count === 0) {
                        return ($t1 = new Codex.View.LeftPaneViewModel(), $t1.SearchInfo = System.String.format("No references found.", null), $t1);
                    }

                    var result = response.Result;
                    return ($t1 = new Codex.View.LeftPaneViewModel(), $t1.Content = new Codex.View.CategorizedSearchResultsViewModel.$ctor1(($t2 = response.Result.SymbolDisplayName, $t2 != null ? $t2 : response.Result.Hits.getItem(0).Codex$Sdk$Search$IReferenceSearchResult$ReferenceSpan.Codex$IReferenceSpan$Reference.Codex$ICodeSymbol$Id.Value), response.Result.Hits), $t1.SearchInfo = null, $t1);
                },
                FromSearchResponse: function (searchString, response) {
                    var $t, $t1;
                    if (response.Error != null) {
                        return ($t = new Codex.View.LeftPaneViewModel(), $t.SearchInfo = response.Error, $t);
                    } else if ((($t = response.Result) != null ? $t.Hits : null) == null || response.Result.Hits.Count === 0) {
                        return ($t1 = new Codex.View.LeftPaneViewModel(), $t1.SearchInfo = System.String.format("No results found.", null), $t1);
                    }

                    var result = response.Result;
                    var isDefinitionsResult = result.Hits.getItem(0).Codex$Sdk$Search$ISearchResult$Definition != null;
                    return ($t1 = new Codex.View.LeftPaneViewModel(), $t1.Content = isDefinitionsResult ? Bridge.cast(new Codex.View.ProjectResultsViewModel.$ctor1(searchString, response), Codex.View.LeftPaneContent) : new Codex.View.CategorizedSearchResultsViewModel.ctor(searchString, response), $t1.SearchInfo = isDefinitionsResult ? (System.Int64(result.Hits.Count).lt(result.Total) ? System.String.format("Displaying top {0} results out of {1}:", Bridge.box(result.Hits.Count, System.Int32), result.Total) : System.String.format("{0} results found:", Bridge.box(result.Hits.Count, System.Int32))) : "", $t1);
                }
            }
        },
        props: {
            SearchInfoVisibility: {
                get: function () {
                    return !System.String.isNullOrEmpty(this.SearchInfo) ? System.Windows.Visibility.Visible : System.Windows.Visibility.Collapsed;
                }
            },
            SearchInfo: null,
            ContentVisibility: {
                get: function () {
                    return this.Content != null ? System.Windows.Visibility.Visible : System.Windows.Visibility.Collapsed;
                }
            },
            Content: null
        },
        methods: {
            Render: function (view, parentElement) {
                var $t;
                ($t = this.Content) != null ? $t.Render(view, parentElement) : null;
            }
        }
    });

    Bridge.define("Codex.View.ProjectResultsViewModel", {
        inherits: [Codex.View.LeftPaneContent,Codex.View.IResultsStats],
        props: {
            Counter: null,
            ProjectGroups: null
        },
        alias: ["Counter", "Codex$View$IResultsStats$Counter"],
        ctors: {
            init: function () {
                this.Counter = new Codex.View.Counter();
            },
            ctor: function () {
                this.$initialize();
                Codex.View.LeftPaneContent.ctor.call(this);
                this.ProjectGroups = new (System.Collections.Generic.List$1(Codex.View.ProjectGroupResultsViewModel)).ctor();
            },
            $ctor1: function (searchString, response) {
                this.$initialize();
                Codex.View.LeftPaneContent.ctor.call(this);
                this.ProjectGroups = System.Linq.Enumerable.from(response.Result.Hits).select($asm.$.Codex.View.ProjectResultsViewModel.f1).groupBy($asm.$.Codex.View.ProjectResultsViewModel.f2).select(Bridge.fn.bind(this, $asm.$.Codex.View.ProjectResultsViewModel.f3)).toList(Codex.View.ProjectGroupResultsViewModel);
            }
        },
        methods: {
            Render: function (view, parentElement) {
                var $t;
                $t = Bridge.getEnumerator(this.ProjectGroups);
                try {
                    while ($t.moveNext()) {
                        var projectGroup = $t.Current;
                        projectGroup.Render(view, parentElement);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }}
        }
    });

    Bridge.ns("Codex.View.ProjectResultsViewModel", $asm.$);

    Bridge.apply($asm.$.Codex.View.ProjectResultsViewModel, {
        f1: function (sr) {
            return sr.Codex$Sdk$Search$ISearchResult$Definition;
        },
        f2: function (sr) {
            return sr.Codex$ICodeSymbol$ProjectId;
        },
        f3: function (projectGroup) {
            var $t;
            var projectCounter = new Codex.View.Counter();
            return Codex.View.ViewUtilities.AddTo(Bridge.global.Codex.View.ProjectGroupResultsViewModel, Codex.View.ViewUtilities.AddFrom(Bridge.global.Codex.View.ProjectGroupResultsViewModel, ($t = new Codex.View.ProjectGroupResultsViewModel(), $t.ProjectName = projectGroup.key(), $t.Items = projectGroup.select(function (symbol) {
                return Codex.View.ViewUtilities.Increment(Bridge.global.Codex.View.SymbolResultViewModel, new Codex.View.SymbolResultViewModel(symbol), projectCounter);
            }).toList(Codex.View.SymbolResultViewModel), $t), projectCounter), this.Counter);
        }
    });

    Bridge.define("Codex.View.RightPaneViewModel", {
        inherits: [Codex.View.PaneViewModelBase],
        props: {
            ErrorVisibility: {
                get: function () {
                    return !System.String.isNullOrEmpty(this.Error) ? System.Windows.Visibility.Visible : System.Windows.Visibility.Collapsed;
                }
            },
            Error: null,
            EditorVisibility: {
                get: function () {
                    return this.SourceFile != null ? System.Windows.Visibility.Visible : System.Windows.Visibility.Hidden;
                }
            },
            SourceFile: null,
            TargetSpan: null
        },
        ctors: {
            init: function () {
                this.TargetSpan = new (Codex.View.BindableValue$1(Codex.ILineSpan))();
            },
            ctor: function () {
                this.$initialize();
                Codex.View.PaneViewModelBase.ctor.call(this);
            },
            $ctor3: function (sourceFileResponse) {
                this.$initialize();
                Codex.View.PaneViewModelBase.ctor.call(this);
                this.Error = sourceFileResponse.Error;
                this.SourceFile = sourceFileResponse.Result;
            },
            $ctor2: function (response) {
                this.$initialize();
                Codex.View.PaneViewModelBase.ctor.call(this);
                this.Error = response.Error;
            },
            $ctor1: function (sourceFile) {
                this.$initialize();
                Codex.View.PaneViewModelBase.ctor.call(this);
                this.SourceFile = sourceFile;
            }
        }
    });

    Bridge.define("Codex.View.SymbolResultViewModel", {
        inherits: [Codex.View.ProjectItemResultViewModel],
        props: {
            Symbol: null,
            ShortName: null,
            DisplayName: null,
            SymbolKind: null,
            ProjectId: null,
            ImageMoniker: null,
            SortOrder: 0,
            IdentifierLength: {
                get: function () {
                    return this.ShortName.length;
                }
            }
        },
        ctors: {
            ctor: function (symbol) {
                var $t;
                this.$initialize();
                Codex.View.ProjectItemResultViewModel.ctor.call(this);
                this.Symbol = symbol;
                this.ShortName = symbol.Codex$IDefinitionSymbol$ShortName;
                this.DisplayName = symbol.Codex$IDefinitionSymbol$DisplayName;
                this.ProjectId = symbol.Codex$ICodeSymbol$ProjectId;
                this.SymbolKind = ($t = symbol.Codex$ICodeSymbol$Kind) != null ? System.CompatibilityExtensions.ToLowerInvariant($t) : null;
            }
        },
        methods: {
            Render: function (view, parentElement) { }
        }
    });

    Bridge.define("Codex.View.TextSpanSearchResultViewModel", {
        inherits: [Codex.View.FileItemResultViewModel],
        props: {
            Command: null,
            SearchResult: null,
            LineNumber: 0,
            PrefixText: null,
            ContentText: null,
            SuffixText: null
        },
        ctors: {
            $ctor1: function (result) {
                this.$initialize();
                Codex.View.FileItemResultViewModel.ctor.call(this);
                this.Command = Codex.View.Commands.GoToSpan;
                this.SearchResult = result;
                var referringSpan = result.Codex$Sdk$Search$ITextLineSpanResult$TextSpan;
                this.LineNumber = referringSpan.Codex$ILineSpan$LineNumber;
                var lineSpanText = referringSpan.Codex$ITextLineSpan$LineSpanText;
                if (lineSpanText != null) {
                    this.PrefixText = lineSpanText.substr(0, referringSpan.Codex$ILineSpan$LineSpanStart);
                    this.ContentText = lineSpanText.substr(referringSpan.Codex$ILineSpan$LineSpanStart, referringSpan.Codex$ISpan$Length);
                    this.SuffixText = lineSpanText.substr(((referringSpan.Codex$ILineSpan$LineSpanStart + referringSpan.Codex$ISpan$Length) | 0));
                }
            },
            ctor: function (result) {
                this.$initialize();
                Codex.View.FileItemResultViewModel.ctor.call(this);
                this.Command = Codex.View.Commands.GoToReference;
                this.SearchResult = result;
                var referringSpan = result.Codex$Sdk$Search$IReferenceSearchResult$ReferenceSpan;
                this.LineNumber = referringSpan.Codex$ILineSpan$LineNumber;
                var lineSpanText = referringSpan.Codex$ITextLineSpan$LineSpanText;
                if (lineSpanText != null) {
                    this.PrefixText = lineSpanText.substr(0, referringSpan.Codex$ILineSpan$LineSpanStart);
                    this.ContentText = lineSpanText.substr(referringSpan.Codex$ILineSpan$LineSpanStart, referringSpan.Codex$ISpan$Length);
                    this.SuffixText = lineSpanText.substr(((referringSpan.Codex$ILineSpan$LineSpanStart + referringSpan.Codex$ISpan$Length) | 0));
                }
            }
        },
        methods: {
            Render: function (view, parentElement) { }
        }
    });

    Bridge.define("Codex.IBoundSourceInfo", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISymbolSpan", {
        inherits: [Codex.ITextLineSpan],
        $kind: "interface"
    });

    /**
     * NOTE: Do not set {@link }
     *
     * @abstract
     * @public
     * @class Codex.IProjectFileLink
     * @implements  Codex.IProjectFileScopeEntity
     */
    Bridge.define("Codex.IProjectFileLink", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSearchModel", {
        inherits: [Codex.IProjectFileScopeEntity,Codex.ISearchEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ISourceFileInfo", {
        inherits: [Codex.IRepoFileScopeEntity,Codex.ISourceControlFileInfo,Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.ProjectScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.IProjectScopeEntity],
        fields: {
            m_ProjectId: null
        },
        props: {
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectScopeEntity
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: ["ProjectId", "Codex$IProjectScopeEntity$ProjectId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectFileScopeEntity", {
        inherits: [Codex.EntityBase,Codex.IProjectFileScopeEntity],
        fields: {
            m_ProjectRelativePath: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileScopeEntity
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$2(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$3(Codex.ObjectModel.ProjectFileScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$1(Codex.ObjectModel.ProjectFileScopeEntity, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.BoundSourceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IBoundSourceSearchModel],
        fields: {
            m_TextUid: null,
            m_SourceInfo: null,
            m_BindingInfo: null,
            m_CompressedClassifications: null,
            m_CompressedReferences: null,
            m_SourceControlInfo: null
        },
        props: {
            /**
             * The unique identifier of the associated {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function TextUid
             * @type string
             */
            TextUid: {
                get: function () {
                    return this.m_TextUid;
                },
                set: function (value) {
                    this.m_TextUid = value;
                }
            },
            /**
             * Information about the source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$IBoundSourceSearchModel$SourceInfo
             * @type Codex.ISourceFileInfo
             */
            Codex$IBoundSourceSearchModel$SourceInfo: {
                get: function () {
                    return this.SourceInfo;
                }
            },
            /**
             * Information about the source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function SourceInfo
             * @type Codex.ObjectModel.SourceFileInfo
             */
            SourceInfo: {
                get: function () {
                    return this.m_SourceInfo;
                },
                set: function (value) {
                    this.m_SourceInfo = value;
                }
            },
            /**
             * The binding info
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$IBoundSourceSearchModel$BindingInfo
             * @type Codex.IBoundSourceInfo
             */
            Codex$IBoundSourceSearchModel$BindingInfo: {
                get: function () {
                    return this.BindingInfo;
                }
            },
            /**
             * The binding info
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function BindingInfo
             * @type Codex.ObjectModel.BoundSourceInfo
             */
            BindingInfo: {
                get: function () {
                    return this.m_BindingInfo;
                },
                set: function (value) {
                    this.m_BindingInfo = value;
                }
            },
            /**
             * Compressed list of classification spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function CompressedClassifications
             * @type Codex.IClassificationList
             */
            CompressedClassifications: {
                get: function () {
                    return this.m_CompressedClassifications;
                },
                set: function (value) {
                    this.m_CompressedClassifications = value;
                }
            },
            /**
             * Compressed list of reference spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function CompressedReferences
             * @type Codex.IReferenceList
             */
            CompressedReferences: {
                get: function () {
                    return this.m_CompressedReferences;
                },
                set: function (value) {
                    this.m_CompressedReferences = value;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceSearchModel
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        alias: [
            "TextUid", "Codex$IBoundSourceSearchModel$TextUid",
            "CompressedClassifications", "Codex$IBoundSourceSearchModel$CompressedClassifications",
            "CompressedReferences", "Codex$IBoundSourceSearchModel$CompressedReferences"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.BoundSourceSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.BoundSourceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_TextUid = value.Codex$IBoundSourceSearchModel$TextUid;
                this.m_SourceInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFileInfo, Bridge.global.Codex.ObjectModel.SourceFileInfo, this.SourceInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f2);
                ;
                this.m_BindingInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.BoundSourceInfo, Bridge.global.Codex.ObjectModel.BoundSourceInfo, this.BindingInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f3);
                ;
                this.m_CompressedClassifications = value.Codex$IBoundSourceSearchModel$CompressedClassifications;
                this.m_CompressedReferences = value.Codex$IBoundSourceSearchModel$CompressedReferences;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.BoundSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            },
            OnDeserializedCore: function () {
                if (this.CompressedClassifications != null) {
                    this.BindingInfo.Classifications = this.CompressedClassifications.Codex$IClassificationList$ToList();
                }

                if (this.CompressedReferences != null) {
                    this.BindingInfo.References = this.CompressedReferences.Codex$IReferenceList$ToList();
                }

                Codex.ObjectModel.SearchEntity.prototype.OnDeserializedCore.call(this);
            },
            OnSerializingCore: function () {
                Codex.ObjectModel.SearchEntity.prototype.OnSerializingCore.call(this);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.SourceFileInfo.ctor().CopyFrom$5(Codex.ObjectModel.SourceFileInfo, v);
        },
        f3: function (v) {
            return new Codex.ObjectModel.BoundSourceInfo.ctor().CopyFrom$4(Codex.ObjectModel.BoundSourceInfo, v);
        }
    });

    /**
     * Defines a classified span of text
     *
     * @public
     * @class Codex.ObjectModel.ClassificationSpan
     * @augments Codex.ObjectModel.Span
     * @implements  Codex.IClassificationSpan
     */
    Bridge.define("Codex.ObjectModel.ClassificationSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.IClassificationSpan],
        fields: {
            m_DefaultClassificationColor: 0,
            m_Classification: null,
            m_LocalGroupId: 0
        },
        props: {
            /**
             * The default classification color for the span. This is used for
             contexts where a mapping from classification id to color is not
             available.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function DefaultClassificationColor
             * @type number
             */
            DefaultClassificationColor: {
                get: function () {
                    return this.m_DefaultClassificationColor;
                },
                set: function (value) {
                    this.m_DefaultClassificationColor = value;
                }
            },
            /**
             * The classification identifier for the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function Classification
             * @type string
             */
            Classification: {
                get: function () {
                    return this.m_Classification;
                },
                set: function (value) {
                    this.m_Classification = value;
                }
            },
            /**
             * The identifier to the local group of spans which refer to the same common symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ClassificationSpan
             * @function LocalGroupId
             * @type number
             */
            LocalGroupId: {
                get: function () {
                    return this.m_LocalGroupId;
                },
                set: function (value) {
                    this.m_LocalGroupId = value;
                }
            }
        },
        alias: [
            "DefaultClassificationColor", "Codex$IClassificationSpan$DefaultClassificationColor",
            "Classification", "Codex$IClassificationSpan$Classification",
            "LocalGroupId", "Codex$IClassificationSpan$LocalGroupId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ClassificationSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DefaultClassificationColor = value.Codex$IClassificationSpan$DefaultClassificationColor;
                this.m_Classification = value.Codex$IClassificationSpan$Classification;
                this.m_LocalGroupId = value.Codex$IClassificationSpan$LocalGroupId;
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () {
                this.DefaultClassificationColor = -1;
                Codex.ObjectModel.Span.prototype.Initialize.call(this);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.CommitScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.ICommitScopeEntity],
        fields: {
            m_CommitId: null
        },
        props: {
            /**
             * The unique identifier for this commit/changeset in version control
             (i.e. git commit hash or TFS changeset number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitScopeEntity
             * @function CommitId
             * @type string
             */
            CommitId: {
                get: function () {
                    return this.m_CommitId;
                },
                set: function (value) {
                    this.m_CommitId = value;
                }
            }
        },
        alias: ["CommitId", "Codex$ICommitScopeEntity$CommitId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_CommitId = value.Codex$ICommitScopeEntity$CommitId;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * Represents a changed file in a commit
     *
     * @public
     * @class Codex.ObjectModel.CommitChangedFile
     * @augments Codex.ObjectModel.CommitFileLink
     * @implements  Codex.ICommitChangedFile
     */
    Bridge.define("Codex.ObjectModel.CommitChangedFile", {
        inherits: [Codex.ObjectModel.CommitFileLink,Codex.ICommitChangedFile],
        fields: {
            m_ChangeKind: 0,
            m_OriginalFilePath: null
        },
        props: {
            /**
             * The type of change applied to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitChangedFile
             * @function ChangeKind
             * @type Codex.FileChangeKind
             */
            ChangeKind: {
                get: function () {
                    return this.m_ChangeKind;
                },
                set: function (value) {
                    this.m_ChangeKind = value;
                }
            },
            /**
             * For a renamed file, the path to the file prior to the rename
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitChangedFile
             * @function OriginalFilePath
             * @type string
             */
            OriginalFilePath: {
                get: function () {
                    return this.m_OriginalFilePath;
                },
                set: function (value) {
                    this.m_OriginalFilePath = value;
                }
            }
        },
        alias: [
            "ChangeKind", "Codex$ICommitChangedFile$ChangeKind",
            "OriginalFilePath", "Codex$ICommitChangedFile$OriginalFilePath"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitChangedFile, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitFileLink.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ChangeKind = value.Codex$ICommitChangedFile$ChangeKind;
                this.m_OriginalFilePath = value.Codex$ICommitChangedFile$OriginalFilePath;
                Codex.ObjectModel.CommitFileLink.prototype.CopyFrom.call(this, Codex.ObjectModel.CommitFileLink, Bridge.cast((value), Codex.ICommitFileLink));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.RepoFileScopeEntity", {
        inherits: [Codex.ObjectModel.RepoScopeEntity,Codex.IRepoFileScopeEntity],
        fields: {
            m_RepoRelativePath: null
        },
        props: {
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RepoFileScopeEntity
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            }
        },
        alias: ["RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RepoFileScopeEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                Codex.ObjectModel.RepoScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.RepoScopeEntity, Bridge.cast((value), Codex.IRepoScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * The set of files present in the repository at a given commit.
     *
     * @public
     * @class Codex.ObjectModel.CommitFilesSearchModel
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.ICommitFilesSearchModel
     */
    Bridge.define("Codex.ObjectModel.CommitFilesSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ICommitFilesSearchModel],
        fields: {
            m_CommitFiles: null,
            m_CommitId: null,
            m_RepositoryName: null
        },
        props: {
            Codex$ICommitFilesSearchModel$CommitFiles: {
                get: function () {
                    return this.CommitFiles;
                }
            },
            CommitFiles: {
                get: function () {
                    return this.m_CommitFiles;
                },
                set: function (value) {
                    this.m_CommitFiles = value;
                }
            },
            /**
             * The unique identifier for this commit/changeset in version control
             (i.e. git commit hash or TFS changeset number)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesSearchModel
             * @function CommitId
             * @type string
             */
            CommitId: {
                get: function () {
                    return this.m_CommitId;
                },
                set: function (value) {
                    this.m_CommitId = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: [
            "CommitId", "Codex$ICommitScopeEntity$CommitId",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"
        ],
        ctors: {
            init: function () {
                this.m_CommitFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitFilesSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.CommitFilesSearchModel, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.CommitFilesSearchModel, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_CommitId = value.Codex$ICommitScopeEntity$CommitId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_CommitFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommitFilesSearchModel$CommitFiles).select($asm.$.Codex.ObjectModel.CommitFilesSearchModel.f2));
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_CommitId = Bridge.cast((value), Codex.ICommitScopeEntity).Codex$ICommitScopeEntity$CommitId;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitFilesSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitFilesSearchModel, {
        f1: function (_v) {
            return new Codex.ObjectModel.CommitFileLink.ctor().CopyFrom(Codex.ObjectModel.CommitFileLink, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICommitFileLink, Bridge.global.Codex.ObjectModel.CommitFileLink, v, $asm.$.Codex.ObjectModel.CommitFilesSearchModel.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.CommitSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ICommitSearchModel],
        fields: {
            m_Commit: null
        },
        props: {
            Codex$ICommitSearchModel$Commit: {
                get: function () {
                    return this.Commit;
                }
            },
            Commit: {
                get: function () {
                    return this.m_Commit;
                },
                set: function (value) {
                    this.m_Commit = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.CommitSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Commit = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Commit, Bridge.global.Codex.ObjectModel.Commit, this.Commit, $asm.$.Codex.ObjectModel.CommitSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.Commit.ctor().CopyFrom$2(Codex.ObjectModel.Commit, v);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IDefinitionSearchModel],
        fields: {
            m_Definition: null,
            m_Keywords: null
        },
        props: {
            Codex$IDefinitionSearchModel$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            },
            /**
             * Keywords are additional terms which can be used to find a given symbol.
             NOTE: Keywords can only be used to select from symbols which have
             a primary term match
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSearchModel
             * @function Codex$IDefinitionSearchModel$Keywords
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDefinitionSearchModel$Keywords: {
                get: function () {
                    return this.Keywords;
                }
            },
            /**
             * Keywords are additional terms which can be used to find a given symbol.
             NOTE: Keywords can only be used to select from symbols which have
             a primary term match
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSearchModel
             * @function Keywords
             * @type System.Collections.Generic.List$1
             */
            Keywords: {
                get: function () {
                    return this.m_Keywords;
                },
                set: function (value) {
                    this.m_Keywords = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Keywords = new (System.Collections.Generic.List$1(System.String)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.DefinitionSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Definition = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, this.Definition, $asm.$.Codex.ObjectModel.DefinitionSearchModel.f1);
                ;
                this.m_Keywords = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$IDefinitionSearchModel$Keywords);
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.IDefinitionSpan],
        fields: {
            m_Definition: null,
            m_Parameters: null
        },
        props: {
            /**
             * The definition symbol referred to by the span
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Codex$IDefinitionSpan$Definition
             * @type Codex.IDefinitionSymbol
             */
            Codex$IDefinitionSpan$Definition: {
                get: function () {
                    return this.Definition;
                }
            },
            /**
             * The definition symbol referred to by the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Definition
             * @type Codex.ObjectModel.DefinitionSymbol
             */
            Definition: {
                get: function () {
                    return this.m_Definition;
                },
                set: function (value) {
                    this.m_Definition = value;
                }
            },
            /**
             * Gets the definitions for parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Codex$IDefinitionSpan$Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IDefinitionSpan$Parameters: {
                get: function () {
                    return this.Parameters;
                }
            },
            /**
             * Gets the definitions for parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSpan
             * @function Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Parameters: {
                get: function () {
                    return this.m_Parameters;
                },
                set: function (value) {
                    this.m_Parameters = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Parameters = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ParameterDefinitionSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.DefinitionSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Definition = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DefinitionSymbol, Bridge.global.Codex.ObjectModel.DefinitionSymbol, this.Definition, $asm.$.Codex.ObjectModel.DefinitionSpan.f1);
                ;
                this.m_Parameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterDefinitionSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IDefinitionSpan$Parameters).select($asm.$.Codex.ObjectModel.DefinitionSpan.f3));
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSpan", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSpan, {
        f1: function (v) {
            return new Codex.ObjectModel.DefinitionSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.ParameterDefinitionSpan.ctor().CopyFrom$2(Codex.ObjectModel.ParameterDefinitionSpan, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IParameterDefinitionSpan, Bridge.global.Codex.ObjectModel.ParameterDefinitionSpan, v, $asm.$.Codex.ObjectModel.DefinitionSpan.f2);
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSymbol", {
        inherits: [Codex.ObjectModel.Symbol,Codex.IReferenceSymbol],
        fields: {
            m_ReferenceKind: null,
            m_IsImplicitlyDeclared: false,
            m_ExcludeFromDefaultSearch: false,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The kind of reference. This is used to group references.
             (i.e. for C#(aka .NET) MethodOverride, InterfaceMemberImplementation, InterfaceImplementation, etc.)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ReferenceKind
             * @type string
             */
            ReferenceKind: {
                get: function () {
                    return this.m_ReferenceKind;
                },
                set: function (value) {
                    this.m_ReferenceKind = value;
                }
            },
            /**
             * Indicates the corresponding definition is implicitly declared and therefore this should not be
             used for find all references search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function IsImplicitlyDeclared
             * @type boolean
             */
            IsImplicitlyDeclared: {
                get: function () {
                    return this.m_IsImplicitlyDeclared;
                },
                set: function (value) {
                    this.m_IsImplicitlyDeclared = value;
                }
            },
            /**
             * Indicates if the symbol should be excluded from the definition/find all references search (by default).
             Symbol will only be included if kind is explicitly specified
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ExcludeFromDefaultSearch
             * @type boolean
             */
            ExcludeFromDefaultSearch: {
                get: function () {
                    return this.m_ExcludeFromDefaultSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromDefaultSearch = value;
                }
            },
            /**
             * Indicates if the symbol should NEVER be included in the definition/find all references search.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSymbol
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "ReferenceKind", "Codex$IReferenceSymbol$ReferenceKind",
            "IsImplicitlyDeclared", "Codex$IReferenceSymbol$IsImplicitlyDeclared",
            "ExcludeFromDefaultSearch", "Codex$IReferenceSymbol$ExcludeFromDefaultSearch",
            "ExcludeFromSearch", "Codex$IReferenceSymbol$ExcludeFromSearch"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Symbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Symbol.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Symbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_ReferenceKind = value.Codex$IReferenceSymbol$ReferenceKind;
                this.m_IsImplicitlyDeclared = value.Codex$IReferenceSymbol$IsImplicitlyDeclared;
                this.m_ExcludeFromDefaultSearch = value.Codex$IReferenceSymbol$ExcludeFromDefaultSearch;
                this.m_ExcludeFromSearch = value.Codex$IReferenceSymbol$ExcludeFromSearch;
                Codex.ObjectModel.Symbol.prototype.CopyFrom.call(this, Codex.ObjectModel.Symbol, Bridge.cast((value), Codex.ICodeSymbol));
                return Bridge.cast((this), TTarget);
            },
            toString: function () {
                return (this.ReferenceKind || "") + " " + (Codex.ObjectModel.Symbol.prototype.toString.call(this) || "");
            }
        }
    });

    Bridge.define("Codex.ObjectModel.LanguageSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ILanguageSearchModel],
        fields: {
            m_Language: null
        },
        props: {
            Codex$ILanguageSearchModel$Language: {
                get: function () {
                    return this.Language;
                }
            },
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.LanguageSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Language = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.LanguageInfo, Bridge.global.Codex.ObjectModel.LanguageInfo, this.Language, $asm.$.Codex.ObjectModel.LanguageSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.LanguageSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.LanguageSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.LanguageInfo.ctor().CopyFrom(Codex.ObjectModel.LanguageInfo, v);
        }
    });

    Bridge.define("Codex.ObjectModel.LineSpan", {
        inherits: [Codex.ObjectModel.Span,Codex.ILineSpan],
        fields: {
            m_LineIndex: null,
            m_LineNumber: null,
            m_LineSpanStart: 0,
            m_LineOffset: 0
        },
        props: {
            /**
             * The 0-based index of the line containing the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineIndex
             * @type number
             */
            LineIndex: {
                get: function () {
                    return this.CoerceLineIndex(this.m_LineIndex);
                },
                set: function (value) {
                    this.m_LineIndex = value;
                }
            },
            /**
             * The 1-based line number of the line containing the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineNumber
             * @type number
             */
            LineNumber: {
                get: function () {
                    return this.CoerceLineNumber(this.m_LineNumber);
                },
                set: function (value) {
                    this.m_LineNumber = value;
                }
            },
            /**
             * The character position where the span starts in the line text
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineSpanStart
             * @type number
             */
            LineSpanStart: {
                get: function () {
                    return this.m_LineSpanStart;
                },
                set: function (value) {
                    this.m_LineSpanStart = value;
                }
            },
            /**
             * If positive, the offset of the line span from the beginning of the line
             If negative, the offset of the linespan from the end of the next line
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.LineSpan
             * @function LineOffset
             * @type number
             */
            LineOffset: {
                get: function () {
                    return this.m_LineOffset;
                },
                set: function (value) {
                    this.m_LineOffset = value;
                }
            }
        },
        alias: [
            "LineIndex", "Codex$ILineSpan$LineIndex",
            "LineNumber", "Codex$ILineSpan$LineNumber",
            "LineSpanStart", "Codex$ILineSpan$LineSpanStart",
            "LineOffset", "Codex$ILineSpan$LineOffset"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.LineSpan, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.Span.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_LineIndex = value.Codex$ILineSpan$LineIndex;
                this.m_LineNumber = value.Codex$ILineSpan$LineNumber;
                this.m_LineSpanStart = value.Codex$ILineSpan$LineSpanStart;
                this.m_LineOffset = value.Codex$ILineSpan$LineOffset;
                Codex.ObjectModel.Span.prototype.CopyFrom.call(this, Codex.ObjectModel.Span, Bridge.cast((value), Codex.ISpan));
                return Bridge.cast((this), TTarget);
            },
            CoerceLineIndex: function (value) {
                if (value == null || (System.Nullable.lte(value, 0) && this.m_LineNumber != null)) {
                    if (this.m_LineNumber != null) {
                        // Line number is 1-based whereas this value is 0-based
                        return ((System.Nullable.getValue(this.m_LineNumber) - 1) | 0);
                    } else {
                        return 0;
                    }
                }

                return System.Nullable.getValue(value);
            },
            CoerceLineNumber: function (value) {
                if (value == null || (System.Nullable.eq(value, 1) && this.m_LineIndex != null)) {
                    if (this.m_LineIndex != null) {
                        // Line index is 0-based whereas this value is 1-based
                        return ((System.Nullable.getValue(this.m_LineIndex) + 1) | 0);
                    } else {
                        return 1;
                    }
                }

                return System.Nullable.getValue(value);
            },
            OnDeserializedCore: function () {
                Codex.ObjectModel.Span.prototype.OnDeserializedCore.call(this);
            },
            OnSerializingCore: function () {
                Codex.ObjectModel.Span.prototype.OnSerializingCore.call(this);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectReferenceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IProjectReferenceSearchModel],
        fields: {
            m_ProjectReference: null,
            m_ProjectId: null,
            m_RepositoryName: null
        },
        props: {
            Codex$IProjectReferenceSearchModel$ProjectReference: {
                get: function () {
                    return this.ProjectReference;
                }
            },
            ProjectReference: {
                get: function () {
                    return this.m_ProjectReference;
                },
                set: function (value) {
                    this.m_ProjectReference = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectReferenceSearchModel
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectReferenceSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            }
        },
        alias: [
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.ProjectReferenceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectReference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.ReferencedProject, Bridge.global.Codex.ObjectModel.ReferencedProject, this.ProjectReference, $asm.$.Codex.ObjectModel.ProjectReferenceSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ProjectReferenceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ProjectReferenceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferencedProject.ctor().CopyFrom(Codex.ObjectModel.ReferencedProject, v);
        }
    });

    Bridge.define("Codex.ObjectModel.ProjectSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IProjectSearchModel],
        fields: {
            m_Project: null
        },
        props: {
            Codex$IProjectSearchModel$Project: {
                get: function () {
                    return this.Project;
                }
            },
            Project: {
                get: function () {
                    return this.m_Project;
                },
                set: function (value) {
                    this.m_Project = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ProjectSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Project = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.AnalyzedProject, Bridge.global.Codex.ObjectModel.AnalyzedProject, this.Project, $asm.$.Codex.ObjectModel.ProjectSearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ProjectSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ProjectSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.AnalyzedProject.ctor().CopyFrom$2(Codex.ObjectModel.AnalyzedProject, v);
        }
    });

    Bridge.define("Codex.ObjectModel.PropertySearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IPropertySearchModel],
        fields: {
            m_Key: null,
            m_Value: null,
            m_OwnerId: null
        },
        props: {
            /**
             * The key of the property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function Key
             * @type string
             */
            Key: {
                get: function () {
                    return this.m_Key;
                },
                set: function (value) {
                    this.m_Key = value;
                }
            },
            /**
             * The value of the property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function Value
             * @type string
             */
            Value: {
                get: function () {
                    return this.m_Value;
                },
                set: function (value) {
                    this.m_Value = value;
                }
            },
            /**
             * The identifier of the object owning this property
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.PropertySearchModel
             * @function OwnerId
             * @type string
             */
            OwnerId: {
                get: function () {
                    return this.m_OwnerId;
                },
                set: function (value) {
                    this.m_OwnerId = value;
                }
            }
        },
        alias: [
            "Key", "Codex$IPropertySearchModel$Key",
            "Value", "Codex$IPropertySearchModel$Value",
            "OwnerId", "Codex$IPropertySearchModel$OwnerId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.PropertySearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Key = value.Codex$IPropertySearchModel$Key;
                this.m_Value = value.Codex$IPropertySearchModel$Value;
                this.m_OwnerId = value.Codex$IPropertySearchModel$OwnerId;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.IReferenceSearchResult", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    /**
     * In order to compute a stable integral id for each entity. This type is used to store into a 'follow' index which
     stores entities of this type using the {@link } of the corresponding search entity. Then the
     sequence number assigned by ElasticSearch is used as the shard stable id ({@link })
     for the entity. This approach is used in order to ensure that the stable id appears as an explicit field in the document rather
     which allows configuration of how the field is indexed (not true for sequence number field without code changes to ES).
     *
     * @public
     * @class Codex.ObjectModel.RegisteredEntity
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.IRegisteredEntity
     */
    Bridge.define("Codex.ObjectModel.RegisteredEntity", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IRegisteredEntity],
        fields: {
            m_DateAdded: null
        },
        props: {
            /**
             * The date in which the entity was registered (i.e. added to the store)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.RegisteredEntity
             * @function DateAdded
             * @type System.DateTime
             */
            DateAdded: {
                get: function () {
                    return this.m_DateAdded;
                },
                set: function (value) {
                    this.m_DateAdded = value;
                }
            }
        },
        alias: ["DateAdded", "Codex$IRegisteredEntity$DateAdded"],
        ctors: {
            init: function () {
                this.m_DateAdded = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RegisteredEntity, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DateAdded = value.Codex$IRegisteredEntity$DateAdded;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.RepositorySearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IRepositorySearchModel],
        fields: {
            m_Repository: null
        },
        props: {
            Codex$IRepositorySearchModel$Repository: {
                get: function () {
                    return this.Repository;
                }
            },
            Repository: {
                get: function () {
                    return this.m_Repository;
                },
                set: function (value) {
                    this.m_Repository = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.RepositorySearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Repository = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.Repository, Bridge.global.Codex.ObjectModel.Repository, this.Repository, $asm.$.Codex.ObjectModel.RepositorySearchModel.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.RepositorySearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.RepositorySearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.Repository.ctor().CopyFrom(Codex.ObjectModel.Repository, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SourceSearchModelBase", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ISourceSearchModelBase],
        fields: {
            m_SourceControlInfo: null
        },
        props: {
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceSearchModelBase
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceSearchModelBase
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.SourceSearchModelBase, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.SourceSearchModelBase.f1);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SourceSearchModelBase", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SourceSearchModelBase, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, v);
        }
    });

    /**
     * Defines a stored filter which matches entities in a particular index shard in a stable manner
     *
     * @public
     * @class Codex.ObjectModel.StoredFilter
     * @augments Codex.ObjectModel.SearchEntity
     * @implements  Codex.IStoredFilter
     */
    Bridge.define("Codex.ObjectModel.StoredFilter", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IStoredFilter],
        fields: {
            m_DateUpdated: null,
            m_IndexName: null,
            m_Shard: 0,
            m_StableIds: null,
            m_BaseUids: null,
            m_UnionFilters: null,
            m_Filter: null,
            m_FilterHash: null,
            m_FilterCount: 0
        },
        props: {
            /**
             * The time of the last update to the stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function DateUpdated
             * @type System.DateTime
             */
            DateUpdated: {
                get: function () {
                    return this.m_DateUpdated;
                },
                set: function (value) {
                    this.m_DateUpdated = value;
                }
            },
            /**
             * The name of the index to which the stored filter applies
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function IndexName
             * @type string
             */
            IndexName: {
                get: function () {
                    return this.m_IndexName;
                },
                set: function (value) {
                    this.m_IndexName = value;
                }
            },
            /**
             * The shard to which the stored filter applies
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Shard
             * @type number
             */
            Shard: {
                get: function () {
                    return this.m_Shard;
                },
                set: function (value) {
                    this.m_Shard = value;
                }
            },
            /**
             * List of stable ids to include in the stored filter.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$StableIds
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$StableIds: {
                get: function () {
                    return this.StableIds;
                }
            },
            /**
             * List of stable ids to include in the stored filter.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function StableIds
             * @type System.Collections.Generic.List$1
             */
            StableIds: {
                get: function () {
                    return this.m_StableIds;
                },
                set: function (value) {
                    this.m_StableIds = value;
                }
            },
            /**
             * List of uids to for stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$BaseUids
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$BaseUids: {
                get: function () {
                    return this.BaseUids;
                }
            },
            /**
             * List of uids to for stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function BaseUids
             * @type System.Collections.Generic.List$1
             */
            BaseUids: {
                get: function () {
                    return this.m_BaseUids;
                },
                set: function (value) {
                    this.m_BaseUids = value;
                }
            },
            /**
             * List of stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Codex$IStoredFilter$UnionFilters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IStoredFilter$UnionFilters: {
                get: function () {
                    return this.UnionFilters;
                }
            },
            /**
             * List of stored filters which will be unioned with the given stored filter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function UnionFilters
             * @type System.Collections.Generic.List$1
             */
            UnionFilters: {
                get: function () {
                    return this.m_UnionFilters;
                },
                set: function (value) {
                    this.m_UnionFilters = value;
                }
            },
            /**
             * The stored filter bit set which matches the stored filter documents
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function Filter
             * @type Array.<number>
             */
            Filter: {
                get: function () {
                    return this.m_Filter;
                },
                set: function (value) {
                    this.m_Filter = value;
                }
            },
            /**
             * The hash of {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function FilterHash
             * @type string
             */
            FilterHash: {
                get: function () {
                    return this.m_FilterHash;
                },
                set: function (value) {
                    this.m_FilterHash = value;
                }
            },
            /**
             * The count of elements matched by {@link }
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.StoredFilter
             * @function FilterCount
             * @type number
             */
            FilterCount: {
                get: function () {
                    return this.m_FilterCount;
                },
                set: function (value) {
                    this.m_FilterCount = value;
                }
            }
        },
        alias: [
            "DateUpdated", "Codex$IStoredFilter$DateUpdated",
            "IndexName", "Codex$IStoredFilter$IndexName",
            "Shard", "Codex$IStoredFilter$Shard",
            "Filter", "Codex$IStoredFilter$Filter",
            "FilterHash", "Codex$IStoredFilter$FilterHash",
            "FilterCount", "Codex$IStoredFilter$FilterCount"
        ],
        ctors: {
            init: function () {
                this.m_DateUpdated = System.DateTime.getDefaultValue();
                this.m_StableIds = new (System.Collections.Generic.List$1(System.Int64)).ctor();
                this.m_BaseUids = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.m_UnionFilters = new (System.Collections.Generic.List$1(System.Array.type(System.Byte))).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.StoredFilter, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_DateUpdated = value.Codex$IStoredFilter$DateUpdated;
                this.m_IndexName = value.Codex$IStoredFilter$IndexName;
                this.m_Shard = value.Codex$IStoredFilter$Shard;
                this.m_StableIds = new (System.Collections.Generic.List$1(System.Int64)).$ctor1(value.Codex$IStoredFilter$StableIds);
                this.m_BaseUids = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$IStoredFilter$BaseUids);
                this.m_UnionFilters = new (System.Collections.Generic.List$1(System.Array.type(System.Byte))).$ctor1(value.Codex$IStoredFilter$UnionFilters);
                this.m_Filter = value.Codex$IStoredFilter$Filter;
                this.m_FilterHash = value.Codex$IStoredFilter$FilterHash;
                this.m_FilterCount = value.Codex$IStoredFilter$FilterCount;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.Sdk.Search.ITextLineSpanResult", {
        inherits: [Codex.IProjectFileScopeEntity],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.TextSourceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.ITextSourceSearchModel],
        fields: {
            m_File: null,
            m_SourceControlInfo: null
        },
        props: {
            Codex$ITextSourceSearchModel$File: {
                get: function () {
                    return this.File;
                }
            },
            File: {
                get: function () {
                    return this.m_File;
                },
                set: function (value) {
                    this.m_File = value;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.TextSourceSearchModel
             * @function Codex$ISourceSearchModelBase$SourceControlInfo
             * @type Codex.ISourceControlFileInfo
             */
            Codex$ISourceSearchModelBase$SourceControlInfo: {
                get: function () {
                    return this.SourceControlInfo;
                }
            },
            /**
             * Information about the source file from source control provider (may be null)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TextSourceSearchModel
             * @function SourceControlInfo
             * @type Codex.ObjectModel.SourceControlFileInfo
             */
            SourceControlInfo: {
                get: function () {
                    return this.m_SourceControlInfo;
                },
                set: function (value) {
                    this.m_SourceControlInfo = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.TextSourceSearchModel, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.TextSourceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.TextSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_File = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFile, Bridge.global.Codex.ObjectModel.SourceFile, this.File, $asm.$.Codex.ObjectModel.TextSourceSearchModel.f2);
                ;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_SourceControlInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceControlFileInfo, Bridge.global.Codex.ObjectModel.SourceControlFileInfo, this.SourceControlInfo, $asm.$.Codex.ObjectModel.TextSourceSearchModel.f1);
                ;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.TextSourceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.TextSourceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceControlFileInfo.ctor().CopyFrom(Codex.ObjectModel.SourceControlFileInfo, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.SourceFile.ctor().CopyFrom(Codex.ObjectModel.SourceFile, v);
        }
    });

    /**
     * Documentation for typed parameter
     *
     * @public
     * @class Codex.ObjectModel.TypedParameterDocumentation
     * @augments Codex.ObjectModel.ParameterDocumentation
     * @implements  Codex.ITypedParameterDocumentation
     */
    Bridge.define("Codex.ObjectModel.TypedParameterDocumentation", {
        inherits: [Codex.ObjectModel.ParameterDocumentation,Codex.ITypedParameterDocumentation],
        fields: {
            m_Type: null
        },
        props: {
            /**
             * The type of the parameter
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.TypedParameterDocumentation
             * @function Codex$ITypedParameterDocumentation$Type
             * @type Codex.IDocumentationReferenceSymbol
             */
            Codex$ITypedParameterDocumentation$Type: {
                get: function () {
                    return this.Type;
                }
            },
            /**
             * The type of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TypedParameterDocumentation
             * @function Type
             * @type Codex.ObjectModel.DocumentationReferenceSymbol
             */
            Type: {
                get: function () {
                    return this.m_Type;
                },
                set: function (value) {
                    this.m_Type = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.TypedParameterDocumentation, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ParameterDocumentation.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$1: function (TTarget, value) {
                this.m_Type = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DocumentationReferenceSymbol, Bridge.global.Codex.ObjectModel.DocumentationReferenceSymbol, this.Type, $asm.$.Codex.ObjectModel.TypedParameterDocumentation.f1);
                ;
                Codex.ObjectModel.ParameterDocumentation.prototype.CopyFrom.call(this, Codex.ObjectModel.ParameterDocumentation, Bridge.cast((value), Codex.IParameterDocumentation));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.TypedParameterDocumentation", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.TypedParameterDocumentation, {
        f1: function (v) {
            return new Codex.ObjectModel.DocumentationReferenceSymbol.ctor().CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, v);
        }
    });

    Bridge.define("Codex.Sdk.Search.FindAllReferencesArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.FindDefinitionArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    Bridge.define("Codex.Sdk.Search.FindDefinitionLocationArguments", {
        inherits: [Codex.Sdk.Search.FindSymbolArgumentsBase]
    });

    /**
     * Represents a source file with associated semantic bindings
     *
     * @abstract
     * @public
     * @class Codex.IBoundSourceFile
     * @implements  Codex.IBoundSourceInfo
     */
    Bridge.define("Codex.IBoundSourceFile", {
        inherits: [Codex.IBoundSourceInfo],
        $kind: "interface"
    });

    /**
     * A specialized reference span referring to a parameter to a method/property
     *
     * @abstract
     * @public
     * @class Codex.IParameterReferenceSpan
     * @implements  Codex.ISymbolSpan
     */
    Bridge.define("Codex.IParameterReferenceSpan", {
        inherits: [Codex.ISymbolSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.IReferenceSpan", {
        inherits: [Codex.ISymbolSpan],
        $kind: "interface"
    });

    Bridge.define("Codex.ObjectModel.AnalyzedProject", {
        inherits: [Codex.ObjectModel.ProjectScopeEntity,Codex.IProject],
        fields: {
            m_ProjectKind: null,
            m_Files: null,
            m_ProjectReferences: null
        },
        props: {
            /**
             * The project kind (see {@link })
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function ProjectKind
             * @type string
             */
            ProjectKind: {
                get: function () {
                    return this.m_ProjectKind;
                },
                set: function (value) {
                    this.m_ProjectKind = value;
                }
            },
            /**
             * References to files in the project
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Codex$IProject$Files
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IProject$Files: {
                get: function () {
                    return this.Files;
                }
            },
            /**
             * References to files in the project
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Files
             * @type System.Collections.Generic.List$1
             */
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            },
            /**
             * Descriptions of referenced projects and used definitions from the projects
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function Codex$IProject$ProjectReferences
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IProject$ProjectReferences: {
                get: function () {
                    return this.ProjectReferences;
                }
            },
            /**
             * Descriptions of referenced projects and used definitions from the projects
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.AnalyzedProject
             * @function ProjectReferences
             * @type System.Collections.Generic.List$1
             */
            ProjectReferences: {
                get: function () {
                    return this.m_ProjectReferences;
                },
                set: function (value) {
                    this.m_ProjectReferences = value;
                }
            }
        },
        alias: ["ProjectKind", "Codex$IProject$ProjectKind"],
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.ProjectFileLink)).ctor();
                this.m_ProjectReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferencedProject)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.AnalyzedProject, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectKind = value.Codex$IProject$ProjectKind;
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.ProjectFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$IProject$Files).select($asm.$.Codex.ObjectModel.AnalyzedProject.f2));
                this.m_ProjectReferences = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferencedProject)).$ctor1(System.Linq.Enumerable.from(value.Codex$IProject$ProjectReferences).select($asm.$.Codex.ObjectModel.AnalyzedProject.f4));
                Codex.ObjectModel.ProjectScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ProjectScopeEntity, Bridge.cast((value), Codex.IProjectScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.AnalyzedProject", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.AnalyzedProject, {
        f1: function (_v) {
            return new Codex.ObjectModel.ProjectFileLink.ctor().CopyFrom$4(Codex.ObjectModel.ProjectFileLink, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IProjectFileLink, Bridge.global.Codex.ObjectModel.ProjectFileLink, v, $asm.$.Codex.ObjectModel.AnalyzedProject.f1);
        },
        f3: function (_v) {
            return new Codex.ObjectModel.ReferencedProject.ctor().CopyFrom(Codex.ObjectModel.ReferencedProject, _v);
        },
        f4: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IReferencedProject, Bridge.global.Codex.ObjectModel.ReferencedProject, v, $asm.$.Codex.ObjectModel.AnalyzedProject.f3);
        }
    });

    Bridge.define("Codex.ObjectModel.BoundSourceInfo", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.IBoundSourceInfo],
        fields: {
            m_ReferenceCount: null,
            m_DefinitionCount: null,
            m_Language: null,
            m_References: null,
            m_Definitions: null,
            m_Classifications: null,
            m_OutliningRegions: null,
            m_ExcludeFromSearch: false
        },
        props: {
            /**
             * The number of references in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function ReferenceCount
             * @type number
             */
            ReferenceCount: {
                get: function () {
                    return this.CoerceReferenceCount(this.m_ReferenceCount);
                },
                set: function (value) {
                    this.m_ReferenceCount = value;
                }
            },
            /**
             * The number of definitions in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function DefinitionCount
             * @type number
             */
            DefinitionCount: {
                get: function () {
                    return this.CoerceDefinitionCount(this.m_DefinitionCount);
                },
                set: function (value) {
                    this.m_DefinitionCount = value;
                }
            },
            /**
             * The language of the file
             TODO: Remove
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Language
             * @type string
             */
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            },
            /**
             * References for the document. Sorted. May overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$References: {
                get: function () {
                    return this.References;
                }
            },
            /**
             * References for the document. Sorted. May overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function References
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            References: {
                get: function () {
                    return this.m_References;
                },
                set: function (value) {
                    this.m_References = value;
                }
            },
            /**
             * Definitions for the document. Sorted. No overlap?
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$Definitions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$Definitions: {
                get: function () {
                    return this.Definitions;
                }
            },
            /**
             * Definitions for the document. Sorted. No overlap?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Definitions
             * @type System.Collections.Generic.List$1
             */
            Definitions: {
                get: function () {
                    return this.m_Definitions;
                },
                set: function (value) {
                    this.m_Definitions = value;
                }
            },
            /**
             * Classifications for the document. Sorted by start index. No overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$Classifications: {
                get: function () {
                    return this.Classifications;
                }
            },
            /**
             * Classifications for the document. Sorted by start index. No overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Classifications
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Classifications: {
                get: function () {
                    return this.m_Classifications;
                },
                set: function (value) {
                    this.m_Classifications = value;
                }
            },
            /**
             * Outlining regions for the document. May overlap.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function Codex$IBoundSourceInfo$OutliningRegions
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IBoundSourceInfo$OutliningRegions: {
                get: function () {
                    return this.OutliningRegions;
                }
            },
            /**
             * Outlining regions for the document. May overlap.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function OutliningRegions
             * @type System.Collections.Generic.List$1
             */
            OutliningRegions: {
                get: function () {
                    return this.m_OutliningRegions;
                },
                set: function (value) {
                    this.m_OutliningRegions = value;
                }
            },
            /**
             * Indicates that the file should be excluded from text search
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceInfo
             * @function ExcludeFromSearch
             * @type boolean
             */
            ExcludeFromSearch: {
                get: function () {
                    return this.m_ExcludeFromSearch;
                },
                set: function (value) {
                    this.m_ExcludeFromSearch = value;
                }
            }
        },
        alias: [
            "ReferenceCount", "Codex$IBoundSourceInfo$ReferenceCount",
            "DefinitionCount", "Codex$IBoundSourceInfo$DefinitionCount",
            "Language", "Codex$IBoundSourceInfo$Language",
            "ExcludeFromSearch", "Codex$IBoundSourceInfo$ExcludeFromSearch"
        ],
        ctors: {
            init: function () {
                this.m_References = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ReferenceSpan).Array;
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSpan)).ctor();
                this.m_Classifications = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ClassificationSpan).Array;
                this.m_OutliningRegions = new (System.Collections.Generic.List$1(Codex.ObjectModel.OutliningRegion)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.BoundSourceInfo, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_ReferenceCount = value.Codex$IBoundSourceInfo$ReferenceCount;
                this.m_DefinitionCount = value.Codex$IBoundSourceInfo$DefinitionCount;
                this.m_Language = value.Codex$IBoundSourceInfo$Language;
                this.m_References = new (System.Collections.Generic.List$1(Codex.ObjectModel.ReferenceSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$References).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f2));
                this.m_Definitions = new (System.Collections.Generic.List$1(Codex.ObjectModel.DefinitionSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$Definitions).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f4));
                this.m_Classifications = new (System.Collections.Generic.List$1(Codex.ObjectModel.ClassificationSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$Classifications).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f6));
                this.m_OutliningRegions = new (System.Collections.Generic.List$1(Codex.ObjectModel.OutliningRegion)).$ctor1(System.Linq.Enumerable.from(value.Codex$IBoundSourceInfo$OutliningRegions).select($asm.$.Codex.ObjectModel.BoundSourceInfo.f8));
                this.m_ExcludeFromSearch = value.Codex$IBoundSourceInfo$ExcludeFromSearch;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            },
            CoerceReferenceCount: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : System.Array.getCount(this.References, Codex.ObjectModel.ReferenceSpan));
            },
            CoerceDefinitionCount: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : this.Definitions.Count);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceInfo, {
        f1: function (_v) {
            return new Codex.ObjectModel.ReferenceSpan.ctor().CopyFrom$4(Codex.ObjectModel.ReferenceSpan, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IReferenceSpan, Bridge.global.Codex.ObjectModel.ReferenceSpan, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f1);
        },
        f3: function (_v) {
            return new Codex.ObjectModel.DefinitionSpan.ctor().CopyFrom$1(Codex.ObjectModel.DefinitionSpan, _v);
        },
        f4: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IDefinitionSpan, Bridge.global.Codex.ObjectModel.DefinitionSpan, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f3);
        },
        f5: function (_v) {
            return new Codex.ObjectModel.ClassificationSpan.ctor().CopyFrom$1(Codex.ObjectModel.ClassificationSpan, _v);
        },
        f6: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IClassificationSpan, Bridge.global.Codex.ObjectModel.ClassificationSpan, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f5);
        },
        f7: function (_v) {
            return new Codex.ObjectModel.OutliningRegion.ctor().CopyFrom(Codex.ObjectModel.OutliningRegion, _v);
        },
        f8: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IOutliningRegion, Bridge.global.Codex.ObjectModel.OutliningRegion, v, $asm.$.Codex.ObjectModel.BoundSourceInfo.f7);
        }
    });

    /**
     * Describes a commit in version control
     *
     * @public
     * @class Codex.ObjectModel.Commit
     * @augments Codex.ObjectModel.CommitScopeEntity
     * @implements  Codex.ICommit
     */
    Bridge.define("Codex.ObjectModel.Commit", {
        inherits: [Codex.ObjectModel.CommitScopeEntity,Codex.ICommit],
        fields: {
            m_Description: null,
            m_DateUploaded: null,
            m_DateCommitted: null,
            m_ParentCommitIds: null,
            m_ChangedFiles: null
        },
        props: {
            /**
             * The commit description describing the changes
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function Description
             * @type string
             */
            Description: {
                get: function () {
                    return this.m_Description;
                },
                set: function (value) {
                    this.m_Description = value;
                }
            },
            /**
             * The date the commit was stored to the index
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function DateUploaded
             * @type System.DateTime
             */
            DateUploaded: {
                get: function () {
                    return this.m_DateUploaded;
                },
                set: function (value) {
                    this.m_DateUploaded = value;
                }
            },
            /**
             * The date of the commit
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function DateCommitted
             * @type System.DateTime
             */
            DateCommitted: {
                get: function () {
                    return this.m_DateCommitted;
                },
                set: function (value) {
                    this.m_DateCommitted = value;
                }
            },
            /**
             * The {@link } of the parent commits
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.Commit
             * @function Codex$ICommit$ParentCommitIds
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommit$ParentCommitIds: {
                get: function () {
                    return this.ParentCommitIds;
                }
            },
            /**
             * The {@link } of the parent commits
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function ParentCommitIds
             * @type System.Collections.Generic.List$1
             */
            ParentCommitIds: {
                get: function () {
                    return this.m_ParentCommitIds;
                },
                set: function (value) {
                    this.m_ParentCommitIds = value;
                }
            },
            /**
             * The files changed in the commit
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.Commit
             * @function Codex$ICommit$ChangedFiles
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommit$ChangedFiles: {
                get: function () {
                    return this.ChangedFiles;
                }
            },
            /**
             * The files changed in the commit
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.Commit
             * @function ChangedFiles
             * @type System.Collections.Generic.List$1
             */
            ChangedFiles: {
                get: function () {
                    return this.m_ChangedFiles;
                },
                set: function (value) {
                    this.m_ChangedFiles = value;
                }
            }
        },
        alias: [
            "Description", "Codex$ICommit$Description",
            "DateUploaded", "Codex$ICommit$DateUploaded",
            "DateCommitted", "Codex$ICommit$DateCommitted"
        ],
        ctors: {
            init: function () {
                this.m_DateUploaded = System.DateTime.getDefaultValue();
                this.m_DateCommitted = System.DateTime.getDefaultValue();
                this.m_ParentCommitIds = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.m_ChangedFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitChangedFile)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.Commit, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.CommitScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Description = value.Codex$ICommit$Description;
                this.m_DateUploaded = value.Codex$ICommit$DateUploaded;
                this.m_DateCommitted = value.Codex$ICommit$DateCommitted;
                this.m_ParentCommitIds = new (System.Collections.Generic.List$1(System.String)).$ctor1(value.Codex$ICommit$ParentCommitIds);
                this.m_ChangedFiles = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitChangedFile)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommit$ChangedFiles).select($asm.$.Codex.ObjectModel.Commit.f2));
                Codex.ObjectModel.CommitScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.CommitScopeEntity, Bridge.cast((value), Codex.ICommitScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.Commit", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.Commit, {
        f1: function (_v) {
            return new Codex.ObjectModel.CommitChangedFile.ctor().CopyFrom$1(Codex.ObjectModel.CommitChangedFile, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICommitChangedFile, Bridge.global.Codex.ObjectModel.CommitChangedFile, v, $asm.$.Codex.ObjectModel.Commit.f1);
        }
    });

    /**
     * Represents a directory in source control
     *
     * @public
     * @class Codex.ObjectModel.CommitFilesDirectory
     * @augments Codex.ObjectModel.RepoFileScopeEntity
     * @implements  Codex.ICommitFilesDirectory
     */
    Bridge.define("Codex.ObjectModel.CommitFilesDirectory", {
        inherits: [Codex.ObjectModel.RepoFileScopeEntity,Codex.ICommitFilesDirectory],
        fields: {
            m_Files: null
        },
        props: {
            /**
             * The files in the directory
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.CommitFilesDirectory
             * @function Codex$ICommitFilesDirectory$Files
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$ICommitFilesDirectory$Files: {
                get: function () {
                    return this.Files;
                }
            },
            /**
             * The files in the directory
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.CommitFilesDirectory
             * @function Files
             * @type System.Collections.Generic.List$1
             */
            Files: {
                get: function () {
                    return this.m_Files;
                },
                set: function (value) {
                    this.m_Files = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).ctor();
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.CommitFilesDirectory, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.RepoFileScopeEntity.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Files = new (System.Collections.Generic.List$1(Codex.ObjectModel.CommitFileLink)).$ctor1(System.Linq.Enumerable.from(value.Codex$ICommitFilesDirectory$Files).select($asm.$.Codex.ObjectModel.CommitFilesDirectory.f2));
                Codex.ObjectModel.RepoFileScopeEntity.prototype.CopyFrom$1.call(this, Codex.ObjectModel.RepoFileScopeEntity, Bridge.cast((value), Codex.IRepoFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.CommitFilesDirectory", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.CommitFilesDirectory, {
        f1: function (_v) {
            return new Codex.ObjectModel.CommitFileLink.ctor().CopyFrom(Codex.ObjectModel.CommitFileLink, _v);
        },
        f2: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ICommitFileLink, Bridge.global.Codex.ObjectModel.CommitFileLink, v, $asm.$.Codex.ObjectModel.CommitFilesDirectory.f1);
        }
    });

    Bridge.define("Codex.ObjectModel.DefinitionSymbol", {
        inherits: [Codex.ObjectModel.ReferenceSymbol,Codex.IDefinitionSymbol],
        fields: {
            m_Uid: null,
            m_DisplayName: null,
            m_ShortName: null,
            m_ContainerQualifiedName: null,
            m_Modifiers: null,
            m_Glyph: 0,
            m_SymbolDepth: 0,
            m_DocumentationInfo: null,
            m_TypeName: null,
            m_DeclarationName: null,
            m_Comment: null
        },
        props: {
            /**
             * The unique identifier for the symbol
             NOTE: This is not applicable to most symbols. Only set for symbols
             which are added in a shared context and need this for deduplication)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Uid
             * @type string
             */
            Uid: {
                get: function () {
                    return this.m_Uid;
                },
                set: function (value) {
                    this.m_Uid = value;
                }
            },
            /**
             * The display name of the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The short name of the symbol (i.e. Task).
             This is used to find the symbol when search term does not contain '.'
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function ShortName
             * @type string
             */
            ShortName: {
                get: function () {
                    return this.CoerceShortName(this.m_ShortName);
                },
                set: function (value) {
                    this.m_ShortName = value;
                }
            },
            /**
             * The qualified name of the symbol (i.e. System.Threading.Tasks.Task).
             This is used to find the symbol when the search term contains '.'
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function ContainerQualifiedName
             * @type string
             */
            ContainerQualifiedName: {
                get: function () {
                    return this.m_ContainerQualifiedName;
                },
                set: function (value) {
                    this.m_ContainerQualifiedName = value;
                }
            },
            /**
             * Modifiers for the symbol such as public
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Modifiers
             * @type Array.<string>
             */
            Modifiers: {
                get: function () {
                    return this.m_Modifiers;
                },
                set: function (value) {
                    this.m_Modifiers = value;
                }
            },
            /**
             * The glyph
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Glyph
             * @type Codex.ObjectModel.Glyph
             */
            Glyph: {
                get: function () {
                    return this.m_Glyph;
                },
                set: function (value) {
                    this.m_Glyph = value;
                }
            },
            /**
             * The depth of the symbol in its symbolic tree
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function SymbolDepth
             * @type number
             */
            SymbolDepth: {
                get: function () {
                    return this.m_SymbolDepth;
                },
                set: function (value) {
                    this.m_SymbolDepth = value;
                }
            },
            /**
             * Documentation for the symbol (if any)
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Codex$IDefinitionSymbol$DocumentationInfo
             * @type Codex.IDocumentationInfo
             */
            Codex$IDefinitionSymbol$DocumentationInfo: {
                get: function () {
                    return this.DocumentationInfo;
                }
            },
            /**
             * Documentation for the symbol (if any)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DocumentationInfo
             * @type Codex.ObjectModel.DocumentationInfo
             */
            DocumentationInfo: {
                get: function () {
                    return this.m_DocumentationInfo;
                },
                set: function (value) {
                    this.m_DocumentationInfo = value;
                }
            },
            /**
             * The name of the type for the symbol
             (i.e. return type of method)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function TypeName
             * @type string
             */
            TypeName: {
                get: function () {
                    return this.m_TypeName;
                },
                set: function (value) {
                    this.m_TypeName = value;
                }
            },
            /**
             * The declaration name for the symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function DeclarationName
             * @type string
             */
            DeclarationName: {
                get: function () {
                    return this.m_DeclarationName;
                },
                set: function (value) {
                    this.m_DeclarationName = value;
                }
            },
            /**
             * The comment applied to the definition
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DefinitionSymbol
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "Uid", "Codex$IDefinitionSymbol$Uid",
            "DisplayName", "Codex$IDefinitionSymbol$DisplayName",
            "ShortName", "Codex$IDefinitionSymbol$ShortName",
            "ContainerQualifiedName", "Codex$IDefinitionSymbol$ContainerQualifiedName",
            "Modifiers", "Codex$IDefinitionSymbol$Modifiers",
            "Glyph", "Codex$IDefinitionSymbol$Glyph",
            "SymbolDepth", "Codex$IDefinitionSymbol$SymbolDepth",
            "TypeName", "Codex$IDefinitionSymbol$TypeName",
            "DeclarationName", "Codex$IDefinitionSymbol$DeclarationName",
            "Comment", "Codex$IDefinitionSymbol$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.DefinitionSymbol, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor2.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_Uid = value.Codex$IDefinitionSymbol$Uid;
                this.m_DisplayName = value.Codex$IDefinitionSymbol$DisplayName;
                this.m_ShortName = value.Codex$IDefinitionSymbol$ShortName;
                this.m_ContainerQualifiedName = value.Codex$IDefinitionSymbol$ContainerQualifiedName;
                this.m_Modifiers = value.Codex$IDefinitionSymbol$Modifiers;
                this.m_Glyph = value.Codex$IDefinitionSymbol$Glyph;
                this.m_SymbolDepth = value.Codex$IDefinitionSymbol$SymbolDepth;
                this.m_DocumentationInfo = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.DocumentationInfo, Bridge.global.Codex.ObjectModel.DocumentationInfo, this.DocumentationInfo, $asm.$.Codex.ObjectModel.DefinitionSymbol.f1);
                ;
                this.m_TypeName = value.Codex$IDefinitionSymbol$TypeName;
                this.m_DeclarationName = value.Codex$IDefinitionSymbol$DeclarationName;
                this.m_Comment = value.Codex$IDefinitionSymbol$Comment;
                Codex.ObjectModel.ReferenceSymbol.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ReferenceSymbol, Bridge.cast((value), Codex.IReferenceSymbol));
                return Bridge.cast((this), TTarget);
            },
            Initialize: function () {
                this.ReferenceKind = "Definition";
                Codex.ObjectModel.ReferenceSymbol.prototype.Initialize.call(this);
            },
            CoerceShortName: function (value) {
                var $t;
                return ($t = value, $t != null ? $t : "");
            },
            toString: function () {
                return this.DisplayName;
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.DefinitionSymbol", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.DefinitionSymbol, {
        f1: function (v) {
            return new Codex.ObjectModel.DocumentationInfo.ctor().CopyFrom(Codex.ObjectModel.DocumentationInfo, v);
        }
    });

    /**
     * Decribes a symbol related to a given documented symbol
     *
     * @public
     * @class Codex.ObjectModel.DocumentationReferenceSymbol
     * @augments Codex.ObjectModel.ReferenceSymbol
     * @implements  Codex.IDocumentationReferenceSymbol
     */
    Bridge.define("Codex.ObjectModel.DocumentationReferenceSymbol", {
        inherits: [Codex.ObjectModel.ReferenceSymbol,Codex.IDocumentationReferenceSymbol],
        fields: {
            m_DisplayName: null,
            m_Comment: null
        },
        props: {
            /**
             * The display name of the symbol reference as it should appear in documentation
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationReferenceSymbol
             * @function DisplayName
             * @type string
             */
            DisplayName: {
                get: function () {
                    return this.m_DisplayName;
                },
                set: function (value) {
                    this.m_DisplayName = value;
                }
            },
            /**
             * The comment associated with the reference
             (i.e. return type description https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/xmldoc/returns)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.DocumentationReferenceSymbol
             * @function Comment
             * @type string
             */
            Comment: {
                get: function () {
                    return this.m_Comment;
                },
                set: function (value) {
                    this.m_Comment = value;
                }
            }
        },
        alias: [
            "DisplayName", "Codex$IDocumentationReferenceSymbol$DisplayName",
            "Comment", "Codex$IDocumentationReferenceSymbol$Comment"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.DocumentationReferenceSymbol, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor2.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ReferenceSymbol.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_DisplayName = value.Codex$IDocumentationReferenceSymbol$DisplayName;
                this.m_Comment = value.Codex$IDocumentationReferenceSymbol$Comment;
                Codex.ObjectModel.ReferenceSymbol.prototype.CopyFrom$1.call(this, Codex.ObjectModel.ReferenceSymbol, Bridge.cast((value), Codex.IReferenceSymbol));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * A specialized definition span referring to a parameter of a method/property
     *
     * @public
     * @class Codex.ObjectModel.ParameterDefinitionSpan
     * @augments Codex.ObjectModel.LineSpan
     * @implements  Codex.IParameterDefinitionSpan
     */
    Bridge.define("Codex.ObjectModel.ParameterDefinitionSpan", {
        inherits: [Codex.ObjectModel.LineSpan,Codex.IParameterDefinitionSpan],
        fields: {
            m_ParameterIndex: 0,
            m_Name: null
        },
        props: {
            /**
             * The index of the parameter in the list of parameters for the method
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDefinitionSpan
             * @function ParameterIndex
             * @type number
             */
            ParameterIndex: {
                get: function () {
                    return this.m_ParameterIndex;
                },
                set: function (value) {
                    this.m_ParameterIndex = value;
                }
            },
            /**
             * The name of the parameter
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterDefinitionSpan
             * @function Name
             * @type string
             */
            Name: {
                get: function () {
                    return this.m_Name;
                },
                set: function (value) {
                    this.m_Name = value;
                }
            }
        },
        alias: [
            "ParameterIndex", "Codex$IParameterDefinitionSpan$ParameterIndex",
            "Name", "Codex$IParameterDefinitionSpan$Name"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ParameterDefinitionSpan, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_ParameterIndex = value.Codex$IParameterDefinitionSpan$ParameterIndex;
                this.m_Name = value.Codex$IParameterDefinitionSpan$Name;
                Codex.ObjectModel.LineSpan.prototype.CopyFrom$1.call(this, Codex.ObjectModel.LineSpan, Bridge.cast((value), Codex.ILineSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.TextLineSpan", {
        inherits: [Codex.ObjectModel.LineSpan,Codex.ITextLineSpan],
        fields: {
            m_LineSpanText: null
        },
        props: {
            /**
             * The line text
             TODO: It would be nice to not store this here and instead apply it as a join
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.TextLineSpan
             * @function LineSpanText
             * @type string
             */
            LineSpanText: {
                get: function () {
                    return this.m_LineSpanText;
                },
                set: function (value) {
                    this.m_LineSpanText = value;
                }
            }
        },
        alias: ["LineSpanText", "Codex$ITextLineSpan$LineSpanText"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.TextLineSpan, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.LineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$2: function (TTarget, value) {
                this.m_LineSpanText = value.Codex$ITextLineSpan$LineSpanText;
                Codex.ObjectModel.LineSpan.prototype.CopyFrom$1.call(this, Codex.ObjectModel.LineSpan, Bridge.cast((value), Codex.ILineSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    /**
     * NOTE: Do not set {@link }
     *
     * @public
     * @class Codex.ObjectModel.ProjectFileLink
     * @augments Codex.ObjectModel.ProjectFileScopeEntity
     * @implements  Codex.IProjectFileLink
     */
    Bridge.define("Codex.ObjectModel.ProjectFileLink", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.IProjectFileLink],
        fields: {
            m_FileId: null
        },
        props: {
            /**
             * Unique identifier for file
             TODO: Make this checksum and searchable and use for discovering commit from PDB.
             TODO: What is this?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ProjectFileLink
             * @function FileId
             * @type string
             */
            FileId: {
                get: function () {
                    return this.m_FileId;
                },
                set: function (value) {
                    this.m_FileId = value;
                }
            }
        },
        alias: ["FileId", "Codex$IProjectFileLink$FileId"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ProjectFileLink, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_FileId = value.Codex$IProjectFileLink$FileId;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSearchModel", {
        inherits: [Codex.ObjectModel.SearchEntity,Codex.IReferenceSearchModel],
        fields: {
            m_Reference: null,
            m_Spans: null,
            m_CompressedSpans: null,
            m_ProjectRelativePath: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The reference symbol
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function Codex$IReferenceSearchModel$Reference
             * @type Codex.IReferenceSymbol
             */
            Codex$IReferenceSearchModel$Reference: {
                get: function () {
                    return this.Reference;
                }
            },
            /**
             * The reference symbol
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function Reference
             * @type Codex.ObjectModel.ReferenceSymbol
             */
            Reference: {
                get: function () {
                    return this.m_Reference;
                },
                set: function (value) {
                    this.m_Reference = value;
                }
            },
            Codex$IReferenceSearchModel$Spans: {
                get: function () {
                    return this.Spans;
                }
            },
            Spans: {
                get: function () {
                    return this.CoerceSpans(this.m_Spans);
                },
                set: function (value) {
                    this.m_Spans = value;
                }
            },
            /**
             * Compressed list of spans
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function CompressedSpans
             * @type Codex.ISymbolLineSpanList
             */
            CompressedSpans: {
                get: function () {
                    return this.m_CompressedSpans;
                },
                set: function (value) {
                    this.m_CompressedSpans = value;
                }
            },
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSearchModel
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "CompressedSpans", "Codex$IReferenceSearchModel$CompressedSpans",
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            init: function () {
                this.m_Spans = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.SymbolSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor6: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.$ctor1.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$1(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$5(Codex.ObjectModel.ReferenceSearchModel, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SearchEntity.ctor.call(this);
                this.CopyFrom$2(Codex.ObjectModel.ReferenceSearchModel, value);
            }
        },
        methods: {
            CopyFrom$5: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$4: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$3: function (TTarget, value) {
                this.m_Reference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.ReferenceSymbol, Bridge.global.Codex.ObjectModel.ReferenceSymbol, this.Reference, $asm.$.Codex.ObjectModel.ReferenceSearchModel.f1);
                ;
                this.m_Spans = new (System.Collections.Generic.List$1(Codex.ObjectModel.SymbolSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferenceSearchModel$Spans).select($asm.$.Codex.ObjectModel.ReferenceSearchModel.f3));
                this.m_CompressedSpans = value.Codex$IReferenceSearchModel$CompressedSpans;
                Codex.ObjectModel.SearchEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.SearchEntity, Bridge.cast((value), Codex.ISearchEntity));
                this.m_ProjectRelativePath = Bridge.cast((value), Codex.IProjectFileScopeEntity).Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CoerceSpans: function (value) {
                var $t;
                value = value || (($t = this.CompressedSpans) != null ? $t.Codex$ISymbolLineSpanList$ToList() : null);
                this.Spans = value;
                return value;
            },
            OnSerializingCore: function () {
                var $t;
                if (this.Spans != null) {
                    var lineSpanText = { v : null };
                    $t = Bridge.getEnumerator(this.Spans, Codex.ObjectModel.SymbolSpan);
                    try {
                        while ($t.moveNext()) {
                            var span = $t.Current;
                            span.LineSpanText = Codex.Utilities.SerializationUtilities.RemoveDuplicate(System.String, span.LineSpanText, lineSpanText);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}

                Codex.ObjectModel.SearchEntity.prototype.OnSerializingCore.call(this);
            },
            OnDeserializedCore: function () {
                var $t;
                if (this.Spans != null) {
                    var lineSpanText = { v : null };
                    $t = Bridge.getEnumerator(this.Spans, Codex.ObjectModel.SymbolSpan);
                    try {
                        while ($t.moveNext()) {
                            var span = $t.Current;
                            span.LineSpanText = Codex.Utilities.SerializationUtilities.AssignDuplicate(System.String, span.LineSpanText, lineSpanText);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }}

                Codex.ObjectModel.SearchEntity.prototype.OnDeserializedCore.call(this);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferenceSearchModel", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferenceSearchModel, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferenceSymbol.ctor().CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.SymbolSpan.ctor().CopyFrom$3(Codex.ObjectModel.SymbolSpan, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ISymbolSpan, Bridge.global.Codex.ObjectModel.SymbolSpan, v, $asm.$.Codex.ObjectModel.ReferenceSearchModel.f2);
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSearchResult", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.Sdk.Search.IReferenceSearchResult],
        fields: {
            m_ReferenceSpan: null
        },
        props: {
            Codex$Sdk$Search$IReferenceSearchResult$ReferenceSpan: {
                get: function () {
                    return this.ReferenceSpan;
                }
            },
            ReferenceSpan: {
                get: function () {
                    return this.m_ReferenceSpan;
                },
                set: function (value) {
                    this.m_ReferenceSpan = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ReferenceSearchResult, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_ReferenceSpan = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.ReferenceSpan, Bridge.global.Codex.ObjectModel.ReferenceSpan, this.ReferenceSpan, $asm.$.Codex.ObjectModel.ReferenceSearchResult.f1);
                ;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferenceSearchResult", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferenceSearchResult, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferenceSpan.ctor().CopyFrom$4(Codex.ObjectModel.ReferenceSpan, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SourceFileInfo", {
        inherits: [Codex.EntityBase,Codex.ISourceFileInfo],
        fields: {
            m_Lines: 0,
            m_Size: 0,
            m_Language: null,
            m_WebAddress: null,
            m_Encoding: null,
            m_Properties: null,
            m_RepoRelativePath: null,
            m_RepositoryName: null,
            m_SourceControlContentId: null,
            m_ProjectRelativePath: null,
            m_ProjectId: null
        },
        props: {
            /**
             * The number of lines in the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Lines
             * @type number
             */
            Lines: {
                get: function () {
                    return this.m_Lines;
                },
                set: function (value) {
                    this.m_Lines = value;
                }
            },
            /**
             * The size of the file in bytes
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Size
             * @type number
             */
            Size: {
                get: function () {
                    return this.m_Size;
                },
                set: function (value) {
                    this.m_Size = value;
                }
            },
            /**
             * The language of the file
             TODO: Remove
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Language
             * @type string
             */
            Language: {
                get: function () {
                    return this.m_Language;
                },
                set: function (value) {
                    this.m_Language = value;
                }
            },
            /**
             * The web address of the file. TODO: Remove? Is repo relative path enough?
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function WebAddress
             * @type string
             */
            WebAddress: {
                get: function () {
                    return this.m_WebAddress;
                },
                set: function (value) {
                    this.m_WebAddress = value;
                }
            },
            /**
             * The encoding used for the file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Codex$ISourceFileInfo$Encoding
             * @type Codex.IEncodingDescription
             */
            Codex$ISourceFileInfo$Encoding: {
                get: function () {
                    return this.Encoding;
                }
            },
            /**
             * The encoding used for the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Encoding
             * @type Codex.ObjectModel.EncodingDescription
             */
            Encoding: {
                get: function () {
                    return this.m_Encoding;
                },
                set: function (value) {
                    this.m_Encoding = value;
                }
            },
            /**
             * Extensible key value properties for the document.
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Codex$ISourceFileInfo$Properties
             * @type Codex.IPropertyMap
             */
            Codex$ISourceFileInfo$Properties: {
                get: function () {
                    return this.Properties;
                }
            },
            /**
             * Extensible key value properties for the document.
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function Properties
             * @type Codex.ObjectModel.PropertyMap
             */
            Properties: {
                get: function () {
                    return this.m_Properties;
                },
                set: function (value) {
                    this.m_Properties = value;
                }
            },
            /**
             * The repo relative path to the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function RepoRelativePath
             * @type string
             */
            RepoRelativePath: {
                get: function () {
                    return this.m_RepoRelativePath;
                },
                set: function (value) {
                    this.m_RepoRelativePath = value;
                }
            },
            /**
             * The name of the repository containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function RepositoryName
             * @type string
             */
            RepositoryName: {
                get: function () {
                    return this.m_RepositoryName;
                },
                set: function (value) {
                    this.m_RepositoryName = value;
                }
            },
            /**
             * Unique id for the source file content as defined by the source control provider (i.e. git SHA)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function SourceControlContentId
             * @type string
             */
            SourceControlContentId: {
                get: function () {
                    return this.m_SourceControlContentId;
                },
                set: function (value) {
                    this.m_SourceControlContentId = value;
                }
            },
            /**
             * The project relative path of the file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function ProjectRelativePath
             * @type string
             */
            ProjectRelativePath: {
                get: function () {
                    return this.m_ProjectRelativePath;
                },
                set: function (value) {
                    this.m_ProjectRelativePath = value;
                }
            },
            /**
             * The identifier of the project containing the entity
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.SourceFileInfo
             * @function ProjectId
             * @type string
             */
            ProjectId: {
                get: function () {
                    return this.m_ProjectId;
                },
                set: function (value) {
                    this.m_ProjectId = value;
                }
            }
        },
        alias: [
            "Lines", "Codex$ISourceFileInfo$Lines",
            "Size", "Codex$ISourceFileInfo$Size",
            "Language", "Codex$ISourceFileInfo$Language",
            "WebAddress", "Codex$ISourceFileInfo$WebAddress",
            "RepoRelativePath", "Codex$IRepoFileScopeEntity$RepoRelativePath",
            "RepositoryName", "Codex$IRepoScopeEntity$RepositoryName",
            "SourceControlContentId", "Codex$ISourceControlFileInfo$SourceControlContentId",
            "ProjectRelativePath", "Codex$IProjectFileScopeEntity$ProjectRelativePath",
            "ProjectId", "Codex$IProjectScopeEntity$ProjectId"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
            },
            $ctor6: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$5(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$2(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$3(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$4(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom(Codex.ObjectModel.SourceFileInfo, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.EntityBase.ctor.call(this);
                this.Initialize();
                this.CopyFrom$1(Codex.ObjectModel.SourceFileInfo, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                this.m_RepositoryName = value.Codex$IRepoScopeEntity$RepositoryName;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$2: function (TTarget, value) {
                this.m_RepoRelativePath = value.Codex$IRepoFileScopeEntity$RepoRelativePath;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$4: function (TTarget, value) {
                this.m_SourceControlContentId = value.Codex$ISourceControlFileInfo$SourceControlContentId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$1: function (TTarget, value) {
                this.m_ProjectId = value.Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom: function (TTarget, value) {
                this.m_ProjectRelativePath = value.Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            },
            CopyFrom$5: function (TTarget, value) {
                this.m_Lines = value.Codex$ISourceFileInfo$Lines;
                this.m_Size = value.Codex$ISourceFileInfo$Size;
                this.m_Language = value.Codex$ISourceFileInfo$Language;
                this.m_WebAddress = value.Codex$ISourceFileInfo$WebAddress;
                this.m_Encoding = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.EncodingDescription, Bridge.global.Codex.ObjectModel.EncodingDescription, this.Encoding, $asm.$.Codex.ObjectModel.SourceFileInfo.f1);
                ;
                this.m_Properties = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.PropertyMap, Bridge.global.Codex.ObjectModel.PropertyMap, this.Properties, $asm.$.Codex.ObjectModel.SourceFileInfo.f2);
                ;
                this.m_RepoRelativePath = Bridge.cast((value), Codex.IRepoFileScopeEntity).Codex$IRepoFileScopeEntity$RepoRelativePath;
                this.m_RepositoryName = Bridge.cast((value), Codex.IRepoScopeEntity).Codex$IRepoScopeEntity$RepositoryName;
                this.m_SourceControlContentId = Bridge.cast((value), Codex.ISourceControlFileInfo).Codex$ISourceControlFileInfo$SourceControlContentId;
                this.m_ProjectRelativePath = Bridge.cast((value), Codex.IProjectFileScopeEntity).Codex$IProjectFileScopeEntity$ProjectRelativePath;
                this.m_ProjectId = Bridge.cast((value), Codex.IProjectScopeEntity).Codex$IProjectScopeEntity$ProjectId;
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.SourceFileInfo", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.SourceFileInfo, {
        f1: function (v) {
            return new Codex.ObjectModel.EncodingDescription.ctor().CopyFrom(Codex.ObjectModel.EncodingDescription, v);
        },
        f2: function (v) {
            return new Codex.ObjectModel.PropertyMap.ctor().CopyFrom(Codex.ObjectModel.PropertyMap, v);
        }
    });

    Bridge.define("Codex.ObjectModel.TextLineSpanResult", {
        inherits: [Codex.ObjectModel.ProjectFileScopeEntity,Codex.Sdk.Search.ITextLineSpanResult],
        fields: {
            m_TextSpan: null
        },
        props: {
            Codex$Sdk$Search$ITextLineSpanResult$TextSpan: {
                get: function () {
                    return this.TextSpan;
                }
            },
            TextSpan: {
                get: function () {
                    return this.m_TextSpan;
                },
                set: function (value) {
                    this.m_TextSpan = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.TextLineSpanResult, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.ProjectFileScopeEntity.$ctor1.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_TextSpan = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.TextLineSpan, Bridge.global.Codex.ObjectModel.TextLineSpan, this.TextSpan, $asm.$.Codex.ObjectModel.TextLineSpanResult.f1);
                ;
                Codex.ObjectModel.ProjectFileScopeEntity.prototype.CopyFrom.call(this, Codex.ObjectModel.ProjectFileScopeEntity, Bridge.cast((value), Codex.IProjectFileScopeEntity));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.TextLineSpanResult", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.TextLineSpanResult, {
        f1: function (v) {
            return new Codex.ObjectModel.TextLineSpan.ctor().CopyFrom$2(Codex.ObjectModel.TextLineSpan, v);
        }
    });

    Bridge.define("Codex.Sdk.Search.ReferencesResult", {
        inherits: [Codex.Sdk.Search.IndexQueryHits$1(Codex.Sdk.Search.IReferenceSearchResult)],
        props: {
            SymbolDisplayName: null
        }
    });

    Bridge.define("Codex.View.GoToReferenceCommandBinding", {
        inherits: [Codex.View.TypedCommandBinding$1(Codex.Sdk.Search.IReferenceSearchResult)],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.View.TypedCommandBinding$1(Codex.Sdk.Search.IReferenceSearchResult).ctor.call(this, Codex.View.Commands.GoToReference);
            }
        }
    });

    Bridge.define("Codex.View.GoToSpanCommandBinding", {
        inherits: [Codex.View.TypedCommandBinding$1(Codex.Sdk.Search.ITextLineSpanResult)],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.View.TypedCommandBinding$1(Codex.Sdk.Search.ITextLineSpanResult).ctor.call(this, Codex.View.Commands.GoToSpan);
            }
        }
    });

    /**
     * Represents a source file with associated semantic bindings
     *
     * @public
     * @class Codex.ObjectModel.BoundSourceFile
     * @augments Codex.ObjectModel.BoundSourceInfo
     * @implements  Codex.IBoundSourceFile
     */
    Bridge.define("Codex.ObjectModel.BoundSourceFile", {
        inherits: [Codex.ObjectModel.BoundSourceInfo,Codex.IBoundSourceFile],
        fields: {
            m_SourceFile: null
        },
        props: {
            /**
             * The source file
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.BoundSourceFile
             * @function Codex$IBoundSourceFile$SourceFile
             * @type Codex.ISourceFile
             */
            Codex$IBoundSourceFile$SourceFile: {
                get: function () {
                    return this.SourceFile;
                }
            },
            /**
             * The source file
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.BoundSourceFile
             * @function SourceFile
             * @type Codex.ObjectModel.SourceFile
             */
            SourceFile: {
                get: function () {
                    return this.m_SourceFile;
                },
                set: function (value) {
                    this.m_SourceFile = value;
                }
            }
        },
        alias: [
            "References", "Codex$IBoundSourceInfo$References",
            "Definitions", "Codex$IBoundSourceInfo$Definitions",
            "Classifications", "Codex$IBoundSourceInfo$Classifications",
            "OutliningRegions", "Codex$IBoundSourceInfo$OutliningRegions"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.ctor.call(this);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.ctor.call(this);
                this.CopyFrom$5(Codex.ObjectModel.BoundSourceFile, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.BoundSourceInfo.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$5: function (TTarget, value) {
                this.m_SourceFile = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.SourceFile, Bridge.global.Codex.ObjectModel.SourceFile, this.SourceFile, $asm.$.Codex.ObjectModel.BoundSourceFile.f1);
                ;
                Codex.ObjectModel.BoundSourceInfo.prototype.CopyFrom$4.call(this, Codex.ObjectModel.BoundSourceInfo, Bridge.cast((value), Codex.IBoundSourceInfo));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.BoundSourceFile", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.BoundSourceFile, {
        f1: function (v) {
            return new Codex.ObjectModel.SourceFile.ctor().CopyFrom(Codex.ObjectModel.SourceFile, v);
        }
    });

    Bridge.define("Codex.ObjectModel.SymbolSpan", {
        inherits: [Codex.ObjectModel.TextLineSpan,Codex.ISymbolSpan],
        props: {
            LineSpanEnd: {
                get: function () {
                    return ((this.LineSpanStart + this.Length) | 0);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.ctor.call(this);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.ctor.call(this);
                this.CopyFrom$3(Codex.ObjectModel.SymbolSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor3.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor1.call(this, value);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.TextLineSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$3: function (TTarget, value) {
                Codex.ObjectModel.TextLineSpan.prototype.CopyFrom$2.call(this, Codex.ObjectModel.TextLineSpan, Bridge.cast((value), Codex.ITextLineSpan));
                return Bridge.cast((this), TTarget);
            },
            Trim: function () {
                var initialLength = this.LineSpanText.length;
                this.LineSpanText = System.String.trimStart(this.LineSpanText);
                var newLength = this.LineSpanText.length;
                this.LineSpanStart = (this.LineSpanStart - (((initialLength - newLength) | 0))) | 0;
                this.LineSpanText = System.String.trimEnd(this.LineSpanText);
                this.LineSpanStart = Math.max(this.LineSpanStart, 0);
                this.Length = Math.min(this.LineSpanText.length, this.Length);
            },
            CreateReference: function (referenceSymbol, relatedDefinition) {
                var $t;
                if (relatedDefinition === void 0) { relatedDefinition = new Codex.ObjectModel.SymbolId(); }
                return ($t = new Codex.ObjectModel.ReferenceSpan.$ctor4(this), $t.RelatedDefinition = relatedDefinition, $t.Reference = referenceSymbol, $t);
            },
            CreateDefinition: function (definition) {
                var $t;
                return ($t = new Codex.ObjectModel.DefinitionSpan.$ctor2(this), $t.Definition = definition, $t);
            }
        }
    });

    Bridge.define("Codex.View.Web.SerializedReferencesResult", {
        inherits: [Codex.Sdk.Search.IndexQueryHits$1(Codex.ObjectModel.ReferenceSearchResult)],
        props: {
            SymbolDisplayName: null
        }
    });

    /**
     * A specialized reference span referring to a parameter to a method/property
     *
     * @public
     * @class Codex.ObjectModel.ParameterReferenceSpan
     * @augments Codex.ObjectModel.SymbolSpan
     * @implements  Codex.IParameterReferenceSpan
     */
    Bridge.define("Codex.ObjectModel.ParameterReferenceSpan", {
        inherits: [Codex.ObjectModel.SymbolSpan,Codex.IParameterReferenceSpan],
        fields: {
            m_ParameterIndex: 0
        },
        props: {
            /**
             * The index of the parameter in the list of parameters for the method
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ParameterReferenceSpan
             * @function ParameterIndex
             * @type number
             */
            ParameterIndex: {
                get: function () {
                    return this.m_ParameterIndex;
                },
                set: function (value) {
                    this.m_ParameterIndex = value;
                }
            }
        },
        alias: ["ParameterIndex", "Codex$IParameterReferenceSpan$ParameterIndex"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ParameterReferenceSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor3.call(this, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor4.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_ParameterIndex = value.Codex$IParameterReferenceSpan$ParameterIndex;
                Codex.ObjectModel.SymbolSpan.prototype.CopyFrom$3.call(this, Codex.ObjectModel.SymbolSpan, Bridge.cast((value), Codex.ISymbolSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.define("Codex.ObjectModel.ReferenceSpan", {
        inherits: [Codex.ObjectModel.SymbolSpan,Codex.IReferenceSpan],
        fields: {
            m_RelatedDefinition: null,
            m_Reference: null,
            m_Parameters: null
        },
        props: {
            /**
             * Gets the symbol id of the definition which provides this reference
             (i.e. method definition for interface implementation)
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function RelatedDefinition
             * @type Codex.ObjectModel.SymbolId
             */
            RelatedDefinition: {
                get: function () {
                    return this.m_RelatedDefinition;
                },
                set: function (value) {
                    this.m_RelatedDefinition = value;
                }
            },
            /**
             * The reference symbol referred to by the span
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Codex$IReferenceSpan$Reference
             * @type Codex.IReferenceSymbol
             */
            Codex$IReferenceSpan$Reference: {
                get: function () {
                    return this.Reference;
                }
            },
            /**
             * The reference symbol referred to by the span
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Reference
             * @type Codex.ObjectModel.ReferenceSymbol
             */
            Reference: {
                get: function () {
                    return this.m_Reference;
                },
                set: function (value) {
                    this.m_Reference = value;
                }
            },
            /**
             * Gets the references to parameters
             *
             * @instance
             * @readonly
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Codex$IReferenceSpan$Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Codex$IReferenceSpan$Parameters: {
                get: function () {
                    return this.Parameters;
                }
            },
            /**
             * Gets the references to parameters
             *
             * @instance
             * @public
             * @memberof Codex.ObjectModel.ReferenceSpan
             * @function Parameters
             * @type System.Collections.Generic.IReadOnlyList$1
             */
            Parameters: {
                get: function () {
                    return this.m_Parameters;
                },
                set: function (value) {
                    this.m_Parameters = value;
                }
            }
        },
        alias: ["RelatedDefinition", "Codex$IReferenceSpan$RelatedDefinition"],
        ctors: {
            init: function () {
                this.m_RelatedDefinition = new Codex.ObjectModel.SymbolId();
                this.m_Parameters = Codex.Utilities.CollectionUtilities.Empty$1(Codex.ObjectModel.ParameterReferenceSpan).Array;
            },
            ctor: function () {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
            },
            $ctor2: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.ctor.call(this);
                this.CopyFrom$4(Codex.ObjectModel.ReferenceSpan, value);
            },
            $ctor4: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor3.call(this, value);
            },
            $ctor5: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor4.call(this, value);
            },
            $ctor1: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor1.call(this, value);
            },
            $ctor3: function (value) {
                this.$initialize();
                Codex.ObjectModel.SymbolSpan.$ctor2.call(this, value);
            }
        },
        methods: {
            CopyFrom$4: function (TTarget, value) {
                this.m_RelatedDefinition = value.Codex$IReferenceSpan$RelatedDefinition;
                this.m_Reference = Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.ObjectModel.ReferenceSymbol, Bridge.global.Codex.ObjectModel.ReferenceSymbol, this.Reference, $asm.$.Codex.ObjectModel.ReferenceSpan.f1);
                ;
                this.m_Parameters = new (System.Collections.Generic.List$1(Codex.ObjectModel.ParameterReferenceSpan)).$ctor1(System.Linq.Enumerable.from(value.Codex$IReferenceSpan$Parameters).select($asm.$.Codex.ObjectModel.ReferenceSpan.f3));
                Codex.ObjectModel.SymbolSpan.prototype.CopyFrom$3.call(this, Codex.ObjectModel.SymbolSpan, Bridge.cast((value), Codex.ISymbolSpan));
                return Bridge.cast((this), TTarget);
            }
        }
    });

    Bridge.ns("Codex.ObjectModel.ReferenceSpan", $asm.$);

    Bridge.apply($asm.$.Codex.ObjectModel.ReferenceSpan, {
        f1: function (v) {
            return new Codex.ObjectModel.ReferenceSymbol.ctor().CopyFrom$1(Codex.ObjectModel.ReferenceSymbol, v);
        },
        f2: function (_v) {
            return new Codex.ObjectModel.ParameterReferenceSpan.ctor().CopyFrom$4(Codex.ObjectModel.ParameterReferenceSpan, _v);
        },
        f3: function (v) {
            return Codex.EntityUtilities.NullOrCopy(Bridge.global.Codex.IParameterReferenceSpan, Bridge.global.Codex.ObjectModel.ParameterReferenceSpan, v, $asm.$.Codex.ObjectModel.ReferenceSpan.f2);
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDb2RleC5WaWV3LldlYi5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiLi4vQ29kZXguU2RrLlR5cGVzL1N1cHBvcnQvQXR0cmlidXRlcy5jcyIsIi4uL0NvZGV4LlNkay5UeXBlcy9TdXBwb3J0L0RhdGFJbmNsdXNpb24uY3MiLCIuLi9Db2RleC5TZGsuVHlwZXMvRW50aXR5VXRpbGl0aWVzLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9FbnRpdHlUeXBlcy5nLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9HbHlwaC5jcyIsIkNvbXBhdGliaWxpdHkvQ29tcGF0aWJpbGl0eS5jcyIsIi4uL0NvZGV4LlNkay5UeXBlcy9BcGkvSUluZGV4LmNzIiwiLi4vQ29kZXguU2RrLlR5cGVzL0FwaS9JQ29kZXguY3MiLCIuLi9Db2RleC5TZGsuVHlwZXMvU3VwcG9ydC9TZWFyY2hUeXBlRGVzY3JpcHRvcnMuY3MiLCIuLi9Db2RleC5TZGsuVHlwZXMvU2VhcmNoVHlwZXMuY3MiLCIuLi9Db2RleC5TZGsuU2hhcmVkL1V0aWxpdGllcy9Db2xsZWN0aW9uVXRpbGl0aWVzLmNzIiwiLi4vQ29kZXguU2RrLlNoYXJlZC9VdGlsaXRpZXMvU2VyaWFsaXphdGlvblV0aWxpdGllcy5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL0FwcC5jcyIsIi4uL0NvZGV4LlZpZXcuU2hhcmVkL1ZpZXdNb2RlbHMuY3MiLCIuLi9Db2RleC5WaWV3LlNoYXJlZC9Db21tYW5kcy5jcyIsIkVkaXRvckhvc3RDb250cm9sLmNzIiwiLi4vQ29kZXguVmlldy5TaGFyZWQvR3JhbnVsYXJFeHRlbnNpb25zLmNzIiwiTGVmdFBhbmVWaWV3LmNzIiwiLi4vQ29kZXguVmlldy5TaGFyZWQvTWFpbldpbmRvdy54YW1sLmNzIiwiLi4vQ29kZXguVmlldy5TaGFyZWQvUmlnaHRQYW5lVmlldy54YW1sLmNzIiwiLi4vQ29kZXguVmlldy5TaGFyZWQvU3R5bGVzLmNzIiwiVmlld1V0aWxpdGllcy5jcyIsIk1vbmFjby9FZGl0b3IuY3MiLCJNb25hY28vbGliL01vbmFjby5kLmNzIiwiLi4vQ29kZXguU2RrLlR5cGVzL0VudGl0eUJhc2UuY3MiLCJMZWZ0UGFuZVZpZXdNb2RlbC5jcyIsIldlYkFwaUNvZGV4LmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBZ0ZrQ0E7Ozs7O2dCQUV0QkEseUJBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJDckRNQTs7O2dCQUUxQkEscUJBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0NyQmFBLEdBQUdBLFNBQVNBLEtBQU9BO29CQUloREEsSUFBSUEsT0FBT0E7d0JBQU1BLE9BQU9BOztvQkFDeEJBLE9BQU9BLEtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkZtQ21CQTs7O2dCQUUvQkEsWUFBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQTBDYUE7OztnQkFFcEJBLHFCQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0cvRXFGQTs7Ozs7b0JBR3JHQSxrQkFBOEVBLEtBQUlBO29CQUNsRkEsZ0JBQWdCQSxBQUFPQSxlQUFnQkEsQUFBT0E7b0JBQzlDQSxnQkFBZ0JBLEFBQU9BLDBCQUFTQSxBQUFPQTtv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QUFBT0EsK0JBQWdDQSxBQUFPQTtvQkFDOURBLGdCQUFnQkEsQUFBT0EsMENBQXlCQSxBQUFPQTtvQkFDdkRBLGdCQUFnQkEsQUFBT0EsOEJBQStCQSxBQUFPQTtvQkFDN0RBLGdCQUFnQkEsQUFBT0EseUNBQXdCQSxBQUFPQTtvQkFDdERBLGdCQUFnQkEsQUFBT0EsOEJBQStCQSxBQUFPQTtvQkFDN0RBLGdCQUFnQkEsQUFBT0EseUNBQXdCQSxBQUFPQTtvQkFDdERBLGdCQUFnQkEsQUFBT0EsMkJBQTRCQSxBQUFPQTtvQkFDMURBLGdCQUFnQkEsQUFBT0Esc0NBQXFCQSxBQUFPQTtvQkFDbkRBLGdCQUFnQkEsQUFBT0Esb0NBQXFDQSxBQUFPQTtvQkFDbkVBLGdCQUFnQkEsQUFBT0EsK0NBQThCQSxBQUFPQTtvQkFDNURBLGdCQUFnQkEsQUFBT0EsMEJBQTJCQSxBQUFPQTtvQkFDekRBLGdCQUFnQkEsQUFBT0EscUNBQW9CQSxBQUFPQTtvQkFDbERBLGdCQUFnQkEsQUFBT0EsK0JBQWdDQSxBQUFPQTtvQkFDOURBLGdCQUFnQkEsQUFBT0EsMENBQXlCQSxBQUFPQTtvQkFDdkRBLGdCQUFnQkEsQUFBT0EsdUJBQXdCQSxBQUFPQTtvQkFDdERBLGdCQUFnQkEsQUFBT0Esa0NBQWlCQSxBQUFPQTtvQkFDL0NBLGdCQUFnQkEsQUFBT0EsNEJBQTZCQSxBQUFPQTtvQkFDM0RBLGdCQUFnQkEsQUFBT0EsdUNBQXNCQSxBQUFPQTtvQkFDcERBLGdCQUFnQkEsQUFBT0EsNkJBQThCQSxBQUFPQTtvQkFDNURBLGdCQUFnQkEsQUFBT0Esd0NBQXVCQSxBQUFPQTtvQkFDckRBLGdCQUFnQkEsQUFBT0EsOEJBQStCQSxBQUFPQTtvQkFDN0RBLGdCQUFnQkEsQUFBT0EseUNBQXdCQSxBQUFPQTtvQkFDdERBLGdCQUFnQkEsQUFBT0EseUJBQTBCQSxBQUFPQTtvQkFDeERBLGdCQUFnQkEsQUFBT0Esb0NBQW1CQSxBQUFPQTtvQkFDakRBLGdCQUFnQkEsQUFBT0Esd0JBQXlCQSxBQUFPQTtvQkFDdkRBLGdCQUFnQkEsQUFBT0EsbUNBQWtCQSxBQUFPQTtvQkFDaERBLGdCQUFnQkEsQUFBT0EsbUJBQW9CQSxBQUFPQTtvQkFDbERBLGdCQUFnQkEsQUFBT0EsMEJBQVNBLEFBQU9BO29CQUN2Q0EsZ0JBQWdCQSxBQUFPQSx5Q0FBMENBLEFBQU9BO29CQUN4RUEsZ0JBQWdCQSxBQUFPQSx5Q0FBd0JBLEFBQU9BO29CQUN0REEsZ0JBQWdCQSxBQUFPQSxzQ0FBdUNBLEFBQU9BO29CQUNyRUEsZ0JBQWdCQSxBQUFPQSxzQ0FBcUJBLEFBQU9BO29CQUNuREEsZ0JBQWdCQSxBQUFPQSxnQ0FBaUNBLEFBQU9BO29CQUMvREEsZ0JBQWdCQSxBQUFPQSxnQ0FBZUEsQUFBT0E7b0JBQzdDQSxnQkFBZ0JBLEFBQU9BLHlCQUEwQkEsQUFBT0E7b0JBQ3hEQSxnQkFBZ0JBLEFBQU9BLHlCQUFRQSxBQUFPQTtvQkFDdENBLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQzVDeUJBO29CQUVoQ0EsYUFBZ0JBLENBQVFBLEFBQUNBLElBQVFBLHVEQUFzQkEsbUJBQVNBLEVBQVFBLHNEQUFxQkE7b0JBQzdGQSxPQUFPQTs7aURBRzZDQTtvQkFFcERBLFFBQVFBO3dCQUVKQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBO3dCQUNMQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7NEJBQ0RBLE9BQU9BO3dCQUVYQSxLQUFLQTs0QkFDREEsT0FBT0E7d0JBRVhBLEtBQUtBO3dCQUNMQSxLQUFLQTt3QkFDTEEsS0FBS0E7d0JBQ0xBLEtBQUtBOzRCQUNEQSxPQUFPQTt3QkFFWEEsS0FBS0E7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QUlBLHVGQUE0Q0E7OzttQkFDa1NBLElBQUlBLHFHQUEwREE7OzttQkFBelNBLHNJQUFtSEEsR0FBR0EsQUFBK0dBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleFxyXG57XHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFNlYXJjaERlc2NyaXB0b3JJbmxpbmVBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYm9vbCBJbmxpbmU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hEZXNjcmlwdG9ySW5saW5lQXR0cmlidXRlKGJvb2wgaW5saW5lID0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbmxpbmUgPSBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgRW50aXR5SWRBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5DbGFzcywgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFBsYWNlaG9sZGVyQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuQ2xhc3MsIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBTZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IFR5cGUgVHlwZTtcclxuXHJcbiAgICAgICAgcHVibGljIFNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUoVHlwZSB0eXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVHlwZSA9IHR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLkludGVyZmFjZSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIEFkYXB0ZXJUeXBlQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuSW50ZXJmYWNlLCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgR2VuZXJhdGVkQ2xhc3NOYW1lQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHN0cmluZyBOYW1lO1xyXG5cclxuICAgICAgICBwdWJsaWMgR2VuZXJhdGVkQ2xhc3NOYW1lQXR0cmlidXRlKHN0cmluZyBuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbmRpY2F0ZXMgYW4gYXR0YWNoZWQgcHJvcGVydHkgd2hpY2ggaXMgbm90IGludHJpbnNpYyB0byB0aGUgcGFyZW50IG9iamVjdCBhbmQgc2hvdWxkIGJlXHJcbiAgICAvLy8gZXhjbHVkZWQgd2hlbiBjb21wdXRpbmcgdGhlIDxzZWUgY3JlZj1cIklTZWFyY2hFbnRpdHkuRW50aXR5Q29udGVudElkXCIvPlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgQXR0YWNoZWRBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFF1ZXJ5QXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHksIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBSZWFkT25seUxpc3RBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIENvZXJjZUdldEF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBUeXBlIENvZXJjZWRTb3VyY2VUeXBlO1xyXG5cclxuICAgICAgICBwdWJsaWMgQ29lcmNlR2V0QXR0cmlidXRlKFR5cGUgY29lcmNlZFNvdXJjZVR5cGUgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29lcmNlZFNvdXJjZVR5cGUgPSBjb2VyY2VkU291cmNlVHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluZGljYXRlcyBzdGFnZXMgZm9yIHdoaWNoIHRoZSBnaXZlbiBwcm9wZXJ0eSBzaG91bGQgYmUgaW5jbHVkZWRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIEluY2x1ZGVBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgT2JqZWN0U3RhZ2UgQWxsb3dlZFN0YWdlcztcclxuXHJcbiAgICAgICAgcHVibGljIEluY2x1ZGVBdHRyaWJ1dGUoT2JqZWN0U3RhZ2Ugc3RhZ2VzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWxsb3dlZFN0YWdlcyA9IHN0YWdlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgW0F0dHJpYnV0ZVVzYWdlKEF0dHJpYnV0ZVRhcmdldHMuUHJvcGVydHkgfCBBdHRyaWJ1dGVUYXJnZXRzLkludGVyZmFjZSB8IEF0dHJpYnV0ZVRhcmdldHMuQ2xhc3MsIEluaGVyaXRlZCA9IGZhbHNlLCBBbGxvd011bHRpcGxlID0gZmFsc2UpXVxyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBSZXF1aXJlZEZvckF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBPYmplY3RTdGFnZSBTdGFnZXM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBSZXF1aXJlZEZvckF0dHJpYnV0ZShPYmplY3RTdGFnZSBzdGFnZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTdGFnZXMgPSBzdGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtIE9iamVjdFN0YWdlXHJcbiAgICB7XHJcbiAgICAgICAgTm9uZSA9IDAsXHJcbiAgICAgICAgQW5hbHlzaXMgPSAxLFxyXG4gICAgICAgIEluZGV4ID0gMSA8PCAxLFxyXG4gICAgICAgIFNlYXJjaCA9IDEgPDwgMixcclxuICAgICAgICBBbGwgPSBTZWFyY2ggfCBJbmRleCB8IEFuYWx5c2lzXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudW0gU2VhcmNoQmVoYXZpb3JcclxuICAgIHtcclxuICAgICAgICBOb25lLFxyXG4gICAgICAgIFRlcm0sXHJcbiAgICAgICAgTm9ybWFsaXplZEtleXdvcmQsXHJcbiAgICAgICAgU29ydHdvcmQsXHJcbiAgICAgICAgSGllcmFyY2hpY2FsUGF0aCxcclxuICAgICAgICBGdWxsVGV4dCxcclxuICAgICAgICBQcmVmaXgsXHJcbiAgICAgICAgUHJlZml4RnVsbE5hbWVcclxuICAgIH1cclxuXHJcbiAgICBbQXR0cmlidXRlVXNhZ2UoQXR0cmlidXRlVGFyZ2V0cy5Qcm9wZXJ0eSwgSW5oZXJpdGVkID0gZmFsc2UsIEFsbG93TXVsdGlwbGUgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFNlYXJjaEJlaGF2aW9yQXR0cmlidXRlIDogQXR0cmlidXRlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IFNlYXJjaEJlaGF2aW9yIEJlaGF2aW9yO1xyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoQmVoYXZpb3JBdHRyaWJ1dGUoU2VhcmNoQmVoYXZpb3IgYmVoYXZpb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBCZWhhdmlvciA9IGJlaGF2aW9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxuXHJcbm5hbWVzcGFjZSBDb2RleFxyXG57XHJcbiAgICBwdWJsaWMgZW51bSBEYXRhSW5jbHVzaW9uT3B0aW9uc1xuICAgIHtcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEYXRhIHNob3VsZCBhbHdheXMgYmUgaW5jbHVkZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxuICAgICAgICBOb25lID0gMCxcbiAgICAgICAgRGVmaW5pdGlvbnMgPSAxLFxuICAgICAgICBSZWZlcmVuY2VzID0gMSA8PCAxLFxuICAgICAgICBDbGFzc2lmaWNhdGlvbnMgPSAxIDw8IDIsXG4gICAgICAgIFNlYXJjaERlZmluaXRpb25zID0gMSA8PCAzLFxuICAgICAgICBTZWFyY2hSZWZlcmVuY2VzID0gMSA8PCA0LFxuICAgICAgICBDb250ZW50ID0gMSA8PCA1LFxuICAgICAgICBBbGwgPSBEZWZpbml0aW9ucyB8IFJlZmVyZW5jZXMgfCBDbGFzc2lmaWNhdGlvbnMgfCBTZWFyY2hEZWZpbml0aW9ucyB8IFNlYXJjaFJlZmVyZW5jZXMgfCBDb250ZW50LFxuXG4gICAgICAgIC8vIERlZmF1bHQgZG9lcyBub3QgaW5jbHVkZSBkZWZpbml0aW9ucyBzaW5jZSB0aGV5IGNhbiBiZSBxdWVyaWVkIGxhemlseSByYXRoZXIgdGhhbiBlYWdlcmx5IHJldHJpZXZlZC5cbiAgICAgICAgRGVmYXVsdCA9IFJlZmVyZW5jZXMgfCBDbGFzc2lmaWNhdGlvbnMgfCBTZWFyY2hEZWZpbml0aW9ucyB8IFNlYXJjaFJlZmVyZW5jZXMgfCBDb250ZW50XG4gICAgfVxyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLlByb3BlcnR5LCBJbmhlcml0ZWQgPSBmYWxzZSwgQWxsb3dNdWx0aXBsZSA9IGZhbHNlKV1cclxuICAgIHB1YmxpYyBzZWFsZWQgY2xhc3MgRGF0YUluY2x1c2lvbkF0dHJpYnV0ZSA6IEF0dHJpYnV0ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBEYXRhSW5jbHVzaW9uT3B0aW9ucyBEYXRhSW5jbHVzaW9uO1xyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUluY2x1c2lvbkF0dHJpYnV0ZShEYXRhSW5jbHVzaW9uT3B0aW9ucyBkYXRhSW5jbHVzaW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRGF0YUluY2x1c2lvbiA9IGRhdGFJbmNsdXNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIEVudGl0eVV0aWxpdGllc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVFRhcmdldCBOdWxsT3JDb3B5PFQsIFRUYXJnZXQ+KFQgb2JqLCBGdW5jPFQsIFRUYXJnZXQ+IGNvcHkpXHJcbiAgICAgICAgICAgIHdoZXJlIFQgOiBjbGFzc1xyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogY2xhc3MsIFRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3B5KG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGF1dG8tZ2VuZXJhdGVkPlxyXG4vLyAgICAgVGhpcyBjb2RlIHdhcyBnZW5lcmF0ZWQgYnkgYSB0b29sLlxyXG4vLyAgICAgUnVudGltZSBWZXJzaW9uOjQuMC4zMDMxOS40MjAwMFxyXG4vL1xyXG4vLyAgICAgQ2hhbmdlcyB0byB0aGlzIGZpbGUgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvciBhbmQgd2lsbCBiZSBsb3N0IGlmXHJcbi8vICAgICB0aGUgY29kZSBpcyByZWdlbmVyYXRlZC5cclxuLy8gPC9hdXRvLWdlbmVyYXRlZD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbm5hbWVzcGFjZSBDb2RleC5PYmplY3RNb2RlbCB7XHJcbiAgICB1c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG4gICAgdXNpbmcgQ29kZXguRnJhbWV3b3JrLlR5cGVzO1xyXG4gICAgXHJcbiAgICBcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvZGV4VHlwZVV0aWxpdGllcyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5RGljdGlvbmFyeTxTeXN0ZW0uVHlwZSwgU3lzdGVtLlR5cGU+IHNfdHlwZU1hcHBpbmdzID0gQ3JlYXRlVHlwZU1hcHBpbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5EaWN0aW9uYXJ5PFN5c3RlbS5UeXBlLCBTeXN0ZW0uVHlwZT4gQ3JlYXRlVHlwZU1hcHBpbmcoKSB7XHJcbiAgICAgICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkRpY3Rpb25hcnk8U3lzdGVtLlR5cGUsIFN5c3RlbS5UeXBlPiB0eXBlTWFwcGluZyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5EaWN0aW9uYXJ5PFN5c3RlbS5UeXBlLCBTeXN0ZW0uVHlwZT4oKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29tbWl0KSwgdHlwZW9mKENvbW1pdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvbW1pdCksIHR5cGVvZihDb2RleC5JQ29tbWl0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdENoYW5nZWRGaWxlKSwgdHlwZW9mKENvbW1pdENoYW5nZWRGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0Q2hhbmdlZEZpbGUpLCB0eXBlb2YoQ29kZXguSUNvbW1pdENoYW5nZWRGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSwgdHlwZW9mKENvbW1pdEZpbGVMaW5rKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0RmlsZUxpbmspLCB0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVMaW5rKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUJyYW5jaCksIHR5cGVvZihCcmFuY2gpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihCcmFuY2gpLCB0eXBlb2YoQ29kZXguSUJyYW5jaCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZUZpbGUpLCB0eXBlb2YoQm91bmRTb3VyY2VGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQm91bmRTb3VyY2VGaWxlKSwgdHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZUZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VJbmZvKSwgdHlwZW9mKEJvdW5kU291cmNlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEJvdW5kU291cmNlSW5mbyksIHR5cGVvZihDb2RleC5JQm91bmRTb3VyY2VJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyksIHR5cGVvZihTb3VyY2VDb250cm9sRmlsZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTb3VyY2VDb250cm9sRmlsZUluZm8pLCB0eXBlb2YoQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTb3VyY2VGaWxlSW5mbyksIHR5cGVvZihTb3VyY2VGaWxlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFNvdXJjZUZpbGVJbmZvKSwgdHlwZW9mKENvZGV4LklTb3VyY2VGaWxlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uKSwgdHlwZW9mKEVuY29kaW5nRGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihFbmNvZGluZ0Rlc2NyaXB0aW9uKSwgdHlwZW9mKENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVNvdXJjZUZpbGUpLCB0eXBlb2YoU291cmNlRmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFNvdXJjZUZpbGUpLCB0eXBlb2YoQ29kZXguSVNvdXJjZUZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JT3V0bGluaW5nUmVnaW9uKSwgdHlwZW9mKE91dGxpbmluZ1JlZ2lvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKE91dGxpbmluZ1JlZ2lvbiksIHR5cGVvZihDb2RleC5JT3V0bGluaW5nUmVnaW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSURlZmluaXRpb25TcGFuKSwgdHlwZW9mKERlZmluaXRpb25TcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoRGVmaW5pdGlvblNwYW4pLCB0eXBlb2YoQ29kZXguSURlZmluaXRpb25TcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuKSwgdHlwZW9mKFBhcmFtZXRlckRlZmluaXRpb25TcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4pLCB0eXBlb2YoQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVNwYW4pLCB0eXBlb2YoUmVmZXJlbmNlU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlZmVyZW5jZVNwYW4pLCB0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiksIHR5cGVvZihQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiksIHR5cGVvZihDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4pLCB0eXBlb2YoQ2xhc3NpZmljYXRpb25TcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ2xhc3NpZmljYXRpb25TcGFuKSwgdHlwZW9mKENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU3ltYm9sU3BhbiksIHR5cGVvZihTeW1ib2xTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU3ltYm9sU3BhbiksIHR5cGVvZihDb2RleC5JU3ltYm9sU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklUZXh0TGluZVNwYW4pLCB0eXBlb2YoVGV4dExpbmVTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoVGV4dExpbmVTcGFuKSwgdHlwZW9mKENvZGV4LklUZXh0TGluZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JTGluZVNwYW4pLCB0eXBlb2YoTGluZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihMaW5lU3BhbiksIHR5cGVvZihDb2RleC5JTGluZVNwYW4pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU3BhbiksIHR5cGVvZihTcGFuKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU3BhbiksIHR5cGVvZihDb2RleC5JU3BhbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3KSwgdHlwZW9mKENvZGVSZXZpZXcpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RlUmV2aWV3KSwgdHlwZW9mKENvZGV4LklDb2RlUmV2aWV3KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24pLCB0eXBlb2YoQ29kZVJldmlld0l0ZXJhdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGVSZXZpZXdJdGVyYXRpb24pLCB0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29kZVJldmlld2VySW5mbyksIHR5cGVvZihDb2RlUmV2aWV3ZXJJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZVJldmlld2VySW5mbyksIHR5cGVvZihDb2RleC5JQ29kZVJldmlld2VySW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3RmlsZSksIHR5cGVvZihDb2RlUmV2aWV3RmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGVSZXZpZXdGaWxlKSwgdHlwZW9mKENvZGV4LklDb2RlUmV2aWV3RmlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCksIHR5cGVvZihDb2RlUmV2aWV3Q29tbWVudFRocmVhZCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGVSZXZpZXdDb21tZW50VGhyZWFkKSwgdHlwZW9mKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCksIHR5cGVvZihDb2RlUmV2aWV3Q29tbWVudCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGVSZXZpZXdDb21tZW50KSwgdHlwZW9mKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklMYW5ndWFnZUluZm8pLCB0eXBlb2YoTGFuZ3VhZ2VJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoTGFuZ3VhZ2VJbmZvKSwgdHlwZW9mKENvZGV4LklMYW5ndWFnZUluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSksIHR5cGVvZihDbGFzc2lmaWNhdGlvblN0eWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ2xhc3NpZmljYXRpb25TdHlsZSksIHR5cGVvZihDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9qZWN0KSwgdHlwZW9mKEFuYWx5emVkUHJvamVjdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEFuYWx5emVkUHJvamVjdCksIHR5cGVvZihDb2RleC5JUHJvamVjdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCksIHR5cGVvZihSZWZlcmVuY2VkUHJvamVjdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlZmVyZW5jZWRQcm9qZWN0KSwgdHlwZW9mKENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9qZWN0RmlsZUxpbmspLCB0eXBlb2YoUHJvamVjdEZpbGVMaW5rKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUHJvamVjdEZpbGVMaW5rKSwgdHlwZW9mKENvZGV4LklQcm9qZWN0RmlsZUxpbmspKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pLCB0eXBlb2YoRG9jdW1lbnRhdGlvbkluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihEb2N1bWVudGF0aW9uSW5mbyksIHR5cGVvZihDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiksIHR5cGVvZihQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiksIHR5cGVvZihDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24pLCB0eXBlb2YoVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSwgdHlwZW9mKENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24pKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCksIHR5cGVvZihEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCksIHR5cGVvZihDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsKSwgdHlwZW9mKFByb3BlcnR5U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQcm9wZXJ0eVNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb3BlcnR5TWFwKSwgdHlwZW9mKFByb3BlcnR5TWFwKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUHJvcGVydHlNYXApLCB0eXBlb2YoQ29kZXguSVByb3BlcnR5TWFwKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnkpLCB0eXBlb2YoUmVwb3NpdG9yeSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlcG9zaXRvcnkpLCB0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSksIHR5cGVvZihSZXBvc2l0b3J5UmVmZXJlbmNlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVwb3NpdG9yeVJlZmVyZW5jZSksIHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTZWFyY2hFbnRpdHkpLCB0eXBlb2YoU2VhcmNoRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU2VhcmNoRW50aXR5KSwgdHlwZW9mKENvZGV4LklTZWFyY2hFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVwb1Njb3BlRW50aXR5KSwgdHlwZW9mKFJlcG9TY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFJlcG9TY29wZUVudGl0eSksIHR5cGVvZihDb2RleC5JUmVwb1Njb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5KSwgdHlwZW9mKENvbW1pdFNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0U2NvcGVFbnRpdHkpLCB0eXBlb2YoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSksIHR5cGVvZihQcm9qZWN0U2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihQcm9qZWN0U2NvcGVFbnRpdHkpLCB0eXBlb2YoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSwgdHlwZW9mKFJlcG9GaWxlU2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZXBvRmlsZVNjb3BlRW50aXR5KSwgdHlwZW9mKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpLCB0eXBlb2YoUHJvamVjdEZpbGVTY29wZUVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFByb2plY3RGaWxlU2NvcGVFbnRpdHkpLCB0eXBlb2YoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVnaXN0ZXJlZEVudGl0eSksIHR5cGVvZihSZWdpc3RlcmVkRW50aXR5KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVnaXN0ZXJlZEVudGl0eSksIHR5cGVvZihDb2RleC5JUmVnaXN0ZXJlZEVudGl0eSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTdG9yZWRGaWx0ZXIpLCB0eXBlb2YoU3RvcmVkRmlsdGVyKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU3RvcmVkRmlsdGVyKSwgdHlwZW9mKENvZGV4LklTdG9yZWRGaWx0ZXIpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsKSwgdHlwZW9mKERlZmluaXRpb25TZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKERlZmluaXRpb25TZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUxhbmd1YWdlU2VhcmNoTW9kZWwpLCB0eXBlb2YoTGFuZ3VhZ2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKExhbmd1YWdlU2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSUxhbmd1YWdlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoUmVmZXJlbmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZWZlcmVuY2VTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlKSwgdHlwZW9mKFNvdXJjZVNlYXJjaE1vZGVsQmFzZSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFNvdXJjZVNlYXJjaE1vZGVsQmFzZSksIHR5cGVvZihDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoQm91bmRTb3VyY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEJvdW5kU291cmNlU2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JVGV4dFNvdXJjZVNlYXJjaE1vZGVsKSwgdHlwZW9mKFRleHRTb3VyY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFRleHRTb3VyY2VTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JVGV4dFNvdXJjZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCksIHR5cGVvZihSZXBvc2l0b3J5U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihSZXBvc2l0b3J5U2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklQcm9qZWN0U2VhcmNoTW9kZWwpLCB0eXBlb2YoUHJvamVjdFNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUHJvamVjdFNlYXJjaE1vZGVsKSwgdHlwZW9mKENvZGV4LklQcm9qZWN0U2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKSwgdHlwZW9mKFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCksIHR5cGVvZihDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsKSwgdHlwZW9mKENvbW1pdFNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29tbWl0U2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSUNvbW1pdFNlYXJjaE1vZGVsKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvbW1pdEZpbGVzU2VhcmNoTW9kZWwpLCB0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRmlsZVN0YXRpc3RpY3MpLCB0eXBlb2YoRmlsZVN0YXRpc3RpY3MpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihGaWxlU3RhdGlzdGljcyksIHR5cGVvZihDb2RleC5JRmlsZVN0YXRpc3RpY3MpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbyksIHR5cGVvZihSZXBvc2l0b3J5U3RvcmVJbmZvKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVwb3NpdG9yeVN0b3JlSW5mbyksIHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbykpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklDb21taXRGaWxlc0RpcmVjdG9yeSksIHR5cGVvZihDb21taXRGaWxlc0RpcmVjdG9yeSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvbW1pdEZpbGVzRGlyZWN0b3J5KSwgdHlwZW9mKENvZGV4LklDb21taXRGaWxlc0RpcmVjdG9yeSkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklTdG9yZWRCb3VuZFNvdXJjZUZpbGUpLCB0eXBlb2YoU3RvcmVkQm91bmRTb3VyY2VGaWxlKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoU3RvcmVkQm91bmRTb3VyY2VGaWxlKSwgdHlwZW9mKENvZGV4LklTdG9yZWRCb3VuZFNvdXJjZUZpbGUpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblN5bWJvbCksIHR5cGVvZihEZWZpbml0aW9uU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoRGVmaW5pdGlvblN5bWJvbCksIHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpLCB0eXBlb2YoUmVmZXJlbmNlU3ltYm9sKSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVmZXJlbmNlU3ltYm9sKSwgdHlwZW9mKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5JQ29kZVN5bWJvbCksIHR5cGVvZihTeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihTeW1ib2wpLCB0eXBlb2YoQ29kZXguSUNvZGVTeW1ib2wpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklSZWZlcmVuY2VTZWFyY2hSZXN1bHQpLCB0eXBlb2YoUmVmZXJlbmNlU2VhcmNoUmVzdWx0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoUmVmZXJlbmNlU2VhcmNoUmVzdWx0KSwgdHlwZW9mKENvZGV4LlNkay5TZWFyY2guSVJlZmVyZW5jZVNlYXJjaFJlc3VsdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKENvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdCksIHR5cGVvZihUZXh0TGluZVNwYW5SZXN1bHQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihUZXh0TGluZVNwYW5SZXN1bHQpLCB0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0KSk7XHJcbiAgICAgICAgICAgIHR5cGVNYXBwaW5nLkFkZCh0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0KSwgdHlwZW9mKFNlYXJjaFJlc3VsdCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKFNlYXJjaFJlc3VsdCksIHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQpKTtcclxuICAgICAgICAgICAgdHlwZU1hcHBpbmcuQWRkKHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklJbmRleCksIHR5cGVvZihJbmRleCkpO1xyXG4gICAgICAgICAgICB0eXBlTWFwcGluZy5BZGQodHlwZW9mKEluZGV4KSwgdHlwZW9mKENvZGV4LlNkay5TZWFyY2guSUluZGV4KSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlTWFwcGluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZXNjcmliZXMgYSBjb21taXQgaW4gdmVyc2lvbiBjb250cm9sXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb21taXQpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvbW1pdCA6IENvbW1pdFNjb3BlRW50aXR5LCBDb2RleC5JQ29tbWl0IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkRhdGVUaW1lIG1fRGF0ZVVwbG9hZGVkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkRhdGVUaW1lIG1fRGF0ZUNvbW1pdHRlZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPiBtX1BhcmVudENvbW1pdElkcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0Q2hhbmdlZEZpbGU+IG1fQ2hhbmdlZEZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0Q2hhbmdlZEZpbGU+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdChDb2RleC5JQ29tbWl0IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXQoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvbW1pdCBkZXNjcmlwdGlvbiBkZXNjcmliaW5nIHRoZSBjaGFuZ2VzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGF0ZSB0aGUgY29tbWl0IHdhcyBzdG9yZWQgdG8gdGhlIGluZGV4XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uRGF0ZVRpbWUgRGF0ZVVwbG9hZGVkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGF0ZVVwbG9hZGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGF0ZVVwbG9hZGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGF0ZSBvZiB0aGUgY29tbWl0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uRGF0ZVRpbWUgRGF0ZUNvbW1pdHRlZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RhdGVDb21taXR0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EYXRlQ29tbWl0dGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgPHNlZSBjcmVmPVwiUDpDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkuQ29tbWl0SWRcIiAvPiBvZiB0aGUgcGFyZW50IGNvbW1pdHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8c3RyaW5nPiBDb2RleC5JQ29tbWl0LlBhcmVudENvbW1pdElkcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5QYXJlbnRDb21taXRJZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgPHNlZSBjcmVmPVwiUDpDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkuQ29tbWl0SWRcIiAvPiBvZiB0aGUgcGFyZW50IGNvbW1pdHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPiBQYXJlbnRDb21taXRJZHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9QYXJlbnRDb21taXRJZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9QYXJlbnRDb21taXRJZHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBmaWxlcyBjaGFuZ2VkIGluIHRoZSBjb21taXRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSUNvbW1pdENoYW5nZWRGaWxlPiBDb2RleC5JQ29tbWl0LkNoYW5nZWRGaWxlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DaGFuZ2VkRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZmlsZXMgY2hhbmdlZCBpbiB0aGUgY29tbWl0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdENoYW5nZWRGaWxlPiBDaGFuZ2VkRmlsZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DaGFuZ2VkRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9DaGFuZ2VkRmlsZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXQgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb21taXQge1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSAoKENvZGV4LklDb21taXQpKHZhbHVlKSkuRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9EYXRlVXBsb2FkZWQgPSAoKENvZGV4LklDb21taXQpKHZhbHVlKSkuRGF0ZVVwbG9hZGVkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGF0ZUNvbW1pdHRlZCA9ICgoQ29kZXguSUNvbW1pdCkodmFsdWUpKS5EYXRlQ29tbWl0dGVkO1xyXG4gICAgICAgICAgICB0aGlzLm1fUGFyZW50Q29tbWl0SWRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPigoKENvZGV4LklDb21taXQpKHZhbHVlKSkuUGFyZW50Q29tbWl0SWRzKTtcclxuICAgICAgICAgICAgdGhpcy5tX0NoYW5nZWRGaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdENoYW5nZWRGaWxlPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklDb21taXRDaGFuZ2VkRmlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdENoYW5nZWRGaWxlPigoKENvZGV4LklDb21taXQpKHZhbHVlKSkuQ2hhbmdlZEZpbGVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb21taXRDaGFuZ2VkRmlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRDaGFuZ2VkRmlsZT4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRDaGFuZ2VkRmlsZT4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0Q2hhbmdlZEZpbGU+KShfdiA9PiBuZXcgQ29tbWl0Q2hhbmdlZEZpbGUoKS5Db3B5RnJvbTxDb21taXRDaGFuZ2VkRmlsZT4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208Q29tbWl0U2NvcGVFbnRpdHk+KCgoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIFJlcHJlc2VudHMgYSBjaGFuZ2VkIGZpbGUgaW4gYSBjb21taXRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvbW1pdENoYW5nZWRGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXRDaGFuZ2VkRmlsZSA6IENvbW1pdEZpbGVMaW5rLCBDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguRmlsZUNoYW5nZUtpbmQgbV9DaGFuZ2VLaW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fT3JpZ2luYWxGaWxlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0Q2hhbmdlZEZpbGUoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRDaGFuZ2VkRmlsZShDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb21taXRDaGFuZ2VkRmlsZT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0Q2hhbmdlZEZpbGUoQ29kZXguSUNvbW1pdEZpbGVMaW5rIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0eXBlIG9mIGNoYW5nZSBhcHBsaWVkIHRvIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5GaWxlQ2hhbmdlS2luZCBDaGFuZ2VLaW5kIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ2hhbmdlS2luZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NoYW5nZUtpbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEZvciBhIHJlbmFtZWQgZmlsZSwgdGhlIHBhdGggdG8gdGhlIGZpbGUgcHJpb3IgdG8gdGhlIHJlbmFtZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE9yaWdpbmFsRmlsZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9PcmlnaW5hbEZpbGVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fT3JpZ2luYWxGaWxlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvbW1pdENoYW5nZWRGaWxlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29tbWl0Q2hhbmdlZEZpbGUge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ2hhbmdlS2luZCA9ICgoQ29kZXguSUNvbW1pdENoYW5nZWRGaWxlKSh2YWx1ZSkpLkNoYW5nZUtpbmQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9PcmlnaW5hbEZpbGVQYXRoID0gKChDb2RleC5JQ29tbWl0Q2hhbmdlZEZpbGUpKHZhbHVlKSkuT3JpZ2luYWxGaWxlUGF0aDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxDb21taXRGaWxlTGluaz4oKChDb2RleC5JQ29tbWl0RmlsZUxpbmspKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gUmVwcmVzZW50cyBhIHZlcnNpb24gb2YgYSByZXBvc2l0b3J5IGZpbGUgZm9yIGEgY29tbWl0XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb21taXRGaWxlTGluaykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29tbWl0RmlsZUxpbmsgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29tbWl0RmlsZUxpbmsge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0ZpbGVJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1ZlcnNpb25Db250cm9sRmlsZUlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlTGluaygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZUxpbmsoQ29kZXguSUNvbW1pdEZpbGVMaW5rIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb21taXRGaWxlTGluaz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZWxhdGl2ZSBwYXRoIGluIHRoZSByZXBvc2l0b3J5IHRvIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb1JlbGF0aXZlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVbmlxdWUgaWRlbnRpZmVyIGZvciBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRmlsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZUlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVbmlxdWUgaWRlbnRpZmVyIGZvciBmaWxlIGNvbnRlbnQgYXMgZGV0ZXJtaW5lZCBieSB2ZXJzaW9uIGNvbnRyb2xcclxuICAgICAgICAvLy8gKGkuZS4gdGhlIGJsb2IgaGFzaClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBWZXJzaW9uQ29udHJvbEZpbGVJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1ZlcnNpb25Db250cm9sRmlsZUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVmVyc2lvbkNvbnRyb2xGaWxlSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRGaWxlTGluayB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdEZpbGVMaW5rIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklDb21taXRGaWxlTGluaykodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fRmlsZUlkID0gKChDb2RleC5JQ29tbWl0RmlsZUxpbmspKHZhbHVlKSkuRmlsZUlkO1xyXG4gICAgICAgICAgICB0aGlzLm1fVmVyc2lvbkNvbnRyb2xGaWxlSWQgPSAoKENvZGV4LklDb21taXRGaWxlTGluaykodmFsdWUpKS5WZXJzaW9uQ29udHJvbEZpbGVJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlc2NyaWJlcyBhIGJyYW5jaCBpbiBhIHJlcG9zaXRvcnlcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUJyYW5jaCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQnJhbmNoIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUJyYW5jaCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9IZWFkQ29tbWl0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJyYW5jaCgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQnJhbmNoKENvZGV4LklCcmFuY2ggdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEJyYW5jaD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBicmFuY2hcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX05hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBicmFuY2ggZGVzY3JpcHRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBoZWFkIGNvbW1pdCBvZiB0aGUgYnJhbmNoXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgSGVhZENvbW1pdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSGVhZENvbW1pdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSGVhZENvbW1pdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQnJhbmNoIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQnJhbmNoIHtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklCcmFuY2gpKHZhbHVlKSkuTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gKChDb2RleC5JQnJhbmNoKSh2YWx1ZSkpLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fSGVhZENvbW1pdElkID0gKChDb2RleC5JQnJhbmNoKSh2YWx1ZSkpLkhlYWRDb21taXRJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIFJlcHJlc2VudHMgYSBzb3VyY2UgZmlsZSB3aXRoIGFzc29jaWF0ZWQgc2VtYW50aWMgYmluZGluZ3NcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUJvdW5kU291cmNlRmlsZSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQm91bmRTb3VyY2VGaWxlIDogQm91bmRTb3VyY2VJbmZvLCBDb2RleC5JQm91bmRTb3VyY2VGaWxlIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFNvdXJjZUZpbGUgbV9Tb3VyY2VGaWxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZUZpbGUoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZUZpbGUoQ29kZXguSUJvdW5kU291cmNlRmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPEJvdW5kU291cmNlRmlsZT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VGaWxlKENvZGV4LklCb3VuZFNvdXJjZUluZm8gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZUZpbGUoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JU291cmNlRmlsZSBDb2RleC5JQm91bmRTb3VyY2VGaWxlLlNvdXJjZUZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU291cmNlRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzb3VyY2UgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU291cmNlRmlsZSBTb3VyY2VGaWxlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU291cmNlRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUZpbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklCb3VuZFNvdXJjZUZpbGUgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBCb3VuZFNvdXJjZUZpbGUge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlRmlsZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGU+KFNvdXJjZUZpbGUsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlPikodiA9PiBuZXcgU291cmNlRmlsZSgpLkNvcHlGcm9tPFNvdXJjZUZpbGU+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPEJvdW5kU291cmNlSW5mbz4oKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEJvdW5kU291cmNlSW5mbyA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHksIENvZGV4LklCb3VuZFNvdXJjZUluZm8ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLk51bGxhYmxlPGludD4gbV9SZWZlcmVuY2VDb3VudDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5OdWxsYWJsZTxpbnQ+IG1fRGVmaW5pdGlvbkNvdW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTGFuZ3VhZ2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFJlZmVyZW5jZVNwYW4+IG1fUmVmZXJlbmNlcyA9IENvZGV4LlV0aWxpdGllcy5Db2xsZWN0aW9uVXRpbGl0aWVzLkVtcHR5PFJlZmVyZW5jZVNwYW4+LkFycmF5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEZWZpbml0aW9uU3Bhbj4gbV9EZWZpbml0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TcGFuPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDbGFzc2lmaWNhdGlvblNwYW4+IG1fQ2xhc3NpZmljYXRpb25zID0gQ29kZXguVXRpbGl0aWVzLkNvbGxlY3Rpb25VdGlsaXRpZXMuRW1wdHk8Q2xhc3NpZmljYXRpb25TcGFuPi5BcnJheTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8T3V0bGluaW5nUmVnaW9uPiBtX091dGxpbmluZ1JlZ2lvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxPdXRsaW5pbmdSZWdpb24+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIG1fRXhjbHVkZUZyb21TZWFyY2g7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlSW5mbygpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlSW5mbyhDb2RleC5JQm91bmRTb3VyY2VJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Qm91bmRTb3VyY2VJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZUluZm8oQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG51bWJlciBvZiByZWZlcmVuY2VzIGluIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgUmVmZXJlbmNlQ291bnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29lcmNlUmVmZXJlbmNlQ291bnQodGhpcy5tX1JlZmVyZW5jZUNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZUNvdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbnVtYmVyIG9mIGRlZmluaXRpb25zIGluIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgRGVmaW5pdGlvbkNvdW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvZXJjZURlZmluaXRpb25Db3VudCh0aGlzLm1fRGVmaW5pdGlvbkNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb25Db3VudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGxhbmd1YWdlIG9mIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIFRPRE86IFJlbW92ZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIExhbmd1YWdlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MYW5ndWFnZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gUmVmZXJlbmNlcyBmb3IgdGhlIGRvY3VtZW50LiBTb3J0ZWQuIE1heSBvdmVybGFwLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JUmVmZXJlbmNlU3Bhbj4gQ29kZXguSUJvdW5kU291cmNlSW5mby5SZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZWZlcmVuY2VzIGZvciB0aGUgZG9jdW1lbnQuIFNvcnRlZC4gTWF5IG92ZXJsYXAuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFJlZmVyZW5jZVNwYW4+IFJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVmaW5pdGlvbnMgZm9yIHRoZSBkb2N1bWVudC4gU29ydGVkLiBObyBvdmVybGFwP1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JRGVmaW5pdGlvblNwYW4+IENvZGV4LklCb3VuZFNvdXJjZUluZm8uRGVmaW5pdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRGVmaW5pdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbml0aW9ucyBmb3IgdGhlIGRvY3VtZW50LiBTb3J0ZWQuIE5vIG92ZXJsYXA/XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TcGFuPiBEZWZpbml0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlZmluaXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENsYXNzaWZpY2F0aW9ucyBmb3IgdGhlIGRvY3VtZW50LiBTb3J0ZWQgYnkgc3RhcnQgaW5kZXguIE5vIG92ZXJsYXAuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4+IENvZGV4LklCb3VuZFNvdXJjZUluZm8uQ2xhc3NpZmljYXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENsYXNzaWZpY2F0aW9ucyBmb3IgdGhlIGRvY3VtZW50LiBTb3J0ZWQgYnkgc3RhcnQgaW5kZXguIE5vIG92ZXJsYXAuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENsYXNzaWZpY2F0aW9uU3Bhbj4gQ2xhc3NpZmljYXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ2xhc3NpZmljYXRpb25zID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPdXRsaW5pbmcgcmVnaW9ucyBmb3IgdGhlIGRvY3VtZW50LiBNYXkgb3ZlcmxhcC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSU91dGxpbmluZ1JlZ2lvbj4gQ29kZXguSUJvdW5kU291cmNlSW5mby5PdXRsaW5pbmdSZWdpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLk91dGxpbmluZ1JlZ2lvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPdXRsaW5pbmcgcmVnaW9ucyBmb3IgdGhlIGRvY3VtZW50LiBNYXkgb3ZlcmxhcC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8T3V0bGluaW5nUmVnaW9uPiBPdXRsaW5pbmdSZWdpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fT3V0bGluaW5nUmVnaW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX091dGxpbmluZ1JlZ2lvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZGljYXRlcyB0aGF0IHRoZSBmaWxlIHNob3VsZCBiZSBleGNsdWRlZCBmcm9tIHRleHQgc2VhcmNoXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEV4Y2x1ZGVGcm9tU2VhcmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUJvdW5kU291cmNlSW5mbyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEJvdW5kU291cmNlSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VDb3VudCA9ICgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5SZWZlcmVuY2VDb3VudDtcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb25Db3VudCA9ICgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5EZWZpbml0aW9uQ291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9MYW5ndWFnZSA9ICgoQ29kZXguSUJvdW5kU291cmNlSW5mbykodmFsdWUpKS5MYW5ndWFnZTtcclxuICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZWZlcmVuY2VTcGFuPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3Bhbj4oKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLlJlZmVyZW5jZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZVNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3Bhbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVNwYW4+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZVNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3Bhbj4pKF92ID0+IG5ldyBSZWZlcmVuY2VTcGFuKCkuQ29weUZyb208UmVmZXJlbmNlU3Bhbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZWZpbml0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PERlZmluaXRpb25TcGFuPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TcGFuPigoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkuRGVmaW5pdGlvbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TcGFuPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TcGFuPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3Bhbj4pKF92ID0+IG5ldyBEZWZpbml0aW9uU3BhbigpLkNvcHlGcm9tPERlZmluaXRpb25TcGFuPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX0NsYXNzaWZpY2F0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENsYXNzaWZpY2F0aW9uU3Bhbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ2xhc3NpZmljYXRpb25TcGFuPigoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkuQ2xhc3NpZmljYXRpb25zLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ2xhc3NpZmljYXRpb25TcGFuPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklDbGFzc2lmaWNhdGlvblNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblNwYW4+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblNwYW4+KShfdiA9PiBuZXcgQ2xhc3NpZmljYXRpb25TcGFuKCkuQ29weUZyb208Q2xhc3NpZmljYXRpb25TcGFuPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX091dGxpbmluZ1JlZ2lvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxPdXRsaW5pbmdSZWdpb24+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSU91dGxpbmluZ1JlZ2lvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLk91dGxpbmluZ1JlZ2lvbj4oKChDb2RleC5JQm91bmRTb3VyY2VJbmZvKSh2YWx1ZSkpLk91dGxpbmluZ1JlZ2lvbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSU91dGxpbmluZ1JlZ2lvbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5PdXRsaW5pbmdSZWdpb24+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSU91dGxpbmluZ1JlZ2lvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLk91dGxpbmluZ1JlZ2lvbj4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JT3V0bGluaW5nUmVnaW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLk91dGxpbmluZ1JlZ2lvbj4pKF92ID0+IG5ldyBPdXRsaW5pbmdSZWdpb24oKS5Db3B5RnJvbTxPdXRsaW5pbmdSZWdpb24+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2ggPSAoKENvZGV4LklCb3VuZFNvdXJjZUluZm8pKHZhbHVlKSkuRXhjbHVkZUZyb21TZWFyY2g7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UHJvamVjdEZpbGVTY29wZUVudGl0eT4oKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCBhIHNvdXJjZSBmaWxlIGFzIGRlZmluZWQgYnkgdGhlIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fU291cmNlQ29udHJvbENvbnRlbnRJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlQ29udHJvbEZpbGVJbmZvKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VDb250cm9sRmlsZUluZm8oQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlQ29udHJvbEZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVW5pcXVlIGlkIGZvciB0aGUgc291cmNlIGZpbGUgY29udGVudCBhcyBkZWZpbmVkIGJ5IHRoZSBzb3VyY2UgY29udHJvbCBwcm92aWRlciAoaS5lLiBnaXQgU0hBKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFNvdXJjZUNvbnRyb2xDb250ZW50SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbENvbnRlbnRJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUNvbnRyb2xGaWxlSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sQ29udGVudElkID0gKChDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvKSh2YWx1ZSkpLlNvdXJjZUNvbnRyb2xDb250ZW50SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU291cmNlRmlsZUluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFNvdXJjZUZpbGVJbmZvIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0xpbmVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fU2l6ZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0xhbmd1YWdlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fV2ViQWRkcmVzcztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIEVuY29kaW5nRGVzY3JpcHRpb24gbV9FbmNvZGluZztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFByb3BlcnR5TWFwIG1fUHJvcGVydGllcztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1NvdXJjZUNvbnRyb2xDb250ZW50SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZUluZm8oQ29kZXguSVNvdXJjZUZpbGVJbmZvIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZUluZm8oQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGVJbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VGaWxlSW5mbyhDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZUluZm8oQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlRmlsZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGVJbmZvKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU291cmNlRmlsZUluZm8oQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlRmlsZUluZm8+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbnVtYmVyIG9mIGxpbmVzIGluIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgTGluZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MaW5lcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xpbmVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc2l6ZSBvZiB0aGUgZmlsZSBpbiBieXRlc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFNpemUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU2l6ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGxhbmd1YWdlIG9mIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIFRPRE86IFJlbW92ZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIExhbmd1YWdlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MYW5ndWFnZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHdlYiBhZGRyZXNzIG9mIHRoZSBmaWxlLiBUT0RPOiBSZW1vdmU/IElzIHJlcG8gcmVsYXRpdmUgcGF0aCBlbm91Z2g/XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgV2ViQWRkcmVzcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1dlYkFkZHJlc3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9XZWJBZGRyZXNzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZW5jb2RpbmcgdXNlZCBmb3IgdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uIENvZGV4LklTb3VyY2VGaWxlSW5mby5FbmNvZGluZyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5FbmNvZGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBlbmNvZGluZyB1c2VkIGZvciB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgRW5jb2RpbmdEZXNjcmlwdGlvbiBFbmNvZGluZyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0VuY29kaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRW5jb2RpbmcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEV4dGVuc2libGUga2V5IHZhbHVlIHByb3BlcnRpZXMgZm9yIHRoZSBkb2N1bWVudC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklQcm9wZXJ0eU1hcCBDb2RleC5JU291cmNlRmlsZUluZm8uUHJvcGVydGllcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Qcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRXh0ZW5zaWJsZSBrZXkgdmFsdWUgcHJvcGVydGllcyBmb3IgdGhlIGRvY3VtZW50LlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgUHJvcGVydHlNYXAgUHJvcGVydGllcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb3BlcnRpZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9wZXJ0aWVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVwbyByZWxhdGl2ZSBwYXRoIHRvIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb1JlbGF0aXZlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeSBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvc2l0b3J5TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVuaXF1ZSBpZCBmb3IgdGhlIHNvdXJjZSBmaWxlIGNvbnRlbnQgYXMgZGVmaW5lZCBieSB0aGUgc291cmNlIGNvbnRyb2wgcHJvdmlkZXIgKGkuZS4gZ2l0IFNIQSlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBTb3VyY2VDb250cm9sQ29udGVudElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU291cmNlQ29udHJvbENvbnRlbnRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xDb250ZW50SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwcm9qZWN0IHJlbGF0aXZlIHBhdGggb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0UmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBwcm9qZWN0IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTb3VyY2VGaWxlSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xDb250ZW50SWQgPSAoKENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8pKHZhbHVlKSkuU291cmNlQ29udHJvbENvbnRlbnRJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTb3VyY2VGaWxlSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTb3VyY2VGaWxlSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoID0gKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VGaWxlSW5mbyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGVJbmZvIHtcclxuICAgICAgICAgICAgdGhpcy5tX0xpbmVzID0gKChDb2RleC5JU291cmNlRmlsZUluZm8pKHZhbHVlKSkuTGluZXM7XHJcbiAgICAgICAgICAgIHRoaXMubV9TaXplID0gKChDb2RleC5JU291cmNlRmlsZUluZm8pKHZhbHVlKSkuU2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5tX0xhbmd1YWdlID0gKChDb2RleC5JU291cmNlRmlsZUluZm8pKHZhbHVlKSkuTGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMubV9XZWJBZGRyZXNzID0gKChDb2RleC5JU291cmNlRmlsZUluZm8pKHZhbHVlKSkuV2ViQWRkcmVzcztcclxuICAgICAgICAgICAgdGhpcy5tX0VuY29kaW5nID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5FbmNvZGluZ0Rlc2NyaXB0aW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRW5jb2RpbmdEZXNjcmlwdGlvbj4oRW5jb2RpbmcsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRW5jb2RpbmdEZXNjcmlwdGlvbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5FbmNvZGluZ0Rlc2NyaXB0aW9uPikodiA9PiBuZXcgRW5jb2RpbmdEZXNjcmlwdGlvbigpLkNvcHlGcm9tPEVuY29kaW5nRGVzY3JpcHRpb24+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvcGVydGllcyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvcGVydHlNYXAsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9wZXJ0eU1hcD4oUHJvcGVydGllcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9wZXJ0eU1hcCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9wZXJ0eU1hcD4pKHYgPT4gbmV3IFByb3BlcnR5TWFwKCkuQ29weUZyb208UHJvcGVydHlNYXA+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbENvbnRlbnRJZCA9ICgoQ29kZXguSVNvdXJjZUNvbnRyb2xGaWxlSW5mbykodmFsdWUpKS5Tb3VyY2VDb250cm9sQ29udGVudElkO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZXNjcmliZXMgZW5jb2Rpbmcgc28gdGhhdCBmaWxlIG1heSBiZSByZWNvbnN0aXR1dGVkIGluIGEgYnl0ZS1pZGVudGljYWwgZm9ybVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JRW5jb2RpbmdEZXNjcmlwdGlvbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRW5jb2RpbmdEZXNjcmlwdGlvbiA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklFbmNvZGluZ0Rlc2NyaXB0aW9uIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX05hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBieXRlW10gbV9QcmVhbWJsZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRW5jb2RpbmdEZXNjcmlwdGlvbigpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRW5jb2RpbmdEZXNjcmlwdGlvbihDb2RleC5JRW5jb2RpbmdEZXNjcmlwdGlvbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208RW5jb2RpbmdEZXNjcmlwdGlvbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBlbmNvZGluZ1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGVuY29kaW5nIHByZWFtYmxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBieXRlW10gUHJlYW1ibGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9QcmVhbWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1ByZWFtYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JRW5jb2RpbmdEZXNjcmlwdGlvbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEVuY29kaW5nRGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSUVuY29kaW5nRGVzY3JpcHRpb24pKHZhbHVlKSkuTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1ByZWFtYmxlID0gKChDb2RleC5JRW5jb2RpbmdEZXNjcmlwdGlvbikodmFsdWUpKS5QcmVhbWJsZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlZmluZXMgdGV4dCBjb250ZW50cyBvZiBhIGZpbGUgYW5kIGFzc29jaWF0ZWQgZGF0YVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU291cmNlRmlsZSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU291cmNlRmlsZSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklTb3VyY2VGaWxlIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFNvdXJjZUZpbGVJbmZvIG1fSW5mbztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIG1fRXhjbHVkZUZyb21TZWFyY2g7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGUoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZUZpbGUoQ29kZXguSVNvdXJjZUZpbGUgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNvdXJjZUZpbGU+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JU291cmNlRmlsZUluZm8gQ29kZXguSVNvdXJjZUZpbGUuSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU291cmNlRmlsZUluZm8gSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0luZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JbmZvID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29udGVudCBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbnRlbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db250ZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgc2hvdWxkIGJlIGV4Y2x1ZGVkIGZyb20gdGV4dCBzZWFyY2hcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRXhjbHVkZUZyb21TZWFyY2gge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU291cmNlRmlsZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNvdXJjZUZpbGUge1xyXG4gICAgICAgICAgICB0aGlzLm1fSW5mbyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZUluZm8sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlSW5mbz4oSW5mbywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlSW5mbywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlSW5mbz4pKHYgPT4gbmV3IFNvdXJjZUZpbGVJbmZvKCkuQ29weUZyb208U291cmNlRmlsZUluZm8+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29udGVudCA9ICgoQ29kZXguSVNvdXJjZUZpbGUpKHZhbHVlKSkuQ29udGVudDtcclxuICAgICAgICAgICAgdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoID0gKChDb2RleC5JU291cmNlRmlsZSkodmFsdWUpKS5FeGNsdWRlRnJvbVNlYXJjaDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklPdXRsaW5pbmdSZWdpb24pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIE91dGxpbmluZ1JlZ2lvbiA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklPdXRsaW5pbmdSZWdpb24ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fS2luZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIExpbmVTcGFuIG1fSGVhZGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgTGluZVNwYW4gbV9Db250ZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBPdXRsaW5pbmdSZWdpb24oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIE91dGxpbmluZ1JlZ2lvbihDb2RleC5JT3V0bGluaW5nUmVnaW9uIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxPdXRsaW5pbmdSZWdpb24+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEtpbmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9LaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fS2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVmaW5lcyB0aGUgcmVnaW9uIGNvbnRhaW5pbmcgdGhlIGhlYWRlciB0ZXh0IG9mIHRoZSBvdXRsaW5pbmcgcmVnaW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JTGluZVNwYW4gQ29kZXguSU91dGxpbmluZ1JlZ2lvbi5IZWFkZXIge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuSGVhZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVmaW5lcyB0aGUgcmVnaW9uIGNvbnRhaW5pbmcgdGhlIGhlYWRlciB0ZXh0IG9mIHRoZSBvdXRsaW5pbmcgcmVnaW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBMaW5lU3BhbiBIZWFkZXIge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9IZWFkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9IZWFkZXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlZmluZXMgdGhlIHJlZ2lvbiBjb250YWluaW5nIHRoZSBjb2xsYXBzaWJsZSBjb250ZW50IHJlZ2lvbiBvZiB0aGUgb3V0bGluaW5nIHJlZ2lvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUxpbmVTcGFuIENvZGV4LklPdXRsaW5pbmdSZWdpb24uQ29udGVudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db250ZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVmaW5lcyB0aGUgcmVnaW9uIGNvbnRhaW5pbmcgdGhlIGNvbGxhcHNpYmxlIGNvbnRlbnQgcmVnaW9uIG9mIHRoZSBvdXRsaW5pbmcgcmVnaW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBMaW5lU3BhbiBDb250ZW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29udGVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklPdXRsaW5pbmdSZWdpb24gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBPdXRsaW5pbmdSZWdpb24ge1xyXG4gICAgICAgICAgICB0aGlzLm1fS2luZCA9ICgoQ29kZXguSU91dGxpbmluZ1JlZ2lvbikodmFsdWUpKS5LaW5kO1xyXG4gICAgICAgICAgICB0aGlzLm1fSGVhZGVyID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuPihIZWFkZXIsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4+KSh2ID0+IG5ldyBMaW5lU3BhbigpLkNvcHlGcm9tPExpbmVTcGFuPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX0NvbnRlbnQgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4+KENvbnRlbnQsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4+KSh2ID0+IG5ldyBMaW5lU3BhbigpLkNvcHlGcm9tPExpbmVTcGFuPih2KSkpOztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklEZWZpbml0aW9uU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRGVmaW5pdGlvblNwYW4gOiBTcGFuLCBDb2RleC5JRGVmaW5pdGlvblNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgRGVmaW5pdGlvblN5bWJvbCBtX0RlZmluaXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFBhcmFtZXRlckRlZmluaXRpb25TcGFuPiBtX1BhcmFtZXRlcnMgPSBDb2RleC5VdGlsaXRpZXMuQ29sbGVjdGlvblV0aWxpdGllcy5FbXB0eTxQYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4uQXJyYXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblNwYW4oQ29kZXguSURlZmluaXRpb25TcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208RGVmaW5pdGlvblNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TcGFuKENvZGV4LklTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWZpbml0aW9uIHN5bWJvbCByZWZlcnJlZCB0byBieSB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSURlZmluaXRpb25TeW1ib2wgQ29kZXguSURlZmluaXRpb25TcGFuLkRlZmluaXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWZpbml0aW9uIHN5bWJvbCByZWZlcnJlZCB0byBieSB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgRGVmaW5pdGlvblN5bWJvbCBEZWZpbml0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEdldHMgdGhlIGRlZmluaXRpb25zIGZvciBwYXJhbWV0ZXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4gQ29kZXguSURlZmluaXRpb25TcGFuLlBhcmFtZXRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUGFyYW1ldGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEdldHMgdGhlIGRlZmluaXRpb25zIGZvciBwYXJhbWV0ZXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFBhcmFtZXRlckRlZmluaXRpb25TcGFuPiBQYXJhbWV0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUGFyYW1ldGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlcnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklEZWZpbml0aW9uU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IERlZmluaXRpb25TcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb24gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPihEZWZpbml0aW9uLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2wsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4pKHYgPT4gbmV3IERlZmluaXRpb25TeW1ib2woKS5Db3B5RnJvbTxEZWZpbml0aW9uU3ltYm9sPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlcnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4oKChDb2RleC5JRGVmaW5pdGlvblNwYW4pKHZhbHVlKSkuUGFyYW1ldGVycywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRlZmluaXRpb25TcGFuPikoX3YgPT4gbmV3IFBhcmFtZXRlckRlZmluaXRpb25TcGFuKCkuQ29weUZyb208UGFyYW1ldGVyRGVmaW5pdGlvblNwYW4+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNwYW4+KCgoQ29kZXguSVNwYW4pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gQSBzcGVjaWFsaXplZCBkZWZpbml0aW9uIHNwYW4gcmVmZXJyaW5nIHRvIGEgcGFyYW1ldGVyIG9mIGEgbWV0aG9kL3Byb3BlcnR5XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4gOiBMaW5lU3BhbiwgQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1BhcmFtZXRlckluZGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbihDb2RleC5JUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQYXJhbWV0ZXJEZWZpbml0aW9uU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4oQ29kZXguSUxpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGluZGV4IG9mIHRoZSBwYXJhbWV0ZXIgaW4gdGhlIGxpc3Qgb2YgcGFyYW1ldGVycyBmb3IgdGhlIG1ldGhvZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFBhcmFtZXRlckluZGV4IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUGFyYW1ldGVySW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9QYXJhbWV0ZXJJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVBhcmFtZXRlckRlZmluaXRpb25TcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVySW5kZXggPSAoKENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbikodmFsdWUpKS5QYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5tX05hbWUgPSAoKENvZGV4LklQYXJhbWV0ZXJEZWZpbml0aW9uU3BhbikodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPExpbmVTcGFuPigoKENvZGV4LklMaW5lU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVmZXJlbmNlU3BhbiA6IFN5bWJvbFNwYW4sIENvZGV4LklSZWZlcmVuY2VTcGFuIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbElkIG1fUmVsYXRlZERlZmluaXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBSZWZlcmVuY2VTeW1ib2wgbV9SZWZlcmVuY2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PFBhcmFtZXRlclJlZmVyZW5jZVNwYW4+IG1fUGFyYW1ldGVycyA9IENvZGV4LlV0aWxpdGllcy5Db2xsZWN0aW9uVXRpbGl0aWVzLkVtcHR5PFBhcmFtZXRlclJlZmVyZW5jZVNwYW4+LkFycmF5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTcGFuKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU3BhbihDb2RleC5JUmVmZXJlbmNlU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNwYW4oQ29kZXguSVN5bWJvbFNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTcGFuKENvZGV4LklUZXh0TGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTcGFuKENvZGV4LklMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gR2V0cyB0aGUgc3ltYm9sIGlkIG9mIHRoZSBkZWZpbml0aW9uIHdoaWNoIHByb3ZpZGVzIHRoaXMgcmVmZXJlbmNlXHJcbiAgICAgICAgLy8vIChpLmUuIG1ldGhvZCBkZWZpbml0aW9uIGZvciBpbnRlcmZhY2UgaW1wbGVtZW50YXRpb24pXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xJZCBSZWxhdGVkRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlbGF0ZWREZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVsYXRlZERlZmluaXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZWZlcmVuY2Ugc3ltYm9sIHJlZmVycmVkIHRvIGJ5IHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JUmVmZXJlbmNlU3ltYm9sIENvZGV4LklSZWZlcmVuY2VTcGFuLlJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVmZXJlbmNlIHN5bWJvbCByZWZlcnJlZCB0byBieSB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgUmVmZXJlbmNlU3ltYm9sIFJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gR2V0cyB0aGUgcmVmZXJlbmNlcyB0byBwYXJhbWV0ZXJzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPiBDb2RleC5JUmVmZXJlbmNlU3Bhbi5QYXJhbWV0ZXJzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBHZXRzIHRoZSByZWZlcmVuY2VzIHRvIHBhcmFtZXRlcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8UGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4gUGFyYW1ldGVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1BhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9QYXJhbWV0ZXJzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVmZXJlbmNlU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZmVyZW5jZVNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVsYXRlZERlZmluaXRpb24gPSAoKENvZGV4LklSZWZlcmVuY2VTcGFuKSh2YWx1ZSkpLlJlbGF0ZWREZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTeW1ib2w+KFJlZmVyZW5jZSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTeW1ib2wsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3ltYm9sPikodiA9PiBuZXcgUmVmZXJlbmNlU3ltYm9sKCkuQ29weUZyb208UmVmZXJlbmNlU3ltYm9sPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX1BhcmFtZXRlcnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyUmVmZXJlbmNlU3Bhbj4oKChDb2RleC5JUmVmZXJlbmNlU3BhbikodmFsdWUpKS5QYXJhbWV0ZXJzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlclJlZmVyZW5jZVNwYW4+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlclJlZmVyZW5jZVNwYW4+KShfdiA9PiBuZXcgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbigpLkNvcHlGcm9tPFBhcmFtZXRlclJlZmVyZW5jZVNwYW4+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFN5bWJvbFNwYW4+KCgoQ29kZXguSVN5bWJvbFNwYW4pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gQSBzcGVjaWFsaXplZCByZWZlcmVuY2Ugc3BhbiByZWZlcnJpbmcgdG8gYSBwYXJhbWV0ZXIgdG8gYSBtZXRob2QvcHJvcGVydHlcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4gOiBTeW1ib2xTcGFuLCBDb2RleC5JUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9QYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFBhcmFtZXRlclJlZmVyZW5jZVNwYW4oQ29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKENvZGV4LklTeW1ib2xTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbihDb2RleC5JVGV4dExpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbihDb2RleC5JTGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuKENvZGV4LklTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpbmRleCBvZiB0aGUgcGFyYW1ldGVyIGluIHRoZSBsaXN0IG9mIHBhcmFtZXRlcnMgZm9yIHRoZSBtZXRob2RcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBQYXJhbWV0ZXJJbmRleCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1BhcmFtZXRlckluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUGFyYW1ldGVySW5kZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQYXJhbWV0ZXJSZWZlcmVuY2VTcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9QYXJhbWV0ZXJJbmRleCA9ICgoQ29kZXguSVBhcmFtZXRlclJlZmVyZW5jZVNwYW4pKHZhbHVlKSkuUGFyYW1ldGVySW5kZXg7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U3ltYm9sU3Bhbj4oKChDb2RleC5JU3ltYm9sU3BhbikodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZWZpbmVzIGEgY2xhc3NpZmllZCBzcGFuIG9mIHRleHRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ2xhc3NpZmljYXRpb25TcGFuIDogU3BhbiwgQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9EZWZhdWx0Q2xhc3NpZmljYXRpb25Db2xvcjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NsYXNzaWZpY2F0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fTG9jYWxHcm91cElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDbGFzc2lmaWNhdGlvblNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDbGFzc2lmaWNhdGlvblNwYW4oQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENsYXNzaWZpY2F0aW9uU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ2xhc3NpZmljYXRpb25TcGFuKENvZGV4LklTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWZhdWx0IGNsYXNzaWZpY2F0aW9uIGNvbG9yIGZvciB0aGUgc3Bhbi4gVGhpcyBpcyB1c2VkIGZvclxyXG4gICAgICAgIC8vLyBjb250ZXh0cyB3aGVyZSBhIG1hcHBpbmcgZnJvbSBjbGFzc2lmaWNhdGlvbiBpZCB0byBjb2xvciBpcyBub3RcclxuICAgICAgICAvLy8gYXZhaWxhYmxlLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IERlZmF1bHRDbGFzc2lmaWNhdGlvbkNvbG9yIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVmYXVsdENsYXNzaWZpY2F0aW9uQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWZhdWx0Q2xhc3NpZmljYXRpb25Db2xvciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNsYXNzaWZpY2F0aW9uIGlkZW50aWZpZXIgZm9yIHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgQ2xhc3NpZmljYXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9DbGFzc2lmaWNhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NsYXNzaWZpY2F0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciB0byB0aGUgbG9jYWwgZ3JvdXAgb2Ygc3BhbnMgd2hpY2ggcmVmZXIgdG8gdGhlIHNhbWUgY29tbW9uIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IExvY2FsR3JvdXBJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xvY2FsR3JvdXBJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xvY2FsR3JvdXBJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENsYXNzaWZpY2F0aW9uU3BhbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZWZhdWx0Q2xhc3NpZmljYXRpb25Db2xvciA9ICgoQ29kZXguSUNsYXNzaWZpY2F0aW9uU3BhbikodmFsdWUpKS5EZWZhdWx0Q2xhc3NpZmljYXRpb25Db2xvcjtcclxuICAgICAgICAgICAgdGhpcy5tX0NsYXNzaWZpY2F0aW9uID0gKChDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuKSh2YWx1ZSkpLkNsYXNzaWZpY2F0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fTG9jYWxHcm91cElkID0gKChDb2RleC5JQ2xhc3NpZmljYXRpb25TcGFuKSh2YWx1ZSkpLkxvY2FsR3JvdXBJZDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTcGFuPigoKENvZGV4LklTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTeW1ib2xTcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTeW1ib2xTcGFuIDogVGV4dExpbmVTcGFuLCBDb2RleC5JU3ltYm9sU3BhbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN5bWJvbFNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2xTcGFuKENvZGV4LklTeW1ib2xTcGFuIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U3ltYm9sU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3ltYm9sU3BhbihDb2RleC5JVGV4dExpbmVTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3ltYm9sU3BhbihDb2RleC5JTGluZVNwYW4gdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2xTcGFuKENvZGV4LklTcGFuIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTeW1ib2xTcGFuIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU3ltYm9sU3BhbiB7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208VGV4dExpbmVTcGFuPigoKENvZGV4LklUZXh0TGluZVNwYW4pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVRleHRMaW5lU3BhbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgVGV4dExpbmVTcGFuIDogTGluZVNwYW4sIENvZGV4LklUZXh0TGluZVNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTGluZVNwYW5UZXh0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0TGluZVNwYW4oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0TGluZVNwYW4oQ29kZXguSVRleHRMaW5lU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFRleHRMaW5lU3Bhbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dExpbmVTcGFuKENvZGV4LklMaW5lU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbGluZSB0ZXh0XHJcbiAgICAgICAgLy8vIFRPRE86IEl0IHdvdWxkIGJlIG5pY2UgdG8gbm90IHN0b3JlIHRoaXMgaGVyZSBhbmQgaW5zdGVhZCBhcHBseSBpdCBhcyBhIGpvaW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBMaW5lU3BhblRleHQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MaW5lU3BhblRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MaW5lU3BhblRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklUZXh0TGluZVNwYW4gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBUZXh0TGluZVNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fTGluZVNwYW5UZXh0ID0gKChDb2RleC5JVGV4dExpbmVTcGFuKSh2YWx1ZSkpLkxpbmVTcGFuVGV4dDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxMaW5lU3Bhbj4oKChDb2RleC5JTGluZVNwYW4pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUxpbmVTcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBMaW5lU3BhbiA6IFNwYW4sIENvZGV4LklMaW5lU3BhbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uTnVsbGFibGU8aW50PiBtX0xpbmVJbmRleDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5OdWxsYWJsZTxpbnQ+IG1fTGluZU51bWJlcjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX0xpbmVTcGFuU3RhcnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9MaW5lT2Zmc2V0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMaW5lU3BhbigpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExpbmVTcGFuKENvZGV4LklMaW5lU3BhbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPExpbmVTcGFuPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMaW5lU3BhbihDb2RleC5JU3BhbiB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgMC1iYXNlZCBpbmRleCBvZiB0aGUgbGluZSBjb250YWluaW5nIHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgTGluZUluZGV4IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvZXJjZUxpbmVJbmRleCh0aGlzLm1fTGluZUluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xpbmVJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIDEtYmFzZWQgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgY29udGFpbmluZyB0aGUgc3BhblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IExpbmVOdW1iZXIge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29lcmNlTGluZU51bWJlcih0aGlzLm1fTGluZU51bWJlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MaW5lTnVtYmVyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY2hhcmFjdGVyIHBvc2l0aW9uIHdoZXJlIHRoZSBzcGFuIHN0YXJ0cyBpbiB0aGUgbGluZSB0ZXh0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgTGluZVNwYW5TdGFydCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xpbmVTcGFuU3RhcnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9MaW5lU3BhblN0YXJ0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJZiBwb3NpdGl2ZSwgdGhlIG9mZnNldCBvZiB0aGUgbGluZSBzcGFuIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGluZVxyXG4gICAgICAgIC8vLyBJZiBuZWdhdGl2ZSwgdGhlIG9mZnNldCBvZiB0aGUgbGluZXNwYW4gZnJvbSB0aGUgZW5kIG9mIHRoZSBuZXh0IGxpbmVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBMaW5lT2Zmc2V0IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGluZU9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xpbmVPZmZzZXQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklMaW5lU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IExpbmVTcGFuIHtcclxuICAgICAgICAgICAgdGhpcy5tX0xpbmVJbmRleCA9ICgoQ29kZXguSUxpbmVTcGFuKSh2YWx1ZSkpLkxpbmVJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5tX0xpbmVOdW1iZXIgPSAoKENvZGV4LklMaW5lU3BhbikodmFsdWUpKS5MaW5lTnVtYmVyO1xyXG4gICAgICAgICAgICB0aGlzLm1fTGluZVNwYW5TdGFydCA9ICgoQ29kZXguSUxpbmVTcGFuKSh2YWx1ZSkpLkxpbmVTcGFuU3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9MaW5lT2Zmc2V0ID0gKChDb2RleC5JTGluZVNwYW4pKHZhbHVlKSkuTGluZU9mZnNldDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTcGFuPigoKENvZGV4LklTcGFuKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTcGFuKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTcGFuIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVNwYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fU3RhcnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9MZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNwYW4oKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNwYW4oQ29kZXguSVNwYW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNwYW4+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgYWJzb2x1dGUgY2hhcmFjdGVyIG9mZnNldCBvZiB0aGUgc3BhbiB3aXRoaW4gdGhlIGRvY3VtZW50XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgU3RhcnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1N0YXJ0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbGVuZ3RoIG9mIHRoZSBzcGFuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgTGVuZ3RoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fTGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGVuZ3RoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU3BhbiB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNwYW4ge1xyXG4gICAgICAgICAgICB0aGlzLm1fU3RhcnQgPSAoKENvZGV4LklTcGFuKSh2YWx1ZSkpLlN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLm1fTGVuZ3RoID0gKChDb2RleC5JU3BhbikodmFsdWUpKS5MZW5ndGg7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29kZVJldmlldykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29kZVJldmlldyA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlUmV2aWV3IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Vcmw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5Db2RlUmV2aWV3U3RhdHVzIG1fU3RhdHVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3KENvZGV4LklDb2RlUmV2aWV3IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb2RlUmV2aWV3Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVcmwgZm9yIGFjY2Vzc2luZyBjb2RlIHJldmlldyBpbiBzb3VyY2UgY29udHJvbCBtYW5hZ2VtZW50IChpLmUuIEdpdEh1YiBvciBWU08pXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVXJsIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVXJsID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguQ29kZVJldmlld1N0YXR1cyBTdGF0dXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TdGF0dXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TdGF0dXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb2RlUmV2aWV3IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29kZVJldmlldyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9JZCA9ICgoQ29kZXguSUNvZGVSZXZpZXcpKHZhbHVlKSkuSWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9ICgoQ29kZXguSUNvZGVSZXZpZXcpKHZhbHVlKSkuRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9VcmwgPSAoKENvZGV4LklDb2RlUmV2aWV3KSh2YWx1ZSkpLlVybDtcclxuICAgICAgICAgICAgdGhpcy5tX1N0YXR1cyA9ICgoQ29kZXguSUNvZGVSZXZpZXcpKHZhbHVlKSkuU3RhdHVzO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvZGVSZXZpZXdJdGVyYXRpb24gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9JdGVyYXRpb25OdW1iZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXZpZXdJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb2RlUmV2aWV3RmlsZT4gbV9GaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvZGVSZXZpZXdGaWxlPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3SXRlcmF0aW9uKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3SXRlcmF0aW9uKENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb2RlUmV2aWV3SXRlcmF0aW9uPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBJdGVyYXRpb25OdW1iZXIge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JdGVyYXRpb25OdW1iZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JdGVyYXRpb25OdW1iZXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmV2aWV3SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXZpZXdJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Jldmlld0lkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSUNvZGVSZXZpZXdGaWxlPiBDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbi5GaWxlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5GaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvZGVSZXZpZXdGaWxlPiBGaWxlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29kZVJldmlld0l0ZXJhdGlvbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9JdGVyYXRpb25OdW1iZXIgPSAoKENvZGV4LklDb2RlUmV2aWV3SXRlcmF0aW9uKSh2YWx1ZSkpLkl0ZXJhdGlvbk51bWJlcjtcclxuICAgICAgICAgICAgdGhpcy5tX1Jldmlld0lkID0gKChDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbikodmFsdWUpKS5SZXZpZXdJZDtcclxuICAgICAgICAgICAgdGhpcy5tX0Rlc2NyaXB0aW9uID0gKChDb2RleC5JQ29kZVJldmlld0l0ZXJhdGlvbikodmFsdWUpKS5EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0ZpbGU+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSUNvZGVSZXZpZXdGaWxlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0ZpbGU+KCgoQ29kZXguSUNvZGVSZXZpZXdJdGVyYXRpb24pKHZhbHVlKSkuRmlsZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvZGVSZXZpZXdGaWxlLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdGaWxlPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklDb2RlUmV2aWV3RmlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdGaWxlPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb2RlUmV2aWV3RmlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3RmlsZT4pKF92ID0+IG5ldyBDb2RlUmV2aWV3RmlsZSgpLkNvcHlGcm9tPENvZGVSZXZpZXdGaWxlPihfdikpKSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3ZXJJbmZvKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RlUmV2aWV3ZXJJbmZvIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNvZGVSZXZpZXdlckluZm8ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld2VySW5mbygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld2VySW5mbyhDb2RleC5JQ29kZVJldmlld2VySW5mbyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29kZVJldmlld2VySW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29kZVJldmlld2VySW5mbyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvZGVSZXZpZXdlckluZm8ge1xyXG4gICAgICAgICAgICB0aGlzLm1fTmFtZSA9ICgoQ29kZXguSUNvZGVSZXZpZXdlckluZm8pKHZhbHVlKSkuTmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3RmlsZSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29kZVJldmlld0ZpbGUgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29kZVJldmlld0ZpbGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fU3RhcnRJdGVyYXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRmlsZUlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQmFzZWxpbmVGaWxlSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5GaWxlQ2hhbmdlS2luZCBtX0NoYW5nZUtpbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdGaWxlKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3RmlsZShDb2RleC5JQ29kZVJldmlld0ZpbGUgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvZGVSZXZpZXdGaWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGZpcnN0IGl0ZXJhdGlvbiBpbiB3aGljaCB0aGlzIGZpbGUgYXBwZWFyc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFN0YXJ0SXRlcmF0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU3RhcnRJdGVyYXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TdGFydEl0ZXJhdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlbGF0aXZlIHBhdGggaW4gdGhlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBmaWxlIGlkIG9mIHRoZSBuZXcgdmVyc2lvbiBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEZpbGVJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbGVJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGVJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGZpbGUgaWQgb2YgdGhlIGJhc2VsaW5lIHZlcnNpb24gb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBCYXNlbGluZUZpbGVJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Jhc2VsaW5lRmlsZUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQmFzZWxpbmVGaWxlSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0eXBlIG9mIGNoYW5nZSBhcHBsaWVkIHRvIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5GaWxlQ2hhbmdlS2luZCBDaGFuZ2VLaW5kIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ2hhbmdlS2luZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NoYW5nZUtpbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb2RlUmV2aWV3RmlsZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvZGVSZXZpZXdGaWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tX1N0YXJ0SXRlcmF0aW9uID0gKChDb2RleC5JQ29kZVJldmlld0ZpbGUpKHZhbHVlKSkuU3RhcnRJdGVyYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JQ29kZVJldmlld0ZpbGUpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGVJZCA9ICgoQ29kZXguSUNvZGVSZXZpZXdGaWxlKSh2YWx1ZSkpLkZpbGVJZDtcclxuICAgICAgICAgICAgdGhpcy5tX0Jhc2VsaW5lRmlsZUlkID0gKChDb2RleC5JQ29kZVJldmlld0ZpbGUpKHZhbHVlKSkuQmFzZWxpbmVGaWxlSWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9DaGFuZ2VLaW5kID0gKChDb2RleC5JQ29kZVJldmlld0ZpbGUpKHZhbHVlKSkuQ2hhbmdlS2luZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29kZVJldmlld0NvbW1lbnRUaHJlYWQgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgTGluZVNwYW4gbV9PcmlnaW5hbFNwYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9TdGFydEl0ZXJhdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5EYXRlVGltZSBtX0xhc3RVcGRhdGVkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRmlsZVJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvZGVSZXZpZXdDb21tZW50PiBtX0NvbW1lbnRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29kZVJldmlld0NvbW1lbnQ+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdDb21tZW50VGhyZWFkKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb2RlUmV2aWV3Q29tbWVudFRocmVhZChDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvZGVSZXZpZXdDb21tZW50VGhyZWFkPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG9yaWdpbmFsIGxvY2F0aW9uIGZvciB0aGUgY29tbWVudCBpbiB0aGUgb3JpZ2luYXRpbmcgaXRlcmF0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JTGluZVNwYW4gQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkLk9yaWdpbmFsU3BhbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5PcmlnaW5hbFNwYW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgb3JpZ2luYWwgbG9jYXRpb24gZm9yIHRoZSBjb21tZW50IGluIHRoZSBvcmlnaW5hdGluZyBpdGVyYXRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIExpbmVTcGFuIE9yaWdpbmFsU3BhbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX09yaWdpbmFsU3BhbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX09yaWdpbmFsU3BhbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGl0ZXJhdGlvbiB3aGVyZSB0aGUgY29tbWVudCBvcmlnaW5hdGVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgU3RhcnRJdGVyYXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TdGFydEl0ZXJhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1N0YXJ0SXRlcmF0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbGFzdCB0aWVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5EYXRlVGltZSBMYXN0VXBkYXRlZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0xhc3RVcGRhdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTGFzdFVwZGF0ZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRmlsZVJlcG9SZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9GaWxlUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGVSZXBvUmVsYXRpdmVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JQ29kZVJldmlld0NvbW1lbnQ+IENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZC5Db21tZW50cyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21tZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvZGVSZXZpZXdDb21tZW50PiBDb21tZW50cyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1lbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWVudHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvZGVSZXZpZXdDb21tZW50VGhyZWFkIHtcclxuICAgICAgICAgICAgdGhpcy5tX09yaWdpbmFsU3BhbiA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5MaW5lU3Bhbj4oT3JpZ2luYWxTcGFuLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxpbmVTcGFuPikodiA9PiBuZXcgTGluZVNwYW4oKS5Db3B5RnJvbTxMaW5lU3Bhbj4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9TdGFydEl0ZXJhdGlvbiA9ICgoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50VGhyZWFkKSh2YWx1ZSkpLlN0YXJ0SXRlcmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fTGFzdFVwZGF0ZWQgPSAoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCkodmFsdWUpKS5MYXN0VXBkYXRlZDtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGVSZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JQ29kZVJldmlld0NvbW1lbnRUaHJlYWQpKHZhbHVlKSkuRmlsZVJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21tZW50cyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvZGVSZXZpZXdDb21tZW50PihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklDb2RlUmV2aWV3Q29tbWVudCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdDb21tZW50PigoKENvZGV4LklDb2RlUmV2aWV3Q29tbWVudFRocmVhZCkodmFsdWUpKS5Db21tZW50cywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29kZVJldmlld0NvbW1lbnQsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0NvbW1lbnQ+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSUNvZGVSZXZpZXdDb21tZW50LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0NvbW1lbnQ+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvZGVSZXZpZXdDb21tZW50LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdDb21tZW50PikoX3YgPT4gbmV3IENvZGVSZXZpZXdDb21tZW50KCkuQ29weUZyb208Q29kZVJldmlld0NvbW1lbnQ+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb2RlUmV2aWV3Q29tbWVudCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9UZXh0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmV2aWV3ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5Db21tZW50SW1wb3J0YW5jZSBtX0ltcG9ydGFuY2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uRGF0ZVRpbWUgbV9Db21tZW50VGltZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29kZVJldmlld0NvbW1lbnQoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvZGVSZXZpZXdDb21tZW50KENvZGV4LklDb2RlUmV2aWV3Q29tbWVudCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29kZVJldmlld0NvbW1lbnQ+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFRleHQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9UZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJldmlld2VyIHdoaWNoIG1hZGUgdGhlIGNvbW1lbnRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXZpZXdlciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Jldmlld2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmV2aWV3ZXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpbXBvcnRhbmNlIG9mIHRoZSBjb21tZW50XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5Db21tZW50SW1wb3J0YW5jZSBJbXBvcnRhbmNlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSW1wb3J0YW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ltcG9ydGFuY2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0aW1lIHdoZW4gdGhlIGNvbW1lbnQgd2FzIHN1Ym1pdHRlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkRhdGVUaW1lIENvbW1lbnRUaW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWVudFRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21tZW50VGltZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUNvZGVSZXZpZXdDb21tZW50IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQ29kZVJldmlld0NvbW1lbnQge1xyXG4gICAgICAgICAgICB0aGlzLm1fVGV4dCA9ICgoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50KSh2YWx1ZSkpLlRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXZpZXdlciA9ICgoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50KSh2YWx1ZSkpLlJldmlld2VyO1xyXG4gICAgICAgICAgICB0aGlzLm1fSW1wb3J0YW5jZSA9ICgoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50KSh2YWx1ZSkpLkltcG9ydGFuY2U7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21tZW50VGltZSA9ICgoQ29kZXguSUNvZGVSZXZpZXdDb21tZW50KSh2YWx1ZSkpLkNvbW1lbnRUaW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUxhbmd1YWdlSW5mbykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgTGFuZ3VhZ2VJbmZvIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUxhbmd1YWdlSW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9OYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDbGFzc2lmaWNhdGlvblN0eWxlPiBtX0NsYXNzaWZpY2F0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENsYXNzaWZpY2F0aW9uU3R5bGU+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExhbmd1YWdlSW5mbygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGFuZ3VhZ2VJbmZvKENvZGV4LklMYW5ndWFnZUluZm8gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPExhbmd1YWdlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBsYW5ndWFnZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVzY3JpYmVzIHRoZSBzdHlsZSBmb3IgY2xhc3NpZmllZCBzcGFucy4gU2VlIDxzZWUgY3JlZj1cIlA6Q29kZXguSUJvdW5kU291cmNlSW5mby5DbGFzc2lmaWNhdGlvbnNcIiAvPi5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGU+IENvZGV4LklMYW5ndWFnZUluZm8uQ2xhc3NpZmljYXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlc2NyaWJlcyB0aGUgc3R5bGUgZm9yIGNsYXNzaWZpZWQgc3BhbnMuIFNlZSA8c2VlIGNyZWY9XCJQOkNvZGV4LklCb3VuZFNvdXJjZUluZm8uQ2xhc3NpZmljYXRpb25zXCIgLz4uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENsYXNzaWZpY2F0aW9uU3R5bGU+IENsYXNzaWZpY2F0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NsYXNzaWZpY2F0aW9ucyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUxhbmd1YWdlSW5mbyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IExhbmd1YWdlSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JTGFuZ3VhZ2VJbmZvKSh2YWx1ZSkpLk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9DbGFzc2lmaWNhdGlvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDbGFzc2lmaWNhdGlvblN0eWxlPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ2xhc3NpZmljYXRpb25TdHlsZT4oKChDb2RleC5JTGFuZ3VhZ2VJbmZvKSh2YWx1ZSkpLkNsYXNzaWZpY2F0aW9ucywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblN0eWxlPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ2xhc3NpZmljYXRpb25TdHlsZT4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblN0eWxlPikoX3YgPT4gbmV3IENsYXNzaWZpY2F0aW9uU3R5bGUoKS5Db3B5RnJvbTxDbGFzc2lmaWNhdGlvblN0eWxlPihfdikpKSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERlc2NyaWJlcyBzdHlsaW5nIGZvciBhIGdpdmVuIGNsYXNzaWZpY2F0aW9uXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDbGFzc2lmaWNhdGlvblN0eWxlIDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSUNsYXNzaWZpY2F0aW9uU3R5bGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fQ29sb3I7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIG1fSXRhbGljO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ2xhc3NpZmljYXRpb25TdHlsZSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ2xhc3NpZmljYXRpb25TdHlsZShDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q2xhc3NpZmljYXRpb25TdHlsZT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkZWZhdWx0IGNsYXNzaWZpY2F0aW9uIGNvbG9yIGZvciB0aGUgY2xhc3NpZmljYXRpb24uIFRoaXMgaXMgdXNlZCBmb3JcclxuICAgICAgICAvLy8gY29udGV4dHMgd2hlcmUgYSBtYXBwaW5nIGZyb20gY2xhc3NpZmljYXRpb24gaWQgdG8gY29sb3IgaXMgbm90XHJcbiAgICAgICAgLy8vIGF2YWlsYWJsZS5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBDb2xvciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzcGFucyBjbGFzc2lmaWVkIHdpdGggdGhpcyBjbGFzc2lmaWNhdGlvbiBzaG91bGQgaGF2ZSBpdGFsaWMgZm9udCBieSBkZWZhdWx0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEl0YWxpYyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0l0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0l0YWxpYyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGNsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENsYXNzaWZpY2F0aW9uU3R5bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29sb3IgPSAoKENvZGV4LklDbGFzc2lmaWNhdGlvblN0eWxlKSh2YWx1ZSkpLkNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLm1fSXRhbGljID0gKChDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSkodmFsdWUpKS5JdGFsaWM7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JQ2xhc3NpZmljYXRpb25TdHlsZSkodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb2plY3QpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEFuYWx5emVkUHJvamVjdCA6IFByb2plY3RTY29wZUVudGl0eSwgQ29kZXguSVByb2plY3Qge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdEtpbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFByb2plY3RGaWxlTGluaz4gbV9GaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFByb2plY3RGaWxlTGluaz4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UmVmZXJlbmNlZFByb2plY3Q+IG1fUHJvamVjdFJlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZWZlcmVuY2VkUHJvamVjdD4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQW5hbHl6ZWRQcm9qZWN0KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQW5hbHl6ZWRQcm9qZWN0KENvZGV4LklQcm9qZWN0IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208QW5hbHl6ZWRQcm9qZWN0Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBBbmFseXplZFByb2plY3QoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEFuYWx5emVkUHJvamVjdChDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwcm9qZWN0IGtpbmQgKHNlZSA8c2VlIGNyZWY9XCJUOkNvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RLaW5kXCIgLz4pXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdEtpbmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0S2luZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RLaW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZWZlcmVuY2VzIHRvIGZpbGVzIGluIHRoZSBwcm9qZWN0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklQcm9qZWN0RmlsZUxpbms+IENvZGV4LklQcm9qZWN0LkZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gUmVmZXJlbmNlcyB0byBmaWxlcyBpbiB0aGUgcHJvamVjdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQcm9qZWN0RmlsZUxpbms+IEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWxlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRGVzY3JpcHRpb25zIG9mIHJlZmVyZW5jZWQgcHJvamVjdHMgYW5kIHVzZWQgZGVmaW5pdGlvbnMgZnJvbSB0aGUgcHJvamVjdHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVJlZmVyZW5jZWRQcm9qZWN0PiBDb2RleC5JUHJvamVjdC5Qcm9qZWN0UmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Qcm9qZWN0UmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlc2NyaXB0aW9ucyBvZiByZWZlcmVuY2VkIHByb2plY3RzIGFuZCB1c2VkIGRlZmluaXRpb25zIGZyb20gdGhlIHByb2plY3RzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFJlZmVyZW5jZWRQcm9qZWN0PiBQcm9qZWN0UmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RSZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlZmVyZW5jZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogQW5hbHl6ZWRQcm9qZWN0IHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RLaW5kID0gKChDb2RleC5JUHJvamVjdCkodmFsdWUpKS5Qcm9qZWN0S2luZDtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UHJvamVjdEZpbGVMaW5rPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklQcm9qZWN0RmlsZUxpbmssZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0RmlsZUxpbms+KCgoQ29kZXguSVByb2plY3QpKHZhbHVlKSkuRmlsZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVByb2plY3RGaWxlTGluaywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0RmlsZUxpbms+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSVByb2plY3RGaWxlTGluayxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RGaWxlTGluaz4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUHJvamVjdEZpbGVMaW5rLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RGaWxlTGluaz4pKF92ID0+IG5ldyBQcm9qZWN0RmlsZUxpbmsoKS5Db3B5RnJvbTxQcm9qZWN0RmlsZUxpbms+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZWZlcmVuY2VkUHJvamVjdD4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlZFByb2plY3QsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdD4oKChDb2RleC5JUHJvamVjdCkodmFsdWUpKS5Qcm9qZWN0UmVmZXJlbmNlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JUmVmZXJlbmNlZFByb2plY3QsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3Q+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZWRQcm9qZWN0LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3Q+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVJlZmVyZW5jZWRQcm9qZWN0LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZWRQcm9qZWN0PikoX3YgPT4gbmV3IFJlZmVyZW5jZWRQcm9qZWN0KCkuQ29weUZyb208UmVmZXJlbmNlZFByb2plY3Q+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFByb2plY3RTY29wZUVudGl0eT4oKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZWZlcmVuY2VkUHJvamVjdCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVmZXJlbmNlZFByb2plY3QgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUmVmZXJlbmNlZFByb2plY3Qge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUHJvamVjdElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEZWZpbml0aW9uU3ltYm9sPiBtX0RlZmluaXRpb25zID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RGVmaW5pdGlvblN5bWJvbD4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0Rpc3BsYXlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgUHJvcGVydHlNYXAgbV9Qcm9wZXJ0aWVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VkUHJvamVjdCgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlZFByb2plY3QoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VkUHJvamVjdD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIG9mIHRoZSByZWZlcmVuY2VkIHByb2plY3RcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVzZWQgZGVmaW5pdGlvbnMgZm9yIHRoZSBwcm9qZWN0LiBTb3J0ZWQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklEZWZpbml0aW9uU3ltYm9sPiBDb2RleC5JUmVmZXJlbmNlZFByb2plY3QuRGVmaW5pdGlvbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRGVmaW5pdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVc2VkIGRlZmluaXRpb25zIGZvciB0aGUgcHJvamVjdC4gU29ydGVkLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEZWZpbml0aW9uU3ltYm9sPiBEZWZpbml0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlZmluaXRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHByb2plY3RcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEaXNwbGF5TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Rpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGlzcGxheU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBwcm9qZWN0LiBTdWNoIGFzIFZlcnNpb24sIFB1YmxpY0tleSwgZXRjLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVByb3BlcnR5TWFwIENvZGV4LklSZWZlcmVuY2VkUHJvamVjdC5Qcm9wZXJ0aWVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcHJvcGVydGllcyBvZiB0aGUgcHJvamVjdC4gU3VjaCBhcyBWZXJzaW9uLCBQdWJsaWNLZXksIGV0Yy5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFByb3BlcnR5TWFwIFByb3BlcnRpZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvcGVydGllcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlZFByb2plY3Qge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUmVmZXJlbmNlZFByb2plY3QpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEZWZpbml0aW9uU3ltYm9sPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklEZWZpbml0aW9uU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4oKChDb2RleC5JUmVmZXJlbmNlZFByb2plY3QpKHZhbHVlKSkuRGVmaW5pdGlvbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2wsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2wsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4pKF92ID0+IG5ldyBEZWZpbml0aW9uU3ltYm9sKCkuQ29weUZyb208RGVmaW5pdGlvblN5bWJvbD4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9EaXNwbGF5TmFtZSA9ICgoQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0KSh2YWx1ZSkpLkRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvcGVydGllcyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUHJvcGVydHlNYXAsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9wZXJ0eU1hcD4oUHJvcGVydGllcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9wZXJ0eU1hcCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Qcm9wZXJ0eU1hcD4pKHYgPT4gbmV3IFByb3BlcnR5TWFwKCkuQ29weUZyb208UHJvcGVydHlNYXA+KHYpKSk7O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gTk9URTogRG8gbm90IHNldCA8c2VlIGNyZWY9XCJQOkNvZGV4LklSZXBvU2NvcGVFbnRpdHkuUmVwb3NpdG9yeU5hbWVcIiAvPlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvamVjdEZpbGVMaW5rKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9qZWN0RmlsZUxpbmsgOiBQcm9qZWN0RmlsZVNjb3BlRW50aXR5LCBDb2RleC5JUHJvamVjdEZpbGVMaW5rIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0ZpbGVJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVMaW5rKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVMaW5rKENvZGV4LklQcm9qZWN0RmlsZUxpbmsgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0RmlsZUxpbms+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RGaWxlTGluayhDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBVbmlxdWUgaWRlbnRpZmllciBmb3IgZmlsZVxyXG4gICAgICAgIC8vLyBUT0RPOiBNYWtlIHRoaXMgY2hlY2tzdW0gYW5kIHNlYXJjaGFibGUgYW5kIHVzZSBmb3IgZGlzY292ZXJpbmcgY29tbWl0IGZyb20gUERCLlxyXG4gICAgICAgIC8vLyBUT0RPOiBXaGF0IGlzIHRoaXM/XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRmlsZUlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZUlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdEZpbGVMaW5rIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdEZpbGVMaW5rIHtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGVJZCA9ICgoQ29kZXguSVByb2plY3RGaWxlTGluaykodmFsdWUpKS5GaWxlSWQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UHJvamVjdEZpbGVTY29wZUVudGl0eT4oKChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZWZpbmVzIGRvY3VtZW50YXRpb24gYWJvdXQgYSBzeW1ib2xcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBEb2N1bWVudGF0aW9uSW5mbyA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklEb2N1bWVudGF0aW9uSW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZWNsYXJhdGlvbk5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db21tZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3ltYm9sIG1fQXNzb2NpYXRlZFN5bWJvbDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4gbV9SZWZlcmVuY2VzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8RG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1N1bW1hcnk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZW1hcmtzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+IG1fQXJndW1lbnRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBtX1R5cGVQYXJhbWV0ZXJzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBtX0V4Y2VwdGlvbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERvY3VtZW50YXRpb25JbmZvKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEb2N1bWVudGF0aW9uSW5mbyhDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8gdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPERvY3VtZW50YXRpb25JbmZvPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlY2xhcmF0aW9uIG5hbWUgZm9yIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEZWNsYXJhdGlvbk5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZWNsYXJhdGlvbk5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EZWNsYXJhdGlvbk5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBjb21tZW50IGFwcGxpZWQgdG8gdGhlIGRlZmluaXRpb24gKHRoaXMgaXMgdGhlIHJhdyBkb2MgY29tbWVudCB0ZXh0KVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1lbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21tZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSWRlbnRpdHkgb2Ygc3ltYm9sIHdoaWNoIGdlbmVyYXRlZCB0aGlzIGRvY3VtZW50YXRpb25cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklDb2RlU3ltYm9sIENvZGV4LklEb2N1bWVudGF0aW9uSW5mby5Bc3NvY2lhdGVkU3ltYm9sIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkFzc29jaWF0ZWRTeW1ib2w7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJZGVudGl0eSBvZiBzeW1ib2wgd2hpY2ggZ2VuZXJhdGVkIHRoaXMgZG9jdW1lbnRhdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3ltYm9sIEFzc29jaWF0ZWRTeW1ib2wge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Bc3NvY2lhdGVkU3ltYm9sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQXNzb2NpYXRlZFN5bWJvbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG90aGVyIHN5bWJvbHMgcmVmZXJlbmNlZCBieSB0aGlzIHN5bWJvbCAoaS5lLiBiYXNlIHR5cGUsIGltcGxlbWVudGVkIGludGVyZmFjZVxyXG4gICAgICAgIC8vLyBvciBpbnRlcmZhY2UgbWVtYmVycywgb3ZlcnJpZGRlbiBtZW1iZXJzLCByZXR1cm4gdHlwZSBvZiBtZXRob2Qgb3IgcHJvcGVydHkgdHlwZSlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+IENvZGV4LklEb2N1bWVudGF0aW9uSW5mby5SZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgb3RoZXIgc3ltYm9scyByZWZlcmVuY2VkIGJ5IHRoaXMgc3ltYm9sIChpLmUuIGJhc2UgdHlwZSwgaW1wbGVtZW50ZWQgaW50ZXJmYWNlXHJcbiAgICAgICAgLy8vIG9yIGludGVyZmFjZSBtZW1iZXJzLCBvdmVycmlkZGVuIG1lbWJlcnMsIHJldHVybiB0eXBlIG9mIG1ldGhvZCBvciBwcm9wZXJ0eSB0eXBlKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPiBSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVmZXJlbmNlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERlc2NyaWJlcyB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgU3VtbWFyeSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1N1bW1hcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TdW1tYXJ5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBTdXBwbGVtZW50YXRpb24gaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlbWFya3Mge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZW1hcmtzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVtYXJrcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tbWVudHMgb24gYXJndW1lbnRzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+IENvZGV4LklEb2N1bWVudGF0aW9uSW5mby5Bcmd1bWVudHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQXJndW1lbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tbWVudHMgb24gYXJndW1lbnRzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gQXJndW1lbnRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQXJndW1lbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQXJndW1lbnRzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21tZW50cyBvbiB0eXBlIHBhcmFtZXRlcnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8Q29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24+IENvZGV4LklEb2N1bWVudGF0aW9uSW5mby5UeXBlUGFyYW1ldGVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5UeXBlUGFyYW1ldGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbW1lbnRzIG9uIHR5cGUgcGFyYW1ldGVyc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBUeXBlUGFyYW1ldGVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1R5cGVQYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVHlwZVBhcmFtZXRlcnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IGV4Y2VwdGlvbnMgd2hpY2ggY2FuIGJlIHRocm93blxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPiBDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8uRXhjZXB0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5FeGNlcHRpb25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgZXhjZXB0aW9ucyB3aGljaCBjYW4gYmUgdGhyb3duXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4gRXhjZXB0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0V4Y2VwdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9FeGNlcHRpb25zID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBEb2N1bWVudGF0aW9uSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9EZWNsYXJhdGlvbk5hbWUgPSAoKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykodmFsdWUpKS5EZWNsYXJhdGlvbk5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuQ29tbWVudDtcclxuICAgICAgICAgICAgdGhpcy5tX0Fzc29jaWF0ZWRTeW1ib2wgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbD4oQXNzb2NpYXRlZFN5bWJvbCwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5TeW1ib2wsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sPikodiA9PiBuZXcgU3ltYm9sKCkuQ29weUZyb208U3ltYm9sPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX1JlZmVyZW5jZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4oKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuUmVmZXJlbmNlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPikoX3YgPT4gbmV3IERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2woKS5Db3B5RnJvbTxEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX1N1bW1hcnkgPSAoKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykodmFsdWUpKS5TdW1tYXJ5O1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVtYXJrcyA9ICgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLlJlbWFya3M7XHJcbiAgICAgICAgICAgIHRoaXMubV9Bcmd1bWVudHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oKChDb2RleC5JRG9jdW1lbnRhdGlvbkluZm8pKHZhbHVlKSkuQXJndW1lbnRzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KShfdiA9PiBuZXcgVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKCkuQ29weUZyb208VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPihfdikpKSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX1R5cGVQYXJhbWV0ZXJzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRvY3VtZW50YXRpb24+KCgoQ29kZXguSURvY3VtZW50YXRpb25JbmZvKSh2YWx1ZSkpLlR5cGVQYXJhbWV0ZXJzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRvY3VtZW50YXRpb24+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEb2N1bWVudGF0aW9uPih2LCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlckRvY3VtZW50YXRpb24+KShfdiA9PiBuZXcgUGFyYW1ldGVyRG9jdW1lbnRhdGlvbigpLkNvcHlGcm9tPFBhcmFtZXRlckRvY3VtZW50YXRpb24+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fRXhjZXB0aW9ucyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPigoKENvZGV4LklEb2N1bWVudGF0aW9uSW5mbykodmFsdWUpKS5FeGNlcHRpb25zLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPikodiA9PiBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24+KShfdiA9PiBuZXcgVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKCkuQ29weUZyb208VHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPihfdikpKSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERvY3VtZW50YXRpb24gZm9yIGEgbWV0aG9kIHBhcmFtZXRlclxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX05hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db21tZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQYXJhbWV0ZXJEb2N1bWVudGF0aW9uPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvbW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBDb21tZW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JUGFyYW1ldGVyRG9jdW1lbnRhdGlvbikodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9ICgoQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24pKHZhbHVlKSkuQ29tbWVudDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIERvY3VtZW50YXRpb24gZm9yIHR5cGVkIHBhcmFtZXRlclxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24gOiBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uLCBDb2RleC5JVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgbV9UeXBlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24oKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24oQ29kZXguSVR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbj4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVHlwZWRQYXJhbWV0ZXJEb2N1bWVudGF0aW9uKENvZGV4LklQYXJhbWV0ZXJEb2N1bWVudGF0aW9uIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0eXBlIG9mIHRoZSBwYXJhbWV0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24uVHlwZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5UeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHR5cGUgb2YgdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCBUeXBlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1R5cGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24gdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBUeXBlZFBhcmFtZXRlckRvY3VtZW50YXRpb24ge1xyXG4gICAgICAgICAgICB0aGlzLm1fVHlwZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KFR5cGUsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sPikodiA9PiBuZXcgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCgpLkNvcHlGcm9tPERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2w+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFBhcmFtZXRlckRvY3VtZW50YXRpb24+KCgoQ29kZXguSVBhcmFtZXRlckRvY3VtZW50YXRpb24pKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVjcmliZXMgYSBzeW1ib2wgcmVsYXRlZCB0byBhIGdpdmVuIGRvY3VtZW50ZWQgc3ltYm9sXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIDogUmVmZXJlbmNlU3ltYm9sLCBDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EaXNwbGF5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0NvbW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2woKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sKENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208RG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbChDb2RleC5JUmVmZXJlbmNlU3ltYm9sIHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbChDb2RleC5JQ29kZVN5bWJvbCB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSBzeW1ib2wgcmVmZXJlbmNlIGFzIGl0IHNob3VsZCBhcHBlYXIgaW4gZG9jdW1lbnRhdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERpc3BsYXlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EaXNwbGF5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvbW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSByZWZlcmVuY2VcclxuICAgICAgICAvLy8gKGkuZS4gcmV0dXJuIHR5cGUgZGVzY3JpcHRpb24gaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2NzaGFycC9wcm9ncmFtbWluZy1ndWlkZS94bWxkb2MvcmV0dXJucylcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBDb21tZW50IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbW1lbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklEb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9EaXNwbGF5TmFtZSA9ICgoQ29kZXguSURvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkuRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21tZW50ID0gKChDb2RleC5JRG9jdW1lbnRhdGlvblJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKS5Db21tZW50O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFJlZmVyZW5jZVN5bWJvbD4oKChDb2RleC5JUmVmZXJlbmNlU3ltYm9sKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9wZXJ0eVNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JUHJvcGVydHlTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9LZXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9WYWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX093bmVySWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb3BlcnR5U2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9wZXJ0eVNlYXJjaE1vZGVsKENvZGV4LklQcm9wZXJ0eVNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvcGVydHlTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvcGVydHlTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgS2V5IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fS2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fS2V5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVmFsdWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9WYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgb2JqZWN0IG93bmluZyB0aGlzIHByb3BlcnR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgT3duZXJJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX093bmVySWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Pd25lcklkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvcGVydHlTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb3BlcnR5U2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fS2V5ID0gKChDb2RleC5JUHJvcGVydHlTZWFyY2hNb2RlbCkodmFsdWUpKS5LZXk7XHJcbiAgICAgICAgICAgIHRoaXMubV9WYWx1ZSA9ICgoQ29kZXguSVByb3BlcnR5U2VhcmNoTW9kZWwpKHZhbHVlKSkuVmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Pd25lcklkID0gKChDb2RleC5JUHJvcGVydHlTZWFyY2hNb2RlbCkodmFsdWUpKS5Pd25lcklkO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklQcm9wZXJ0eU1hcCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvcGVydHlNYXAgOiBDb2RleC5JUHJvcGVydHlNYXAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9wZXJ0eU1hcCgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvcGVydHlNYXAoQ29kZXguSVByb3BlcnR5TWFwIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9wZXJ0eU1hcD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9wZXJ0eU1hcCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb3BlcnR5TWFwIHtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZXBvc2l0b3J5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZXBvc2l0b3J5IDogQ29kZXguRW50aXR5QmFzZSwgQ29kZXguSVJlcG9zaXRvcnkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fTmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9XZWJBZGRyZXNzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fU291cmNlQ29udHJvbFdlYkFkZHJlc3M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9GaWxlV2ViQWRkcmVzc1RyYW5zZm9ybUlucHV0UmVnZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9QcmltYXJ5QnJhbmNoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZXBvc2l0b3J5UmVmZXJlbmNlPiBtX1JlcG9zaXRvcnlSZWZlcmVuY2VzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UmVwb3NpdG9yeVJlZmVyZW5jZT4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeShDb2RleC5JUmVwb3NpdG9yeSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVwb3NpdG9yeT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIGZvIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9OYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZXNjcmliZXMgdGhlIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgSWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0lkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFdlYkFkZHJlc3Mge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9XZWJBZGRyZXNzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fV2ViQWRkcmVzcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHdlYiBhZGRyZXNzIGZvciBzb3VyY2UgY29udHJvbCBvZiB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFNvdXJjZUNvbnRyb2xXZWJBZGRyZXNzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU291cmNlQ29udHJvbFdlYkFkZHJlc3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sV2ViQWRkcmVzcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlZ2V4IGZvciBleHRyYWN0aW5nXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRmlsZVdlYkFkZHJlc3NUcmFuc2Zvcm1JbnB1dFJlZ2V4IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZVdlYkFkZHJlc3NUcmFuc2Zvcm1JbnB1dFJlZ2V4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZVdlYkFkZHJlc3NUcmFuc2Zvcm1JbnB1dFJlZ2V4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcHJpbWFyeSBicmFuY2ggZm9yIHRoZSByZXBvc2l0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJpbWFyeUJyYW5jaCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1ByaW1hcnlCcmFuY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9QcmltYXJ5QnJhbmNoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZT4gQ29kZXguSVJlcG9zaXRvcnkuUmVwb3NpdG9yeVJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVwb3NpdG9yeVJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxSZXBvc2l0b3J5UmVmZXJlbmNlPiBSZXBvc2l0b3J5UmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnlSZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeVJlZmVyZW5jZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvc2l0b3J5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVzY3JpcHRpb24gPSAoKENvZGV4LklSZXBvc2l0b3J5KSh2YWx1ZSkpLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLm1fSWQgPSAoKENvZGV4LklSZXBvc2l0b3J5KSh2YWx1ZSkpLklkO1xyXG4gICAgICAgICAgICB0aGlzLm1fV2ViQWRkcmVzcyA9ICgoQ29kZXguSVJlcG9zaXRvcnkpKHZhbHVlKSkuV2ViQWRkcmVzcztcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xXZWJBZGRyZXNzID0gKChDb2RleC5JUmVwb3NpdG9yeSkodmFsdWUpKS5Tb3VyY2VDb250cm9sV2ViQWRkcmVzcztcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGVXZWJBZGRyZXNzVHJhbnNmb3JtSW5wdXRSZWdleCA9ICgoQ29kZXguSVJlcG9zaXRvcnkpKHZhbHVlKSkuRmlsZVdlYkFkZHJlc3NUcmFuc2Zvcm1JbnB1dFJlZ2V4O1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJpbWFyeUJyYW5jaCA9ICgoQ29kZXguSVJlcG9zaXRvcnkpKHZhbHVlKSkuUHJpbWFyeUJyYW5jaDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlSZWZlcmVuY2VzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8UmVwb3NpdG9yeVJlZmVyZW5jZT4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnlSZWZlcmVuY2U+KCgoQ29kZXguSVJlcG9zaXRvcnkpKHZhbHVlKSkuUmVwb3NpdG9yeVJlZmVyZW5jZXMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVJlZmVyZW5jZT4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnlSZWZlcmVuY2U+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVJlcG9zaXRvcnlSZWZlcmVuY2UsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVJlZmVyZW5jZT4pKF92ID0+IG5ldyBSZXBvc2l0b3J5UmVmZXJlbmNlKCkuQ29weUZyb208UmVwb3NpdG9yeVJlZmVyZW5jZT4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmVwb3NpdG9yeVJlZmVyZW5jZSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX05hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9JZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVJlZmVyZW5jZSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVJlZmVyZW5jZShDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVwb3NpdG9yeVJlZmVyZW5jZT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZWZlcmVuY2UgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gT3B0aW9uYWwuIElkIG9mIHJlcG9zaXRvcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVwb3NpdG9yeVJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9OYW1lID0gKChDb2RleC5JUmVwb3NpdG9yeVJlZmVyZW5jZSkodmFsdWUpKS5OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fSWQgPSAoKENvZGV4LklSZXBvc2l0b3J5UmVmZXJlbmNlKSh2YWx1ZSkpLklkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gTWFya2VyIGludGVyZmFjZSBmb3Igc2VhcmNoYWJsZSBlbnRpdGllc1xyXG4gICAgLy8vIFRPRE86IENvbnNpZGVyIG1vdmluZyA8c2VlIGNyZWY9XCJQOkNvZGV4LklTZWFyY2hFbnRpdHkuRW50aXR5Q29udGVudElkXCIgLz4gb3V0IGlmIGl0cyBub3QgbmVlZGVkIGJ5IGFsbCBzZWFyY2hhYmxlIGVudGl0aWVzXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTZWFyY2hFbnRpdHkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFNlYXJjaEVudGl0eSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklTZWFyY2hFbnRpdHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVWlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRW50aXR5Q29udGVudElkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fRW50aXR5Q29udGVudFNpemU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uTnVsbGFibGU8bG9uZz4gbV9FbnRpdHlWZXJzaW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgbG9uZyBtX1NoYXJkU3RhYmxlSWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNlYXJjaEVudGl0eSgpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU2VhcmNoRW50aXR5KENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVWlkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVWlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVWlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbmVzIHRoZSBjb250ZW50IGFkZHJlc3NhYmxlIGlkZW50aWZpZXIgZm9yIHRoZSBlbnRpdHkuIFRoaXMgaXMgdXNlZFxyXG4gICAgICAgIC8vLyB0byBkZXRlcm1pbmUgaWYgYW4gZW50aXR5IHdpdGggdGhlIHNhbWUgPHNlZSBjcmVmPVwiUDpDb2RleC5JU2VhcmNoRW50aXR5LlVpZFwiIC8+IHNob3VsZCBiZSB1cGRhdGVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRW50aXR5Q29udGVudElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRW50aXR5Q29udGVudElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRW50aXR5Q29udGVudElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBEZWZpbmVzIHRoZSBzaXplIG9mIHRoZSByYXcgc2VyaWFsaXplZCBlbnRpdHkuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgRW50aXR5Q29udGVudFNpemUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FbnRpdHlDb250ZW50U2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0VudGl0eUNvbnRlbnRTaXplID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdmVyc2lvbiBudW1iZXIgdXNlZCB3aGVuIHN0b3JpbmcgdGhlIGVudGl0eSAoZm9yIHVzZSBieSBFbGFzdGljU2VhcmNoIGNvbmN1cnJlbmN5IGNvbnRyb2xcclxuICAgICAgICAvLy8gdG8gcHJldmVudCByYWNlcyB3aGVuIHN0b3JpbmcgdmFsdWVzKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLk51bGxhYmxlPGxvbmc+IEVudGl0eVZlcnNpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9FbnRpdHlWZXJzaW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRW50aXR5VmVyc2lvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHBlci1zaGFyZCBzdGFibGUgaWRlbnRpdHkgKGRlcml2ZWQgZnJvbSBFbGFzdGljU2VhcmNoIHNlcXVlbmNlIG51bWJlcilcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGxvbmcgU2hhcmRTdGFibGVJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NoYXJkU3RhYmxlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TaGFyZFN0YWJsZUlkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU2VhcmNoRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX1VpZCA9ICgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKS5VaWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9FbnRpdHlDb250ZW50SWQgPSAoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkuRW50aXR5Q29udGVudElkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRW50aXR5Q29udGVudFNpemUgPSAoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkuRW50aXR5Q29udGVudFNpemU7XHJcbiAgICAgICAgICAgIHRoaXMubV9FbnRpdHlWZXJzaW9uID0gKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpLkVudGl0eVZlcnNpb247XHJcbiAgICAgICAgICAgIHRoaXMubV9TaGFyZFN0YWJsZUlkID0gKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpLlNoYXJkU3RhYmxlSWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVwb1Njb3BlRW50aXR5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZXBvU2NvcGVFbnRpdHkgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUmVwb1Njb3BlRW50aXR5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvU2NvcGVFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9TY29wZUVudGl0eShDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZXBvU2NvcGVFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeSBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvc2l0b3J5TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZXBvU2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvbW1pdFNjb3BlRW50aXR5IDogUmVwb1Njb3BlRW50aXR5LCBDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29tbWl0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdFNjb3BlRW50aXR5KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0U2NvcGVFbnRpdHkoQ29kZXguSUNvbW1pdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0U2NvcGVFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdFNjb3BlRW50aXR5KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIGNvbW1pdC9jaGFuZ2VzZXQgaW4gdmVyc2lvbiBjb250cm9sXHJcbiAgICAgICAgLy8vIChpLmUuIGdpdCBjb21taXQgaGFzaCBvciBURlMgY2hhbmdlc2V0IG51bWJlcilcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBDb21taXRJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1pdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWl0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdFNjb3BlRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1pdElkID0gKChDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpKHZhbHVlKSkuQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UmVwb1Njb3BlRW50aXR5PigoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvamVjdFNjb3BlRW50aXR5IDogUmVwb1Njb3BlRW50aXR5LCBDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFNjb3BlRW50aXR5KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFNjb3BlRW50aXR5KENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0U2NvcGVFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RTY29wZUVudGl0eShDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBwcm9qZWN0IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RTY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFJlcG9TY29wZUVudGl0eT4oKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZXBvRmlsZVNjb3BlRW50aXR5IDogUmVwb1Njb3BlRW50aXR5LCBDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZXBvRmlsZVNjb3BlRW50aXR5KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb0ZpbGVTY29wZUVudGl0eShDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlcG9GaWxlU2NvcGVFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9GaWxlU2NvcGVFbnRpdHkoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVwbyByZWxhdGl2ZSBwYXRoIHRvIHRoZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb1JlbGF0aXZlUGF0aCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlcG9GaWxlU2NvcGVFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxSZXBvU2NvcGVFbnRpdHk+KCgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvamVjdEZpbGVTY29wZUVudGl0eSA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RGaWxlU2NvcGVFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RGaWxlU2NvcGVFbnRpdHkoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RGaWxlU2NvcGVFbnRpdHkoQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RGaWxlU2NvcGVFbnRpdHkoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdEZpbGVTY29wZUVudGl0eT4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdEZpbGVTY29wZUVudGl0eShDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0RmlsZVNjb3BlRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHByb2plY3QgcmVsYXRpdmUgcGF0aCBvZiB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RSZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0UmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlcG8gcmVsYXRpdmUgcGF0aCB0byB0aGUgZmlsZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9SZWxhdGl2ZVBhdGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUmVwb3NpdG9yeU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgaWRlbnRpZmllciBvZiB0aGUgcHJvamVjdCBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0SWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9zaXRvcnlOYW1lID0gKChDb2RleC5JUmVwb1Njb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9GaWxlU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdEZpbGVTY29wZUVudGl0eSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGggPSAoKENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvUmVsYXRpdmVQYXRoID0gKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKS5SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW4gb3JkZXIgdG8gY29tcHV0ZSBhIHN0YWJsZSBpbnRlZ3JhbCBpZCBmb3IgZWFjaCBlbnRpdHkuIFRoaXMgdHlwZSBpcyB1c2VkIHRvIHN0b3JlIGludG8gYSAnZm9sbG93JyBpbmRleCB3aGljaFxyXG4gICAgLy8vIHN0b3JlcyBlbnRpdGllcyBvZiB0aGlzIHR5cGUgdXNpbmcgdGhlIDxzZWUgY3JlZj1cIlA6Q29kZXguSVNlYXJjaEVudGl0eS5VaWRcIiAvPiBvZiB0aGUgY29ycmVzcG9uZGluZyBzZWFyY2ggZW50aXR5LiBUaGVuIHRoZVxyXG4gICAgLy8vIHNlcXVlbmNlIG51bWJlciBhc3NpZ25lZCBieSBFbGFzdGljU2VhcmNoIGlzIHVzZWQgYXMgdGhlIHNoYXJkIHN0YWJsZSBpZCAoPHNlZSBjcmVmPVwiUDpDb2RleC5JU2VhcmNoRW50aXR5LlNoYXJkU3RhYmxlSWRcIiAvPilcclxuICAgIC8vLyBmb3IgdGhlIGVudGl0eS4gVGhpcyBhcHByb2FjaCBpcyB1c2VkIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzdGFibGUgaWQgYXBwZWFycyBhcyBhbiBleHBsaWNpdCBmaWVsZCBpbiB0aGUgZG9jdW1lbnQgcmF0aGVyXHJcbiAgICAvLy8gd2hpY2ggYWxsb3dzIGNvbmZpZ3VyYXRpb24gb2YgaG93IHRoZSBmaWVsZCBpcyBpbmRleGVkIChub3QgdHJ1ZSBmb3Igc2VxdWVuY2UgbnVtYmVyIGZpZWxkIHdpdGhvdXQgY29kZSBjaGFuZ2VzIHRvIEVTKS5cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlZ2lzdGVyZWRFbnRpdHkpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlZ2lzdGVyZWRFbnRpdHkgOiBTZWFyY2hFbnRpdHksIENvZGV4LklSZWdpc3RlcmVkRW50aXR5IHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5EYXRlVGltZSBtX0RhdGVBZGRlZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVnaXN0ZXJlZEVudGl0eSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyZWRFbnRpdHkoQ29kZXguSVJlZ2lzdGVyZWRFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWdpc3RlcmVkRW50aXR5Pih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWdpc3RlcmVkRW50aXR5KENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRhdGUgaW4gd2hpY2ggdGhlIGVudGl0eSB3YXMgcmVnaXN0ZXJlZCAoaS5lLiBhZGRlZCB0byB0aGUgc3RvcmUpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uRGF0ZVRpbWUgRGF0ZUFkZGVkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGF0ZUFkZGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGF0ZUFkZGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVnaXN0ZXJlZEVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZ2lzdGVyZWRFbnRpdHkge1xyXG4gICAgICAgICAgICB0aGlzLm1fRGF0ZUFkZGVkID0gKChDb2RleC5JUmVnaXN0ZXJlZEVudGl0eSkodmFsdWUpKS5EYXRlQWRkZWQ7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVmaW5lcyBhIHN0b3JlZCBmaWx0ZXIgd2hpY2ggbWF0Y2hlcyBlbnRpdGllcyBpbiBhIHBhcnRpY3VsYXIgaW5kZXggc2hhcmQgaW4gYSBzdGFibGUgbWFubmVyXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklTdG9yZWRGaWx0ZXIpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFN0b3JlZEZpbHRlciA6IFNlYXJjaEVudGl0eSwgQ29kZXguSVN0b3JlZEZpbHRlciB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uRGF0ZVRpbWUgbV9EYXRlVXBkYXRlZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0luZGV4TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGludCBtX1NoYXJkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxsb25nPiBtX1N0YWJsZUlkcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGxvbmc+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4gbV9CYXNlVWlkcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Ynl0ZVtdPiBtX1VuaW9uRmlsdGVycyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGJ5dGVbXT4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJ5dGVbXSBtX0ZpbHRlcjtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX0ZpbHRlckhhc2g7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgbV9GaWx0ZXJDb3VudDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3RvcmVkRmlsdGVyKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3RvcmVkRmlsdGVyKENvZGV4LklTdG9yZWRGaWx0ZXIgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTdG9yZWRGaWx0ZXI+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFN0b3JlZEZpbHRlcihDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0aW1lIG9mIHRoZSBsYXN0IHVwZGF0ZSB0byB0aGUgc3RvcmVkIGZpbHRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkRhdGVUaW1lIERhdGVVcGRhdGVkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGF0ZVVwZGF0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9EYXRlVXBkYXRlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGluZGV4IHRvIHdoaWNoIHRoZSBzdG9yZWQgZmlsdGVyIGFwcGxpZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBJbmRleE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9JbmRleE5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JbmRleE5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzaGFyZCB0byB3aGljaCB0aGUgc3RvcmVkIGZpbHRlciBhcHBsaWVzXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgU2hhcmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9TaGFyZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NoYXJkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHN0YWJsZSBpZHMgdG8gaW5jbHVkZSBpbiB0aGUgc3RvcmVkIGZpbHRlci5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8bG9uZz4gQ29kZXguSVN0b3JlZEZpbHRlci5TdGFibGVJZHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU3RhYmxlSWRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTGlzdCBvZiBzdGFibGUgaWRzIHRvIGluY2x1ZGUgaW4gdGhlIHN0b3JlZCBmaWx0ZXIuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PGxvbmc+IFN0YWJsZUlkcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1N0YWJsZUlkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1N0YWJsZUlkcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTGlzdCBvZiB1aWRzIHRvIGZvciBzdG9yZWQgZmlsdGVycyB3aGljaCB3aWxsIGJlIHVuaW9uZWQgd2l0aCB0aGUgZ2l2ZW4gc3RvcmVkIGZpbHRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxzdHJpbmc+IENvZGV4LklTdG9yZWRGaWx0ZXIuQmFzZVVpZHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQmFzZVVpZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHVpZHMgdG8gZm9yIHN0b3JlZCBmaWx0ZXJzIHdoaWNoIHdpbGwgYmUgdW5pb25lZCB3aXRoIHRoZSBnaXZlbiBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4gQmFzZVVpZHMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9CYXNlVWlkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Jhc2VVaWRzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHN0b3JlZCBmaWx0ZXJzIHdoaWNoIHdpbGwgYmUgdW5pb25lZCB3aXRoIHRoZSBnaXZlbiBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PGJ5dGVbXT4gQ29kZXguSVN0b3JlZEZpbHRlci5VbmlvbkZpbHRlcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVW5pb25GaWx0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTGlzdCBvZiBzdG9yZWQgZmlsdGVycyB3aGljaCB3aWxsIGJlIHVuaW9uZWQgd2l0aCB0aGUgZ2l2ZW4gc3RvcmVkIGZpbHRlclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxieXRlW10+IFVuaW9uRmlsdGVycyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1VuaW9uRmlsdGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1VuaW9uRmlsdGVycyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHN0b3JlZCBmaWx0ZXIgYml0IHNldCB3aGljaCBtYXRjaGVzIHRoZSBzdG9yZWQgZmlsdGVyIGRvY3VtZW50c1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYnl0ZVtdIEZpbHRlciB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbHRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbHRlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGhhc2ggb2YgPHNlZSBjcmVmPVwiUDpDb2RleC5JU3RvcmVkRmlsdGVyLkZpbHRlclwiIC8+XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRmlsdGVySGFzaCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbHRlckhhc2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9GaWx0ZXJIYXNoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY291bnQgb2YgZWxlbWVudHMgbWF0Y2hlZCBieSA8c2VlIGNyZWY9XCJQOkNvZGV4LklTdG9yZWRGaWx0ZXIuRmlsdGVyXCIgLz5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBGaWx0ZXJDb3VudCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbHRlckNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsdGVyQ291bnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTdG9yZWRGaWx0ZXIgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBTdG9yZWRGaWx0ZXIge1xyXG4gICAgICAgICAgICB0aGlzLm1fRGF0ZVVwZGF0ZWQgPSAoKENvZGV4LklTdG9yZWRGaWx0ZXIpKHZhbHVlKSkuRGF0ZVVwZGF0ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9JbmRleE5hbWUgPSAoKENvZGV4LklTdG9yZWRGaWx0ZXIpKHZhbHVlKSkuSW5kZXhOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fU2hhcmQgPSAoKENvZGV4LklTdG9yZWRGaWx0ZXIpKHZhbHVlKSkuU2hhcmQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9TdGFibGVJZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxsb25nPigoKENvZGV4LklTdG9yZWRGaWx0ZXIpKHZhbHVlKSkuU3RhYmxlSWRzKTtcclxuICAgICAgICAgICAgdGhpcy5tX0Jhc2VVaWRzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPigoKENvZGV4LklTdG9yZWRGaWx0ZXIpKHZhbHVlKSkuQmFzZVVpZHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1fVW5pb25GaWx0ZXJzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Ynl0ZVtdPigoKENvZGV4LklTdG9yZWRGaWx0ZXIpKHZhbHVlKSkuVW5pb25GaWx0ZXJzKTtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbHRlciA9ICgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5GaWx0ZXI7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWx0ZXJIYXNoID0gKChDb2RleC5JU3RvcmVkRmlsdGVyKSh2YWx1ZSkpLkZpbHRlckhhc2g7XHJcbiAgICAgICAgICAgIHRoaXMubV9GaWx0ZXJDb3VudCA9ICgoQ29kZXguSVN0b3JlZEZpbHRlcikodmFsdWUpKS5GaWx0ZXJDb3VudDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBEZWZpbml0aW9uU2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgRGVmaW5pdGlvblN5bWJvbCBtX0RlZmluaXRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4gbV9LZXl3b3JkcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PHN0cmluZz4oKTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblNlYXJjaE1vZGVsKENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxEZWZpbml0aW9uU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JRGVmaW5pdGlvblN5bWJvbCBDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsLkRlZmluaXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBEZWZpbml0aW9uU3ltYm9sIERlZmluaXRpb24ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EZWZpbml0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gS2V5d29yZHMgYXJlIGFkZGl0aW9uYWwgdGVybXMgd2hpY2ggY2FuIGJlIHVzZWQgdG8gZmluZCBhIGdpdmVuIHN5bWJvbC5cclxuICAgICAgICAvLy8gTk9URTogS2V5d29yZHMgY2FuIG9ubHkgYmUgdXNlZCB0byBzZWxlY3QgZnJvbSBzeW1ib2xzIHdoaWNoIGhhdmVcclxuICAgICAgICAvLy8gYSBwcmltYXJ5IHRlcm0gbWF0Y2hcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8c3RyaW5nPiBDb2RleC5JRGVmaW5pdGlvblNlYXJjaE1vZGVsLktleXdvcmRzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLktleXdvcmRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gS2V5d29yZHMgYXJlIGFkZGl0aW9uYWwgdGVybXMgd2hpY2ggY2FuIGJlIHVzZWQgdG8gZmluZCBhIGdpdmVuIHN5bWJvbC5cclxuICAgICAgICAvLy8gTk9URTogS2V5d29yZHMgY2FuIG9ubHkgYmUgdXNlZCB0byBzZWxlY3QgZnJvbSBzeW1ib2xzIHdoaWNoIGhhdmVcclxuICAgICAgICAvLy8gYSBwcmltYXJ5IHRlcm0gbWF0Y2hcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8c3RyaW5nPiBLZXl3b3JkcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0tleXdvcmRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fS2V5d29yZHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklEZWZpbml0aW9uU2VhcmNoTW9kZWwgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBEZWZpbml0aW9uU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fRGVmaW5pdGlvbiA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2w+KERlZmluaXRpb24sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPikodiA9PiBuZXcgRGVmaW5pdGlvblN5bWJvbCgpLkNvcHlGcm9tPERlZmluaXRpb25TeW1ib2w+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fS2V5d29yZHMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxzdHJpbmc+KCgoQ29kZXguSURlZmluaXRpb25TZWFyY2hNb2RlbCkodmFsdWUpKS5LZXl3b3Jkcyk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUxhbmd1YWdlU2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIExhbmd1YWdlU2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklMYW5ndWFnZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIExhbmd1YWdlSW5mbyBtX0xhbmd1YWdlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBMYW5ndWFnZVNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTGFuZ3VhZ2VTZWFyY2hNb2RlbChDb2RleC5JTGFuZ3VhZ2VTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPExhbmd1YWdlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIExhbmd1YWdlU2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSUxhbmd1YWdlSW5mbyBDb2RleC5JTGFuZ3VhZ2VTZWFyY2hNb2RlbC5MYW5ndWFnZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5MYW5ndWFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBMYW5ndWFnZUluZm8gTGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9MYW5ndWFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0xhbmd1YWdlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JTGFuZ3VhZ2VTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IExhbmd1YWdlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fTGFuZ3VhZ2UgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxhbmd1YWdlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxhbmd1YWdlSW5mbz4oTGFuZ3VhZ2UsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuTGFuZ3VhZ2VJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkxhbmd1YWdlSW5mbz4pKHYgPT4gbmV3IExhbmd1YWdlSW5mbygpLkNvcHlGcm9tPExhbmd1YWdlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZWZlcmVuY2VTZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFJlZmVyZW5jZVN5bWJvbCBtX1JlZmVyZW5jZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklSZWFkT25seUxpc3Q8U3ltYm9sU3Bhbj4gbV9TcGFucyA9IENvZGV4LlV0aWxpdGllcy5Db2xsZWN0aW9uVXRpbGl0aWVzLkVtcHR5PFN5bWJvbFNwYW4+LkFycmF5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguSVN5bWJvbExpbmVTcGFuTGlzdCBtX0NvbXByZXNzZWRTcGFucztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVJlZmVyZW5jZVNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTZWFyY2hNb2RlbChDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZWZlcmVuY2Ugc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JUmVmZXJlbmNlU3ltYm9sIENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbC5SZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlZmVyZW5jZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFJlZmVyZW5jZVN5bWJvbCBSZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZWZlcmVuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JUmVhZE9ubHlMaXN0PENvZGV4LklTeW1ib2xTcGFuPiBDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwuU3BhbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU3BhbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxTeW1ib2xTcGFuPiBTcGFucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db2VyY2VTcGFucyh0aGlzLm1fU3BhbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU3BhbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguSVN5bWJvbExpbmVTcGFuTGlzdCBDb21wcmVzc2VkU3BhbnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21wcmVzc2VkU3BhbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkU3BhbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBwcm9qZWN0IHJlbGF0aXZlIHBhdGggb2YgdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBQcm9qZWN0UmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXBvIHJlbGF0aXZlIHBhdGggdG8gdGhlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvUmVsYXRpdmVQYXRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb1JlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb1Njb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gKChDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5KSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2UgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbD4oUmVmZXJlbmNlLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTeW1ib2w+KSh2ID0+IG5ldyBSZWZlcmVuY2VTeW1ib2woKS5Db3B5RnJvbTxSZWZlcmVuY2VTeW1ib2w+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fU3BhbnMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxTeW1ib2xTcGFuPihTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlNlbGVjdDxnbG9iYWw6OkNvZGV4LklTeW1ib2xTcGFuLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sU3Bhbj4oKChDb2RleC5JUmVmZXJlbmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuU3BhbnMsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVN5bWJvbFNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sU3Bhbj4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JU3ltYm9sU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbFNwYW4+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSVN5bWJvbFNwYW4sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU3ltYm9sU3Bhbj4pKF92ID0+IG5ldyBTeW1ib2xTcGFuKCkuQ29weUZyb208U3ltYm9sU3Bhbj4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkU3BhbnMgPSAoKENvZGV4LklSZWZlcmVuY2VTZWFyY2hNb2RlbCkodmFsdWUpKS5Db21wcmVzc2VkU3BhbnM7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlbGF0aXZlUGF0aCA9ICgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdFJlbGF0aXZlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5tX1JlcG9SZWxhdGl2ZVBhdGggPSAoKENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5KSh2YWx1ZSkpLlJlcG9SZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTb3VyY2VTZWFyY2hNb2RlbEJhc2UgOiBTZWFyY2hFbnRpdHksIENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlQ29udHJvbEZpbGVJbmZvIG1fU291cmNlQ29udHJvbEluZm87XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZVNlYXJjaE1vZGVsQmFzZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFNvdXJjZVNlYXJjaE1vZGVsQmFzZShDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U291cmNlU2VhcmNoTW9kZWxCYXNlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTb3VyY2VTZWFyY2hNb2RlbEJhc2UoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGUgZnJvbSBzb3VyY2UgY29udHJvbCBwcm92aWRlciAobWF5IGJlIG51bGwpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JU291cmNlQ29udHJvbEZpbGVJbmZvIENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UuU291cmNlQ29udHJvbEluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU291cmNlQ29udHJvbEluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGUgZnJvbSBzb3VyY2UgY29udHJvbCBwcm92aWRlciAobWF5IGJlIG51bGwpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTb3VyY2VDb250cm9sRmlsZUluZm8gU291cmNlQ29udHJvbEluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JU291cmNlU2VhcmNoTW9kZWxCYXNlIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogU291cmNlU2VhcmNoTW9kZWxCYXNlIHtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8+KFNvdXJjZUNvbnRyb2xJbmZvLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8+KSh2ID0+IG5ldyBTb3VyY2VDb250cm9sRmlsZUluZm8oKS5Db3B5RnJvbTxTb3VyY2VDb250cm9sRmlsZUluZm8+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JQm91bmRTb3VyY2VTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9UZXh0VWlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlRmlsZUluZm8gbV9Tb3VyY2VJbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQm91bmRTb3VyY2VJbmZvIG1fQmluZGluZ0luZm87XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5JQ2xhc3NpZmljYXRpb25MaXN0IG1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LklSZWZlcmVuY2VMaXN0IG1fQ29tcHJlc3NlZFJlZmVyZW5jZXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VDb250cm9sRmlsZUluZm8gbV9Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQm91bmRTb3VyY2VTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEJvdW5kU291cmNlU2VhcmNoTW9kZWwoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBhc3NvY2lhdGVkIDxzZWUgY3JlZj1cIlQ6Q29kZXguSVNvdXJjZUZpbGVcIiAvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFRleHRVaWQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9UZXh0VWlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fVGV4dFVpZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5JU291cmNlRmlsZUluZm8gQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwuU291cmNlSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Tb3VyY2VJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNvdXJjZSBmaWxlXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTb3VyY2VGaWxlSW5mbyBTb3VyY2VJbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU291cmNlSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUluZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBiaW5kaW5nIGluZm9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklCb3VuZFNvdXJjZUluZm8gQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwuQmluZGluZ0luZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQmluZGluZ0luZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgYmluZGluZyBpbmZvXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBCb3VuZFNvdXJjZUluZm8gQmluZGluZ0luZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9CaW5kaW5nSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0JpbmRpbmdJbmZvID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21wcmVzc2VkIGxpc3Qgb2YgY2xhc3NpZmljYXRpb24gc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LklDbGFzc2lmaWNhdGlvbkxpc3QgQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21wcmVzc2VkIGxpc3Qgb2YgcmVmZXJlbmNlIHNwYW5zXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2RleC5JUmVmZXJlbmNlTGlzdCBDb21wcmVzc2VkUmVmZXJlbmNlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbXByZXNzZWRSZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tcHJlc3NlZFJlZmVyZW5jZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8gQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZS5Tb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBTb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8+KFNvdXJjZUNvbnRyb2xJbmZvLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8+KSh2ID0+IG5ldyBTb3VyY2VDb250cm9sRmlsZUluZm8oKS5Db3B5RnJvbTxTb3VyY2VDb250cm9sRmlsZUluZm8+KHYpKSk7O1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1RleHRVaWQgPSAoKENvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKSh2YWx1ZSkpLlRleHRVaWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VJbmZvID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvPihTb3VyY2VJbmZvLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGVJbmZvPikodiA9PiBuZXcgU291cmNlRmlsZUluZm8oKS5Db3B5RnJvbTxTb3VyY2VGaWxlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9CaW5kaW5nSW5mbyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VJbmZvPihCaW5kaW5nSW5mbywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VJbmZvPikodiA9PiBuZXcgQm91bmRTb3VyY2VJbmZvKCkuQ29weUZyb208Qm91bmRTb3VyY2VJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMgPSAoKENvZGV4LklCb3VuZFNvdXJjZVNlYXJjaE1vZGVsKSh2YWx1ZSkpLkNvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkUmVmZXJlbmNlcyA9ICgoQ29kZXguSUJvdW5kU291cmNlU2VhcmNoTW9kZWwpKHZhbHVlKSkuQ29tcHJlc3NlZFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4oU291cmNlQ29udHJvbEluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4pKHYgPT4gbmV3IFNvdXJjZUNvbnRyb2xGaWxlSW5mbygpLkNvcHlGcm9tPFNvdXJjZUNvbnRyb2xGaWxlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JVGV4dFNvdXJjZVNlYXJjaE1vZGVsKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBUZXh0U291cmNlU2VhcmNoTW9kZWwgOiBTZWFyY2hFbnRpdHksIENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU291cmNlRmlsZSBtX0ZpbGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTb3VyY2VDb250cm9sRmlsZUluZm8gbV9Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dFNvdXJjZVNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dFNvdXJjZVNlYXJjaE1vZGVsKENvZGV4LklUZXh0U291cmNlU2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxUZXh0U291cmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRTb3VyY2VTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dFNvdXJjZVNlYXJjaE1vZGVsKENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxUZXh0U291cmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSVNvdXJjZUZpbGUgQ29kZXguSVRleHRTb3VyY2VTZWFyY2hNb2RlbC5GaWxlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgU291cmNlRmlsZSBGaWxlIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0ZpbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklTb3VyY2VDb250cm9sRmlsZUluZm8gQ29kZXguSVNvdXJjZVNlYXJjaE1vZGVsQmFzZS5Tb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Tb3VyY2VDb250cm9sSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzb3VyY2UgZmlsZSBmcm9tIHNvdXJjZSBjb250cm9sIHByb3ZpZGVyIChtYXkgYmUgbnVsbClcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNvdXJjZUNvbnRyb2xGaWxlSW5mbyBTb3VyY2VDb250cm9sSW5mbyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1NvdXJjZUNvbnRyb2xJbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklTb3VyY2VTZWFyY2hNb2RlbEJhc2UgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBUZXh0U291cmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fU291cmNlQ29udHJvbEluZm8gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbyxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4oU291cmNlQ29udHJvbEluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUNvbnRyb2xGaWxlSW5mbz4pKHYgPT4gbmV3IFNvdXJjZUNvbnRyb2xGaWxlSW5mbygpLkNvcHlGcm9tPFNvdXJjZUNvbnRyb2xGaWxlSW5mbz4odikpKTs7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JVGV4dFNvdXJjZVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogVGV4dFNvdXJjZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGUgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGUsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlPihGaWxlLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGUsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlRmlsZT4pKHYgPT4gbmV3IFNvdXJjZUZpbGUoKS5Db3B5RnJvbTxTb3VyY2VGaWxlPih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Tb3VyY2VDb250cm9sSW5mbyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvPihTb3VyY2VDb250cm9sSW5mbywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VDb250cm9sRmlsZUluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvPikodiA9PiBuZXcgU291cmNlQ29udHJvbEZpbGVJbmZvKCkuQ29weUZyb208U291cmNlQ29udHJvbEZpbGVJbmZvPih2KSkpOztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklSZXBvc2l0b3J5U2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9zaXRvcnlTZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBSZXBvc2l0b3J5IG1fUmVwb3NpdG9yeTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVNlYXJjaE1vZGVsKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVNlYXJjaE1vZGVsKENvZGV4LklSZXBvc2l0b3J5U2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxSZXBvc2l0b3J5U2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlcG9zaXRvcnlTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JUmVwb3NpdG9yeSBDb2RleC5JUmVwb3NpdG9yeVNlYXJjaE1vZGVsLlJlcG9zaXRvcnkge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVwb3NpdG9yeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBSZXBvc2l0b3J5IFJlcG9zaXRvcnkge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9zaXRvcnlTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFJlcG9zaXRvcnlTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5ID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeT4oUmVwb3NpdG9yeSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnk+KSh2ID0+IG5ldyBSZXBvc2l0b3J5KCkuQ29weUZyb208UmVwb3NpdG9yeT4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb2plY3RTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvamVjdFNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIEFuYWx5emVkUHJvamVjdCBtX1Byb2plY3Q7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFByb2plY3RTZWFyY2hNb2RlbChDb2RleC5JUHJvamVjdFNlYXJjaE1vZGVsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UHJvamVjdFNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0U2VhcmNoTW9kZWwoQ29kZXguSVNlYXJjaEVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSVByb2plY3QgQ29kZXguSVByb2plY3RTZWFyY2hNb2RlbC5Qcm9qZWN0IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlByb2plY3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQW5hbHl6ZWRQcm9qZWN0IFByb2plY3Qge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVByb2plY3RTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFByb2plY3RTZWFyY2hNb2RlbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0ID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5BbmFseXplZFByb2plY3QsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5BbmFseXplZFByb2plY3Q+KFByb2plY3QsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQW5hbHl6ZWRQcm9qZWN0LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkFuYWx5emVkUHJvamVjdD4pKHYgPT4gbmV3IEFuYWx5emVkUHJvamVjdCgpLkNvcHlGcm9tPEFuYWx5emVkUHJvamVjdD4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIFJlZmVyZW5jZWRQcm9qZWN0IG1fUHJvamVjdFJlZmVyZW5jZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1Byb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsKENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSVJlZmVyZW5jZWRQcm9qZWN0IENvZGV4LklQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwuUHJvamVjdFJlZmVyZW5jZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Qcm9qZWN0UmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFJlZmVyZW5jZWRQcm9qZWN0IFByb2plY3RSZWZlcmVuY2Uge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Qcm9qZWN0UmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdFJlZmVyZW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2plY3QgY29udGFpbmluZyB0aGUgZW50aXR5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgUHJvamVjdElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUHJvamVjdElkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeSBjb250YWluaW5nIHRoZSBlbnRpdHlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBSZXBvc2l0b3J5TmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlcG9zaXRvcnlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvU2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFNjb3BlRW50aXR5IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9ICgoQ29kZXguSVByb2plY3RTY29wZUVudGl0eSkodmFsdWUpKS5Qcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RSZWZlcmVuY2UgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZWRQcm9qZWN0LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3Q+KFByb2plY3RSZWZlcmVuY2UsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3QsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlZFByb2plY3Q+KSh2ID0+IG5ldyBSZWZlcmVuY2VkUHJvamVjdCgpLkNvcHlGcm9tPFJlZmVyZW5jZWRQcm9qZWN0Pih2KSkpOztcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxTZWFyY2hFbnRpdHk+KCgoQ29kZXguSVNlYXJjaEVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklQcm9qZWN0U2NvcGVFbnRpdHkpKHZhbHVlKSkuUHJvamVjdElkO1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0U2VhcmNoTW9kZWwpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENvbW1pdFNlYXJjaE1vZGVsIDogU2VhcmNoRW50aXR5LCBDb2RleC5JQ29tbWl0U2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29tbWl0IG1fQ29tbWl0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdFNlYXJjaE1vZGVsKENvZGV4LklDb21taXRTZWFyY2hNb2RlbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdFNlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRTZWFyY2hNb2RlbChDb2RleC5JU2VhcmNoRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JQ29tbWl0IENvZGV4LklDb21taXRTZWFyY2hNb2RlbC5Db21taXQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tbWl0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvbW1pdCBDb21taXQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21taXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21taXQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdFNlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1pdCA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0PihDb21taXQsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdD4pKHYgPT4gbmV3IENvbW1pdCgpLkNvcHlGcm9tPENvbW1pdD4odikpKTs7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U2VhcmNoRW50aXR5PigoKENvZGV4LklTZWFyY2hFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gVGhlIHNldCBvZiBmaWxlcyBwcmVzZW50IGluIHRoZSByZXBvc2l0b3J5IGF0IGEgZ2l2ZW4gY29tbWl0LlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCA6IFNlYXJjaEVudGl0eSwgQ29kZXguSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4gbV9Db21taXRGaWxlcyA9IG5ldyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdEZpbGVMaW5rPigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fQ29tbWl0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzU2VhcmNoTW9kZWwoQ29kZXguSUNvbW1pdEZpbGVzU2VhcmNoTW9kZWwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxDb21taXRGaWxlc1NlYXJjaE1vZGVsPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc1NlYXJjaE1vZGVsKENvZGV4LklTZWFyY2hFbnRpdHkgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDb21taXRGaWxlc1NlYXJjaE1vZGVsKENvZGV4LklDb21taXRTY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdEZpbGVzU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzU2VhcmNoTW9kZWwoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPENvbW1pdEZpbGVzU2VhcmNoTW9kZWw+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JQ29tbWl0RmlsZUxpbms+IENvZGV4LklDb21taXRGaWxlc1NlYXJjaE1vZGVsLkNvbW1pdEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbW1pdEZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+IENvbW1pdEZpbGVzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tbWl0RmlsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21taXRGaWxlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIGNvbW1pdC9jaGFuZ2VzZXQgaW4gdmVyc2lvbiBjb250cm9sXHJcbiAgICAgICAgLy8vIChpLmUuIGdpdCBjb21taXQgaGFzaCBvciBURlMgY2hhbmdlc2V0IG51bWJlcilcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBDb21taXRJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0NvbW1pdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWl0SWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IGNvbnRhaW5pbmcgdGhlIGVudGl0eVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlcG9zaXRvcnlOYW1lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdEZpbGVzU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeU5hbWUgPSAoKENvZGV4LklSZXBvU2NvcGVFbnRpdHkpKHZhbHVlKSkuUmVwb3NpdG9yeU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBDb21taXRGaWxlc1NlYXJjaE1vZGVsIHtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1pdElkID0gKChDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpKHZhbHVlKSkuQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdEZpbGVzU2VhcmNoTW9kZWwge1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0RmlsZXMgPSBuZXcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdDxDb21taXRGaWxlTGluaz4oU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4oKChDb2RleC5JQ29tbWl0RmlsZXNTZWFyY2hNb2RlbCkodmFsdWUpKS5Db21taXRGaWxlcywgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZUxpbms+KSh2ID0+IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguSUNvbW1pdEZpbGVMaW5rLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZUxpbms+KHYsIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSUNvbW1pdEZpbGVMaW5rLCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rPikoX3YgPT4gbmV3IENvbW1pdEZpbGVMaW5rKCkuQ29weUZyb208Q29tbWl0RmlsZUxpbms+KF92KSkpKSkpO1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFNlYXJjaEVudGl0eT4oKChDb2RleC5JU2VhcmNoRW50aXR5KSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgdGhpcy5tX0NvbW1pdElkID0gKChDb2RleC5JQ29tbWl0U2NvcGVFbnRpdHkpKHZhbHVlKSkuQ29tbWl0SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5TmFtZSA9ICgoQ29kZXguSVJlcG9TY29wZUVudGl0eSkodmFsdWUpKS5SZXBvc2l0b3J5TmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklGaWxlU3RhdGlzdGljcykpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRmlsZVN0YXRpc3RpY3MgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JRmlsZVN0YXRpc3RpY3Mge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBGaWxlU3RhdGlzdGljcygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRmlsZVN0YXRpc3RpY3MoQ29kZXguSUZpbGVTdGF0aXN0aWNzIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxGaWxlU3RhdGlzdGljcz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklGaWxlU3RhdGlzdGljcyB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IEZpbGVTdGF0aXN0aWNzIHtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluZm9ybWF0aW9uIGZvciBjcmVhdGluZyBhbiBJQ29kZXhSZXBvc2l0b3J5U3RvcmVcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8pKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlcG9zaXRvcnlTdG9yZUluZm8gOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBSZXBvc2l0b3J5IG1fUmVwb3NpdG9yeTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIEJyYW5jaCBtX0JyYW5jaDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvbW1pdCBtX0NvbW1pdDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVN0b3JlSW5mbygpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVwb3NpdG9yeVN0b3JlSW5mbyhDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mbyB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVwb3NpdG9yeVN0b3JlSW5mbz4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZXBvc2l0b3J5IGJlaW5nIHN0b3JlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSVJlcG9zaXRvcnkgQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8uUmVwb3NpdG9yeSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlcG9zaXRvcnkgYmVpbmcgc3RvcmVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBSZXBvc2l0b3J5IFJlcG9zaXRvcnkge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVwb3NpdG9yeSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGJyYW5jaCBiZWluZyBzdG9yZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklCcmFuY2ggQ29kZXguSVJlcG9zaXRvcnlTdG9yZUluZm8uQnJhbmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJyYW5jaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBicmFuY2ggYmVpbmcgc3RvcmVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBCcmFuY2ggQnJhbmNoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQnJhbmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQnJhbmNoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgY29tbWl0IGJlaW5nIHN0b3JlZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSUNvbW1pdCBDb2RleC5JUmVwb3NpdG9yeVN0b3JlSW5mby5Db21taXQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tbWl0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvbW1pdCBiZWluZyBzdG9yZWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvbW1pdCBDb21taXQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21taXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21taXQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZXBvc2l0b3J5U3RvcmVJbmZvIHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogUmVwb3NpdG9yeVN0b3JlSW5mbyB7XHJcbiAgICAgICAgICAgIHRoaXMubV9SZXBvc2l0b3J5ID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeT4oUmVwb3NpdG9yeSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZXBvc2l0b3J5LCBnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnk+KSh2ID0+IG5ldyBSZXBvc2l0b3J5KCkuQ29weUZyb208UmVwb3NpdG9yeT4odikpKTs7XHJcbiAgICAgICAgICAgIHRoaXMubV9CcmFuY2ggPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJyYW5jaCxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJyYW5jaD4oQnJhbmNoLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJyYW5jaCwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5CcmFuY2g+KSh2ID0+IG5ldyBCcmFuY2goKS5Db3B5RnJvbTxCcmFuY2g+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWl0ID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQ+KENvbW1pdCwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXQsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0PikodiA9PiBuZXcgQ29tbWl0KCkuQ29weUZyb208Q29tbWl0Pih2KSkpOztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIFJlcHJlc2VudHMgYSBkaXJlY3RvcnkgaW4gc291cmNlIGNvbnRyb2xcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDb21taXRGaWxlc0RpcmVjdG9yeSA6IFJlcG9GaWxlU2NvcGVFbnRpdHksIENvZGV4LklDb21taXRGaWxlc0RpcmVjdG9yeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdEZpbGVMaW5rPiBtX0ZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzRGlyZWN0b3J5KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNEaXJlY3RvcnkoQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208Q29tbWl0RmlsZXNEaXJlY3Rvcnk+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIENvbW1pdEZpbGVzRGlyZWN0b3J5KENvZGV4LklSZXBvRmlsZVNjb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgQ29tbWl0RmlsZXNEaXJlY3RvcnkoQ29kZXguSVJlcG9TY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZmlsZXMgaW4gdGhlIGRpcmVjdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSVJlYWRPbmx5TGlzdDxDb2RleC5JQ29tbWl0RmlsZUxpbms+IENvZGV4LklDb21taXRGaWxlc0RpcmVjdG9yeS5GaWxlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5GaWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBmaWxlcyBpbiB0aGUgZGlyZWN0b3J5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0PENvbW1pdEZpbGVMaW5rPiBGaWxlcyB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0ZpbGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRmlsZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklDb21taXRGaWxlc0RpcmVjdG9yeSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IENvbW1pdEZpbGVzRGlyZWN0b3J5IHtcclxuICAgICAgICAgICAgdGhpcy5tX0ZpbGVzID0gbmV3IFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3Q8Q29tbWl0RmlsZUxpbms+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguSUNvbW1pdEZpbGVMaW5rLGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZUxpbms+KCgoQ29kZXguSUNvbW1pdEZpbGVzRGlyZWN0b3J5KSh2YWx1ZSkpLkZpbGVzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LklDb21taXRGaWxlTGluaywgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4pKHYgPT4gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Db21taXRGaWxlTGluaz4odiwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5JQ29tbWl0RmlsZUxpbmssIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZUxpbms+KShfdiA9PiBuZXcgQ29tbWl0RmlsZUxpbmsoKS5Db3B5RnJvbTxDb21taXRGaWxlTGluaz4oX3YpKSkpKSk7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208UmVwb0ZpbGVTY29wZUVudGl0eT4oKChDb2RleC5JUmVwb0ZpbGVTY29wZUVudGl0eSkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTdG9yZWRCb3VuZFNvdXJjZUZpbGUgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JU3RvcmVkQm91bmRTb3VyY2VGaWxlIHtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIEJvdW5kU291cmNlRmlsZSBtX0JvdW5kU291cmNlRmlsZTtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIENvZGV4LklDbGFzc2lmaWNhdGlvbkxpc3QgbV9Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgQ29kZXguSVJlZmVyZW5jZUxpc3QgbV9Db21wcmVzc2VkUmVmZXJlbmNlcztcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3RvcmVkQm91bmRTb3VyY2VGaWxlKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTdG9yZWRCb3VuZFNvdXJjZUZpbGUoQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208U3RvcmVkQm91bmRTb3VyY2VGaWxlPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvZGV4LklCb3VuZFNvdXJjZUZpbGUgQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZS5Cb3VuZFNvdXJjZUZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQm91bmRTb3VyY2VGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEJvdW5kU291cmNlRmlsZSBCb3VuZFNvdXJjZUZpbGUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Cb3VuZFNvdXJjZUZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Cb3VuZFNvdXJjZUZpbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiBjbGFzc2lmaWNhdGlvbiBzcGFuc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguSUNsYXNzaWZpY2F0aW9uTGlzdCBDb21wcmVzc2VkQ2xhc3NpZmljYXRpb25zIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0NvbXByZXNzZWRDbGFzc2lmaWNhdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiByZWZlcmVuY2Ugc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4LklSZWZlcmVuY2VMaXN0IENvbXByZXNzZWRSZWZlcmVuY2VzIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fQ29tcHJlc3NlZFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Db21wcmVzc2VkUmVmZXJlbmNlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFN0b3JlZEJvdW5kU291cmNlRmlsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Cb3VuZFNvdXJjZUZpbGUgPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlRmlsZSxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlRmlsZT4oQm91bmRTb3VyY2VGaWxlLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkJvdW5kU291cmNlRmlsZSwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Cb3VuZFNvdXJjZUZpbGU+KSh2ID0+IG5ldyBCb3VuZFNvdXJjZUZpbGUoKS5Db3B5RnJvbTxCb3VuZFNvdXJjZUZpbGU+KHYpKSk7O1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tcHJlc3NlZENsYXNzaWZpY2F0aW9ucyA9ICgoQ29kZXguSVN0b3JlZEJvdW5kU291cmNlRmlsZSkodmFsdWUpKS5Db21wcmVzc2VkQ2xhc3NpZmljYXRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tcHJlc3NlZFJlZmVyZW5jZXMgPSAoKENvZGV4LklTdG9yZWRCb3VuZFNvdXJjZUZpbGUpKHZhbHVlKSkuQ29tcHJlc3NlZFJlZmVyZW5jZXM7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkpXVxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRGVmaW5pdGlvblN5bWJvbCA6IFJlZmVyZW5jZVN5bWJvbCwgQ29kZXguSURlZmluaXRpb25TeW1ib2wge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVWlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fRGlzcGxheU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9TaG9ydE5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db250YWluZXJRdWFsaWZpZWROYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nW10gbV9Nb2RpZmllcnM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5PYmplY3RNb2RlbC5HbHlwaCBtX0dseXBoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgaW50IG1fU3ltYm9sRGVwdGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBEb2N1bWVudGF0aW9uSW5mbyBtX0RvY3VtZW50YXRpb25JbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fVHlwZU5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9EZWNsYXJhdGlvbk5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Db21tZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEZWZpbml0aW9uU3ltYm9sKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGVmaW5pdGlvblN5bWJvbChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPERlZmluaXRpb25TeW1ib2w+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TeW1ib2woQ29kZXguSVJlZmVyZW5jZVN5bWJvbCB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERlZmluaXRpb25TeW1ib2woQ29kZXguSUNvZGVTeW1ib2wgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIE5PVEU6IFRoaXMgaXMgbm90IGFwcGxpY2FibGUgdG8gbW9zdCBzeW1ib2xzLiBPbmx5IHNldCBmb3Igc3ltYm9sc1xyXG4gICAgICAgIC8vLyB3aGljaCBhcmUgYWRkZWQgaW4gYSBzaGFyZWQgY29udGV4dCBhbmQgbmVlZCB0aGlzIGZvciBkZWR1cGxpY2F0aW9uKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFVpZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1VpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1VpZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgRGlzcGxheU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0Rpc3BsYXlOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgc2hvcnQgbmFtZSBvZiB0aGUgc3ltYm9sIChpLmUuIFRhc2spLlxyXG4gICAgICAgIC8vLyBUaGlzIGlzIHVzZWQgdG8gZmluZCB0aGUgc3ltYm9sIHdoZW4gc2VhcmNoIHRlcm0gZG9lcyBub3QgY29udGFpbiAnLidcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBTaG9ydE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29lcmNlU2hvcnROYW1lKHRoaXMubV9TaG9ydE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fU2hvcnROYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcXVhbGlmaWVkIG5hbWUgb2YgdGhlIHN5bWJvbCAoaS5lLiBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzLlRhc2spLlxyXG4gICAgICAgIC8vLyBUaGlzIGlzIHVzZWQgdG8gZmluZCB0aGUgc3ltYm9sIHdoZW4gdGhlIHNlYXJjaCB0ZXJtIGNvbnRhaW5zICcuJ1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbnRhaW5lclF1YWxpZmllZE5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db250YWluZXJRdWFsaWZpZWROYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29udGFpbmVyUXVhbGlmaWVkTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTW9kaWZpZXJzIGZvciB0aGUgc3ltYm9sIHN1Y2ggYXMgcHVibGljXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmdbXSBNb2RpZmllcnMge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Nb2RpZmllcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Nb2RpZmllcnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBnbHlwaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29kZXguT2JqZWN0TW9kZWwuR2x5cGggR2x5cGgge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9HbHlwaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0dseXBoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVwdGggb2YgdGhlIHN5bWJvbCBpbiBpdHMgc3ltYm9saWMgdHJlZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFN5bWJvbERlcHRoIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fU3ltYm9sRGVwdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9TeW1ib2xEZXB0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRG9jdW1lbnRhdGlvbiBmb3IgdGhlIHN5bWJvbCAoaWYgYW55KVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgQ29kZXguSURvY3VtZW50YXRpb25JbmZvIENvZGV4LklEZWZpbml0aW9uU3ltYm9sLkRvY3VtZW50YXRpb25JbmZvIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRvY3VtZW50YXRpb25JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRG9jdW1lbnRhdGlvbiBmb3IgdGhlIHN5bWJvbCAoaWYgYW55KVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgRG9jdW1lbnRhdGlvbkluZm8gRG9jdW1lbnRhdGlvbkluZm8ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Eb2N1bWVudGF0aW9uSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RvY3VtZW50YXRpb25JbmZvID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgdHlwZSBmb3IgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyAoaS5lLiByZXR1cm4gdHlwZSBvZiBtZXRob2QpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVHlwZU5hbWUge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9UeXBlTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1R5cGVOYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVjbGFyYXRpb24gbmFtZSBmb3IgdGhlIHN5bWJvbFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIERlY2xhcmF0aW9uTmFtZSB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0RlY2xhcmF0aW9uTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlY2xhcmF0aW9uTmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvbW1lbnQgYXBwbGllZCB0byB0aGUgZGVmaW5pdGlvblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIENvbW1lbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9Db21tZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguSURlZmluaXRpb25TeW1ib2wgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBEZWZpbml0aW9uU3ltYm9sIHtcclxuICAgICAgICAgICAgdGhpcy5tX1VpZCA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuVWlkO1xyXG4gICAgICAgICAgICB0aGlzLm1fRGlzcGxheU5hbWUgPSAoKENvZGV4LklEZWZpbml0aW9uU3ltYm9sKSh2YWx1ZSkpLkRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fU2hvcnROYW1lID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5TaG9ydE5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubV9Db250YWluZXJRdWFsaWZpZWROYW1lID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5Db250YWluZXJRdWFsaWZpZWROYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fTW9kaWZpZXJzID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5Nb2RpZmllcnM7XHJcbiAgICAgICAgICAgIHRoaXMubV9HbHlwaCA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuR2x5cGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9TeW1ib2xEZXB0aCA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuU3ltYm9sRGVwdGg7XHJcbiAgICAgICAgICAgIHRoaXMubV9Eb2N1bWVudGF0aW9uSW5mbyA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvbkluZm8sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uSW5mbz4oRG9jdW1lbnRhdGlvbkluZm8sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvbkluZm8sIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvbkluZm8+KSh2ID0+IG5ldyBEb2N1bWVudGF0aW9uSW5mbygpLkNvcHlGcm9tPERvY3VtZW50YXRpb25JbmZvPih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX1R5cGVOYW1lID0gKChDb2RleC5JRGVmaW5pdGlvblN5bWJvbCkodmFsdWUpKS5UeXBlTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5tX0RlY2xhcmF0aW9uTmFtZSA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuRGVjbGFyYXRpb25OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1fQ29tbWVudCA9ICgoQ29kZXguSURlZmluaXRpb25TeW1ib2wpKHZhbHVlKSkuQ29tbWVudDtcclxuICAgICAgICAgICAgYmFzZS5Db3B5RnJvbTxSZWZlcmVuY2VTeW1ib2w+KCgoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5JUmVmZXJlbmNlU3ltYm9sKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBSZWZlcmVuY2VTeW1ib2wgOiBTeW1ib2wsIENvZGV4LklSZWZlcmVuY2VTeW1ib2wge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fUmVmZXJlbmNlS2luZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9Jc0ltcGxpY2l0bHlEZWNsYXJlZDtcclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIGJvb2wgbV9FeGNsdWRlRnJvbURlZmF1bHRTZWFyY2g7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIG1fRXhjbHVkZUZyb21TZWFyY2g7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVN5bWJvbCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFJlZmVyZW5jZVN5bWJvbChDb2RleC5JUmVmZXJlbmNlU3ltYm9sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29weUZyb208UmVmZXJlbmNlU3ltYm9sPih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBSZWZlcmVuY2VTeW1ib2woQ29kZXguSUNvZGVTeW1ib2wgdmFsdWUpIDogXHJcbiAgICAgICAgICAgICAgICBiYXNlKHZhbHVlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGtpbmQgb2YgcmVmZXJlbmNlLiBUaGlzIGlzIHVzZWQgdG8gZ3JvdXAgcmVmZXJlbmNlcy5cclxuICAgICAgICAvLy8gKGkuZS4gZm9yIEMjKGFrYSAuTkVUKSBNZXRob2RPdmVycmlkZSwgSW50ZXJmYWNlTWVtYmVySW1wbGVtZW50YXRpb24sIEludGVyZmFjZUltcGxlbWVudGF0aW9uLCBldGMuKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFJlZmVyZW5jZUtpbmQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9SZWZlcmVuY2VLaW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlS2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5kaWNhdGVzIHRoZSBjb3JyZXNwb25kaW5nIGRlZmluaXRpb24gaXMgaW1wbGljaXRseSBkZWNsYXJlZCBhbmQgdGhlcmVmb3JlIHRoaXMgc2hvdWxkIG5vdCBiZVxyXG4gICAgICAgIC8vLyB1c2VkIGZvciBmaW5kIGFsbCByZWZlcmVuY2VzIHNlYXJjaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBJc0ltcGxpY2l0bHlEZWNsYXJlZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0lzSW1wbGljaXRseURlY2xhcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fSXNJbXBsaWNpdGx5RGVjbGFyZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEluZGljYXRlcyBpZiB0aGUgc3ltYm9sIHNob3VsZCBiZSBleGNsdWRlZCBmcm9tIHRoZSBkZWZpbml0aW9uL2ZpbmQgYWxsIHJlZmVyZW5jZXMgc2VhcmNoIChieSBkZWZhdWx0KS5cclxuICAgICAgICAvLy8gU3ltYm9sIHdpbGwgb25seSBiZSBpbmNsdWRlZCBpZiBraW5kIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEV4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0V4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0V4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSW5kaWNhdGVzIGlmIHRoZSBzeW1ib2wgc2hvdWxkIE5FVkVSIGJlIGluY2x1ZGVkIGluIHRoZSBkZWZpbml0aW9uL2ZpbmQgYWxsIHJlZmVyZW5jZXMgc2VhcmNoLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBFeGNsdWRlRnJvbVNlYXJjaCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0V4Y2x1ZGVGcm9tU2VhcmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2ggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LklSZWZlcmVuY2VTeW1ib2wgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTeW1ib2wge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlS2luZCA9ICgoQ29kZXguSVJlZmVyZW5jZVN5bWJvbCkodmFsdWUpKS5SZWZlcmVuY2VLaW5kO1xyXG4gICAgICAgICAgICB0aGlzLm1fSXNJbXBsaWNpdGx5RGVjbGFyZWQgPSAoKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkuSXNJbXBsaWNpdGx5RGVjbGFyZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubV9FeGNsdWRlRnJvbURlZmF1bHRTZWFyY2ggPSAoKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkuRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoO1xyXG4gICAgICAgICAgICB0aGlzLm1fRXhjbHVkZUZyb21TZWFyY2ggPSAoKENvZGV4LklSZWZlcmVuY2VTeW1ib2wpKHZhbHVlKSkuRXhjbHVkZUZyb21TZWFyY2g7XHJcbiAgICAgICAgICAgIGJhc2UuQ29weUZyb208U3ltYm9sPigoKENvZGV4LklDb2RlU3ltYm9sKSh2YWx1ZSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LklDb2RlU3ltYm9sKSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTeW1ib2wgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5JQ29kZVN5bWJvbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgbV9Qcm9qZWN0SWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBDb2RleC5PYmplY3RNb2RlbC5TeW1ib2xJZCBtX0lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIG1fS2luZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU3ltYm9sKCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTeW1ib2woQ29kZXguSUNvZGVTeW1ib2wgdmFsdWUpIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFN5bWJvbD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBwcm9qZWN0IGluIHdoaWNoIHRoZSBzeW1ib2wgYXBwZWFyc1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFByb2plY3RJZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1Byb2plY3RJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX1Byb2plY3RJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkZW50aWZpZXIgZm9yIHRoZSBzeW1ib2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbElkIElkIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9JZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHN5bWJvbCBraW5kLiAoaS5lLiBpbnRlcmZhY2UsIG1ldGhvZCwgZmllbGQpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgS2luZCB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX0tpbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9LaW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5JQ29kZVN5bWJvbCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFN5bWJvbCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9Qcm9qZWN0SWQgPSAoKENvZGV4LklDb2RlU3ltYm9sKSh2YWx1ZSkpLlByb2plY3RJZDtcclxuICAgICAgICAgICAgdGhpcy5tX0lkID0gKChDb2RleC5JQ29kZVN5bWJvbCkodmFsdWUpKS5JZDtcclxuICAgICAgICAgICAgdGhpcy5tX0tpbmQgPSAoKENvZGV4LklDb2RlU3ltYm9sKSh2YWx1ZSkpLktpbmQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoKFRUYXJnZXQpKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFtDb2RleC5TZXJpYWxpemF0aW9uSW50ZXJmYWNlQXR0cmlidXRlKHR5cGVvZihDb2RleC5TZGsuU2VhcmNoLklSZWZlcmVuY2VTZWFyY2hSZXN1bHQpKV1cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJlZmVyZW5jZVNlYXJjaFJlc3VsdCA6IFByb2plY3RGaWxlU2NvcGVFbnRpdHksIENvZGV4LlNkay5TZWFyY2guSVJlZmVyZW5jZVNlYXJjaFJlc3VsdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBSZWZlcmVuY2VTcGFuIG1fUmVmZXJlbmNlU3BhbjtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoUmVzdWx0KCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoUmVzdWx0KENvZGV4LlNkay5TZWFyY2guSVJlZmVyZW5jZVNlYXJjaFJlc3VsdCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkNvcHlGcm9tPFJlZmVyZW5jZVNlYXJjaFJlc3VsdD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgUmVmZXJlbmNlU2VhcmNoUmVzdWx0KENvZGV4LklQcm9qZWN0RmlsZVNjb3BlRW50aXR5IHZhbHVlKSA6IFxyXG4gICAgICAgICAgICAgICAgYmFzZSh2YWx1ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb2RleC5JUmVmZXJlbmNlU3BhbiBDb2RleC5TZGsuU2VhcmNoLklSZWZlcmVuY2VTZWFyY2hSZXN1bHQuUmVmZXJlbmNlU3BhbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5SZWZlcmVuY2VTcGFuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFJlZmVyZW5jZVNwYW4gUmVmZXJlbmNlU3BhbiB7XHJcbiAgICAgICAgICAgIGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX1JlZmVyZW5jZVNwYW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9SZWZlcmVuY2VTcGFuID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVFRhcmdldCBDb3B5RnJvbTxUVGFyZ2V0PihDb2RleC5TZGsuU2VhcmNoLklSZWZlcmVuY2VTZWFyY2hSZXN1bHQgdmFsdWUpXHJcbiAgICAgICAgICAgIHdoZXJlIFRUYXJnZXQgOiBSZWZlcmVuY2VTZWFyY2hSZXN1bHQge1xyXG4gICAgICAgICAgICB0aGlzLm1fUmVmZXJlbmNlU3BhbiA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3BhbixnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVNwYW4+KFJlZmVyZW5jZVNwYW4sIChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuPikodiA9PiBuZXcgUmVmZXJlbmNlU3BhbigpLkNvcHlGcm9tPFJlZmVyZW5jZVNwYW4+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KCgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBUZXh0TGluZVNwYW5SZXN1bHQgOiBQcm9qZWN0RmlsZVNjb3BlRW50aXR5LCBDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgVGV4dExpbmVTcGFuIG1fVGV4dFNwYW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhblJlc3VsdCgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhblJlc3VsdChDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxUZXh0TGluZVNwYW5SZXN1bHQ+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIFRleHRMaW5lU3BhblJlc3VsdChDb2RleC5JUHJvamVjdEZpbGVTY29wZUVudGl0eSB2YWx1ZSkgOiBcclxuICAgICAgICAgICAgICAgIGJhc2UodmFsdWUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29kZXguSVRleHRMaW5lU3BhbiBDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQuVGV4dFNwYW4ge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuVGV4dFNwYW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVGV4dExpbmVTcGFuIFRleHRTcGFuIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVGV4dFNwYW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UZXh0U3BhbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFRUYXJnZXQgQ29weUZyb208VFRhcmdldD4oQ29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogVGV4dExpbmVTcGFuUmVzdWx0IHtcclxuICAgICAgICAgICAgdGhpcy5tX1RleHRTcGFuID0gRW50aXR5VXRpbGl0aWVzLk51bGxPckNvcHk8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW4sZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW4+KFRleHRTcGFuLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3BhbiwgZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW4+KSh2ID0+IG5ldyBUZXh0TGluZVNwYW4oKS5Db3B5RnJvbTxUZXh0TGluZVNwYW4+KHYpKSk7O1xyXG4gICAgICAgICAgICBiYXNlLkNvcHlGcm9tPFByb2plY3RGaWxlU2NvcGVFbnRpdHk+KCgoQ29kZXguSVByb2plY3RGaWxlU2NvcGVFbnRpdHkpKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBbQ29kZXguU2VyaWFsaXphdGlvbkludGVyZmFjZUF0dHJpYnV0ZSh0eXBlb2YoQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTZWFyY2hSZXN1bHQgOiBDb2RleC5FbnRpdHlCYXNlLCBDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgVGV4dExpbmVTcGFuUmVzdWx0IG1fVGV4dExpbmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBEZWZpbml0aW9uU3ltYm9sIG1fRGVmaW5pdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgU2VhcmNoUmVzdWx0KCkge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hSZXN1bHQoQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxTZWFyY2hSZXN1bHQ+KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdGV4dCBzcGFuIGZvciBhIHRleHQgcmVzdWx0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQgQ29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0LlRleHRMaW5lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlRleHRMaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRleHQgc3BhbiBmb3IgYSB0ZXh0IHJlc3VsdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgVGV4dExpbmVTcGFuUmVzdWx0IFRleHRMaW5lIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fVGV4dExpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9UZXh0TGluZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmluaXRpb24gb2YgdGhlIHNlYXJjaCByZXN1bHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIENvZGV4LklEZWZpbml0aW9uU3ltYm9sIENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdC5EZWZpbml0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRlZmluaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgZGVmaW5pdGlvbiBvZiB0aGUgc2VhcmNoIHJlc3VsdFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgRGVmaW5pdGlvblN5bWJvbCBEZWZpbml0aW9uIHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1fRGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCB2YWx1ZSlcclxuICAgICAgICAgICAgd2hlcmUgVFRhcmdldCA6IFNlYXJjaFJlc3VsdCB7XHJcbiAgICAgICAgICAgIHRoaXMubV9UZXh0TGluZSA9IEVudGl0eVV0aWxpdGllcy5OdWxsT3JDb3B5PGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuUmVzdWx0LGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuUmVzdWx0PihUZXh0TGluZSwgKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5UZXh0TGluZVNwYW5SZXN1bHQsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuVGV4dExpbmVTcGFuUmVzdWx0PikodiA9PiBuZXcgVGV4dExpbmVTcGFuUmVzdWx0KCkuQ29weUZyb208VGV4dExpbmVTcGFuUmVzdWx0Pih2KSkpOztcclxuICAgICAgICAgICAgdGhpcy5tX0RlZmluaXRpb24gPSBFbnRpdHlVdGlsaXRpZXMuTnVsbE9yQ29weTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2wsZ2xvYmFsOjpDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU3ltYm9sPihEZWZpbml0aW9uLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TeW1ib2wsIGdsb2JhbDo6Q29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbD4pKHYgPT4gbmV3IERlZmluaXRpb25TeW1ib2woKS5Db3B5RnJvbTxEZWZpbml0aW9uU3ltYm9sPih2KSkpOztcclxuICAgICAgICAgICAgcmV0dXJuICgoVFRhcmdldCkodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgW0NvZGV4LlNlcmlhbGl6YXRpb25JbnRlcmZhY2VBdHRyaWJ1dGUodHlwZW9mKENvZGV4LlNkay5TZWFyY2guSUluZGV4KSldXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBJbmRleCA6IENvZGV4LkVudGl0eUJhc2UsIENvZGV4LlNkay5TZWFyY2guSUluZGV4IHtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgSW5kZXgoKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIEluZGV4KENvZGV4LlNkay5TZWFyY2guSUluZGV4IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5Db3B5RnJvbTxJbmRleD4odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBUVGFyZ2V0IENvcHlGcm9tPFRUYXJnZXQ+KENvZGV4LlNkay5TZWFyY2guSUluZGV4IHZhbHVlKVxyXG4gICAgICAgICAgICB3aGVyZSBUVGFyZ2V0IDogSW5kZXgge1xyXG4gICAgICAgICAgICByZXR1cm4gKChUVGFyZ2V0KSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbm5hbWVzcGFjZSBDb2RleC5GcmFtZXdvcmsuVHlwZXMge1xyXG4gICAgdXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuICAgIHVzaW5nIENvbW1pdCA9IENvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdDtcclxuICAgIHVzaW5nIENvbW1pdENoYW5nZWRGaWxlID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0Q2hhbmdlZEZpbGU7XHJcbiAgICB1c2luZyBDb21taXRGaWxlTGluayA9IENvZGV4Lk9iamVjdE1vZGVsLkNvbW1pdEZpbGVMaW5rO1xyXG4gICAgdXNpbmcgQnJhbmNoID0gQ29kZXguT2JqZWN0TW9kZWwuQnJhbmNoO1xyXG4gICAgdXNpbmcgQm91bmRTb3VyY2VGaWxlID0gQ29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VGaWxlO1xyXG4gICAgdXNpbmcgQm91bmRTb3VyY2VJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VJbmZvO1xyXG4gICAgdXNpbmcgU291cmNlQ29udHJvbEZpbGVJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuU291cmNlQ29udHJvbEZpbGVJbmZvO1xyXG4gICAgdXNpbmcgU291cmNlRmlsZUluZm8gPSBDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VGaWxlSW5mbztcclxuICAgIHVzaW5nIEVuY29kaW5nRGVzY3JpcHRpb24gPSBDb2RleC5PYmplY3RNb2RlbC5FbmNvZGluZ0Rlc2NyaXB0aW9uO1xyXG4gICAgdXNpbmcgU291cmNlRmlsZSA9IENvZGV4Lk9iamVjdE1vZGVsLlNvdXJjZUZpbGU7XHJcbiAgICB1c2luZyBPdXRsaW5pbmdSZWdpb24gPSBDb2RleC5PYmplY3RNb2RlbC5PdXRsaW5pbmdSZWdpb247XHJcbiAgICB1c2luZyBEZWZpbml0aW9uU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLkRlZmluaXRpb25TcGFuO1xyXG4gICAgdXNpbmcgUGFyYW1ldGVyRGVmaW5pdGlvblNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5QYXJhbWV0ZXJEZWZpbml0aW9uU3BhbjtcclxuICAgIHVzaW5nIFJlZmVyZW5jZVNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VTcGFuO1xyXG4gICAgdXNpbmcgUGFyYW1ldGVyUmVmZXJlbmNlU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLlBhcmFtZXRlclJlZmVyZW5jZVNwYW47XHJcbiAgICB1c2luZyBDbGFzc2lmaWNhdGlvblNwYW4gPSBDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblNwYW47XHJcbiAgICB1c2luZyBTeW1ib2xTcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuU3ltYm9sU3BhbjtcclxuICAgIHVzaW5nIFRleHRMaW5lU3BhbiA9IENvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3BhbjtcclxuICAgIHVzaW5nIExpbmVTcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuTGluZVNwYW47XHJcbiAgICB1c2luZyBTcGFuID0gQ29kZXguT2JqZWN0TW9kZWwuU3BhbjtcclxuICAgIHVzaW5nIENvZGVSZXZpZXcgPSBDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3O1xyXG4gICAgdXNpbmcgQ29kZVJldmlld0l0ZXJhdGlvbiA9IENvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdJdGVyYXRpb247XHJcbiAgICB1c2luZyBDb2RlUmV2aWV3ZXJJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld2VySW5mbztcclxuICAgIHVzaW5nIENvZGVSZXZpZXdGaWxlID0gQ29kZXguT2JqZWN0TW9kZWwuQ29kZVJldmlld0ZpbGU7XHJcbiAgICB1c2luZyBDb2RlUmV2aWV3Q29tbWVudFRocmVhZCA9IENvZGV4Lk9iamVjdE1vZGVsLkNvZGVSZXZpZXdDb21tZW50VGhyZWFkO1xyXG4gICAgdXNpbmcgQ29kZVJldmlld0NvbW1lbnQgPSBDb2RleC5PYmplY3RNb2RlbC5Db2RlUmV2aWV3Q29tbWVudDtcclxuICAgIHVzaW5nIExhbmd1YWdlSW5mbyA9IENvZGV4Lk9iamVjdE1vZGVsLkxhbmd1YWdlSW5mbztcclxuICAgIHVzaW5nIENsYXNzaWZpY2F0aW9uU3R5bGUgPSBDb2RleC5PYmplY3RNb2RlbC5DbGFzc2lmaWNhdGlvblN0eWxlO1xyXG4gICAgdXNpbmcgQW5hbHl6ZWRQcm9qZWN0ID0gQ29kZXguT2JqZWN0TW9kZWwuQW5hbHl6ZWRQcm9qZWN0O1xyXG4gICAgdXNpbmcgUmVmZXJlbmNlZFByb2plY3QgPSBDb2RleC5PYmplY3RNb2RlbC5SZWZlcmVuY2VkUHJvamVjdDtcclxuICAgIHVzaW5nIFByb2plY3RGaWxlTGluayA9IENvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RGaWxlTGluaztcclxuICAgIHVzaW5nIERvY3VtZW50YXRpb25JbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuRG9jdW1lbnRhdGlvbkluZm87XHJcbiAgICB1c2luZyBQYXJhbWV0ZXJEb2N1bWVudGF0aW9uID0gQ29kZXguT2JqZWN0TW9kZWwuUGFyYW1ldGVyRG9jdW1lbnRhdGlvbjtcclxuICAgIHVzaW5nIFR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbiA9IENvZGV4Lk9iamVjdE1vZGVsLlR5cGVkUGFyYW1ldGVyRG9jdW1lbnRhdGlvbjtcclxuICAgIHVzaW5nIERvY3VtZW50YXRpb25SZWZlcmVuY2VTeW1ib2wgPSBDb2RleC5PYmplY3RNb2RlbC5Eb2N1bWVudGF0aW9uUmVmZXJlbmNlU3ltYm9sO1xyXG4gICAgdXNpbmcgUHJvcGVydHlTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5U2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBQcm9wZXJ0eU1hcCA9IENvZGV4Lk9iamVjdE1vZGVsLlByb3BlcnR5TWFwO1xyXG4gICAgdXNpbmcgUmVwb3NpdG9yeSA9IENvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnk7XHJcbiAgICB1c2luZyBSZXBvc2l0b3J5UmVmZXJlbmNlID0gQ29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVJlZmVyZW5jZTtcclxuICAgIHVzaW5nIFNlYXJjaEVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLlNlYXJjaEVudGl0eTtcclxuICAgIHVzaW5nIFJlcG9TY29wZUVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLlJlcG9TY29wZUVudGl0eTtcclxuICAgIHVzaW5nIENvbW1pdFNjb3BlRW50aXR5ID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0U2NvcGVFbnRpdHk7XHJcbiAgICB1c2luZyBQcm9qZWN0U2NvcGVFbnRpdHkgPSBDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0U2NvcGVFbnRpdHk7XHJcbiAgICB1c2luZyBSZXBvRmlsZVNjb3BlRW50aXR5ID0gQ29kZXguT2JqZWN0TW9kZWwuUmVwb0ZpbGVTY29wZUVudGl0eTtcclxuICAgIHVzaW5nIFByb2plY3RGaWxlU2NvcGVFbnRpdHkgPSBDb2RleC5PYmplY3RNb2RlbC5Qcm9qZWN0RmlsZVNjb3BlRW50aXR5O1xyXG4gICAgdXNpbmcgUmVnaXN0ZXJlZEVudGl0eSA9IENvZGV4Lk9iamVjdE1vZGVsLlJlZ2lzdGVyZWRFbnRpdHk7XHJcbiAgICB1c2luZyBTdG9yZWRGaWx0ZXIgPSBDb2RleC5PYmplY3RNb2RlbC5TdG9yZWRGaWx0ZXI7XHJcbiAgICB1c2luZyBEZWZpbml0aW9uU2VhcmNoTW9kZWwgPSBDb2RleC5PYmplY3RNb2RlbC5EZWZpbml0aW9uU2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBMYW5ndWFnZVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuTGFuZ3VhZ2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFJlZmVyZW5jZVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuUmVmZXJlbmNlU2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBTb3VyY2VTZWFyY2hNb2RlbEJhc2UgPSBDb2RleC5PYmplY3RNb2RlbC5Tb3VyY2VTZWFyY2hNb2RlbEJhc2U7XHJcbiAgICB1c2luZyBCb3VuZFNvdXJjZVNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuQm91bmRTb3VyY2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFRleHRTb3VyY2VTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlRleHRTb3VyY2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFJlcG9zaXRvcnlTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlJlcG9zaXRvcnlTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFByb2plY3RTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIFByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbCA9IENvZGV4Lk9iamVjdE1vZGVsLlByb2plY3RSZWZlcmVuY2VTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIENvbW1pdFNlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0U2VhcmNoTW9kZWw7XHJcbiAgICB1c2luZyBDb21taXRGaWxlc1NlYXJjaE1vZGVsID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZXNTZWFyY2hNb2RlbDtcclxuICAgIHVzaW5nIEZpbGVTdGF0aXN0aWNzID0gQ29kZXguT2JqZWN0TW9kZWwuRmlsZVN0YXRpc3RpY3M7XHJcbiAgICB1c2luZyBSZXBvc2l0b3J5U3RvcmVJbmZvID0gQ29kZXguT2JqZWN0TW9kZWwuUmVwb3NpdG9yeVN0b3JlSW5mbztcclxuICAgIHVzaW5nIENvbW1pdEZpbGVzRGlyZWN0b3J5ID0gQ29kZXguT2JqZWN0TW9kZWwuQ29tbWl0RmlsZXNEaXJlY3Rvcnk7XHJcbiAgICB1c2luZyBTdG9yZWRCb3VuZFNvdXJjZUZpbGUgPSBDb2RleC5PYmplY3RNb2RlbC5TdG9yZWRCb3VuZFNvdXJjZUZpbGU7XHJcbiAgICB1c2luZyBEZWZpbml0aW9uU3ltYm9sID0gQ29kZXguT2JqZWN0TW9kZWwuRGVmaW5pdGlvblN5bWJvbDtcclxuICAgIHVzaW5nIFJlZmVyZW5jZVN5bWJvbCA9IENvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVN5bWJvbDtcclxuICAgIHVzaW5nIFN5bWJvbCA9IENvZGV4Lk9iamVjdE1vZGVsLlN5bWJvbDtcclxuICAgIHVzaW5nIFJlZmVyZW5jZVNlYXJjaFJlc3VsdCA9IENvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZVNlYXJjaFJlc3VsdDtcclxuICAgIHVzaW5nIFRleHRMaW5lU3BhblJlc3VsdCA9IENvZGV4Lk9iamVjdE1vZGVsLlRleHRMaW5lU3BhblJlc3VsdDtcclxuICAgIHVzaW5nIFNlYXJjaFJlc3VsdCA9IENvZGV4Lk9iamVjdE1vZGVsLlNlYXJjaFJlc3VsdDtcclxuICAgIHVzaW5nIEluZGV4ID0gQ29kZXguT2JqZWN0TW9kZWwuSW5kZXg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgcHVibGljIHBhcnRpYWwgaW50ZXJmYWNlIElTdG9yZSB7XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIENvZGV4Lk9iamVjdE1vZGVsXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBEZWZpbmVzIENvZGV4IGdseXBoc1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBlbnVtIEdseXBoXHJcbiAgICB7XHJcbiAgICAgICAgVW5rbm93biA9IC0xLFxyXG4gICAgICAgIEFzc2VtYmx5LFxyXG5cclxuICAgICAgICBCYXNpY0ZpbGUsXHJcbiAgICAgICAgQmFzaWNQcm9qZWN0LFxyXG5cclxuICAgICAgICBDbGFzc1B1YmxpYyxcclxuICAgICAgICBDbGFzc1Byb3RlY3RlZCxcclxuICAgICAgICBDbGFzc1ByaXZhdGUsXHJcbiAgICAgICAgQ2xhc3NJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgQ1NoYXJwRmlsZSxcclxuICAgICAgICBDU2hhcnBQcm9qZWN0LFxyXG5cclxuICAgICAgICBDb25zdGFudFB1YmxpYyxcclxuICAgICAgICBDb25zdGFudFByb3RlY3RlZCxcclxuICAgICAgICBDb25zdGFudFByaXZhdGUsXHJcbiAgICAgICAgQ29uc3RhbnRJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgRGVsZWdhdGVQdWJsaWMsXHJcbiAgICAgICAgRGVsZWdhdGVQcm90ZWN0ZWQsXHJcbiAgICAgICAgRGVsZWdhdGVQcml2YXRlLFxyXG4gICAgICAgIERlbGVnYXRlSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIEVudW1QdWJsaWMsXHJcbiAgICAgICAgRW51bVByb3RlY3RlZCxcclxuICAgICAgICBFbnVtUHJpdmF0ZSxcclxuICAgICAgICBFbnVtSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIEVudW1NZW1iZXIsXHJcblxyXG4gICAgICAgIEVycm9yLFxyXG5cclxuICAgICAgICBFdmVudFB1YmxpYyxcclxuICAgICAgICBFdmVudFByb3RlY3RlZCxcclxuICAgICAgICBFdmVudFByaXZhdGUsXHJcbiAgICAgICAgRXZlbnRJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgRXh0ZW5zaW9uTWV0aG9kUHVibGljLFxyXG4gICAgICAgIEV4dGVuc2lvbk1ldGhvZFByb3RlY3RlZCxcclxuICAgICAgICBFeHRlbnNpb25NZXRob2RQcml2YXRlLFxyXG4gICAgICAgIEV4dGVuc2lvbk1ldGhvZEludGVybmFsLFxyXG5cclxuICAgICAgICBGaWVsZFB1YmxpYyxcclxuICAgICAgICBGaWVsZFByb3RlY3RlZCxcclxuICAgICAgICBGaWVsZFByaXZhdGUsXHJcbiAgICAgICAgRmllbGRJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgSW50ZXJmYWNlUHVibGljLFxyXG4gICAgICAgIEludGVyZmFjZVByb3RlY3RlZCxcclxuICAgICAgICBJbnRlcmZhY2VQcml2YXRlLFxyXG4gICAgICAgIEludGVyZmFjZUludGVybmFsLFxyXG5cclxuICAgICAgICBJbnRyaW5zaWMsXHJcblxyXG4gICAgICAgIEtleXdvcmQsXHJcblxyXG4gICAgICAgIExhYmVsLFxyXG5cclxuICAgICAgICBMb2NhbCxcclxuXHJcbiAgICAgICAgTmFtZXNwYWNlLFxyXG5cclxuICAgICAgICBNZXRob2RQdWJsaWMsXHJcbiAgICAgICAgTWV0aG9kUHJvdGVjdGVkLFxyXG4gICAgICAgIE1ldGhvZFByaXZhdGUsXHJcbiAgICAgICAgTWV0aG9kSW50ZXJuYWwsXHJcblxyXG4gICAgICAgIE1vZHVsZVB1YmxpYyxcclxuICAgICAgICBNb2R1bGVQcm90ZWN0ZWQsXHJcbiAgICAgICAgTW9kdWxlUHJpdmF0ZSxcclxuICAgICAgICBNb2R1bGVJbnRlcm5hbCxcclxuXHJcbiAgICAgICAgT3BlbkZvbGRlcixcclxuXHJcbiAgICAgICAgT3BlcmF0b3IsXHJcblxyXG4gICAgICAgIFBhcmFtZXRlcixcclxuXHJcbiAgICAgICAgUHJvcGVydHlQdWJsaWMsXHJcbiAgICAgICAgUHJvcGVydHlQcm90ZWN0ZWQsXHJcbiAgICAgICAgUHJvcGVydHlQcml2YXRlLFxyXG4gICAgICAgIFByb3BlcnR5SW50ZXJuYWwsXHJcblxyXG4gICAgICAgIFJhbmdlVmFyaWFibGUsXHJcblxyXG4gICAgICAgIFJlZmVyZW5jZSxcclxuXHJcbiAgICAgICAgU3RydWN0dXJlUHVibGljLFxyXG4gICAgICAgIFN0cnVjdHVyZVByb3RlY3RlZCxcclxuICAgICAgICBTdHJ1Y3R1cmVQcml2YXRlLFxyXG4gICAgICAgIFN0cnVjdHVyZUludGVybmFsLFxyXG5cclxuICAgICAgICBUeXBlUGFyYW1ldGVyLFxyXG5cclxuICAgICAgICBVcCxcclxuICAgICAgICBEb3duLFxyXG4gICAgICAgIExlZnQsXHJcbiAgICAgICAgUmlnaHQsXHJcbiAgICAgICAgRG90LFxyXG5cclxuICAgICAgICBTbmlwcGV0XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBHbHlwaFV0aWxpdGllc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdXNob3J0IEdldEdseXBoTnVtYmVyKHRoaXMgR2x5cGggZ2x5cGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2hvcnQgcmVzdWx0ID0gKHVzaG9ydCkoKHVzaG9ydClHZXRTdGFuZGFyZEdseXBoR3JvdXAoZ2x5cGgpICsgKHVzaG9ydClHZXRTdGFuZGFyZEdseXBoSXRlbShnbHlwaCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU3RhbmRhcmRHbHlwaEdyb3VwIEdldFN0YW5kYXJkR2x5cGhHcm91cChHbHlwaCBnbHlwaClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZ2x5cGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQXNzZW1ibHk6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEFzc2VtYmx5O1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ2xhc3NQdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5DbGFzc1ByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwQ2xhc3M7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Db25zdGFudFB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNvbnN0YW50UHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBDb25zdGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNTaGFycEZpbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaENTaGFycEZpbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5EZWxlZ2F0ZVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRlbGVnYXRlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBEZWxlZ2F0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1QdWJsaWM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1Qcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1Qcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FbnVtSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwRW51bTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1NZW1iZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwRW51bU1lbWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXh0ZW5zaW9uTWV0aG9kUHVibGljOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhFeHRlbnNpb25NZXRob2Q7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FeHRlbnNpb25NZXRob2RQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEV4dGVuc2lvbk1ldGhvZFByb3RlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV4dGVuc2lvbk1ldGhvZFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEV4dGVuc2lvbk1ldGhvZFByaXZhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FeHRlbnNpb25NZXRob2RJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoRXh0ZW5zaW9uTWV0aG9kSW50ZXJuYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudFB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXZlbnRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkV2ZW50UHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRXZlbnRJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBFdmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkZpZWxkUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRmllbGRQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEZpZWxkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguSW50ZXJmYWNlUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5JbnRlcmZhY2VQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cEludGVyZmFjZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludHJpbnNpYzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBJbnRyaW5zaWM7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5LZXl3b3JkOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhLZXl3b3JkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTGFiZWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwSW50cmluc2ljO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTG9jYWw6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwVmFyaWFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5OYW1lc3BhY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwTmFtZXNwYWNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kUHVibGljOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5NZXRob2RQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1ldGhvZFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1ldGhvZEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cE1ldGhvZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1vZHVsZVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTW9kdWxlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBNb2R1bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5PcGVuRm9sZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhPcGVuRm9sZGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguT3BlcmF0b3I6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwT3BlcmF0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5QYXJhbWV0ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwVmFyaWFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Qcm9wZXJ0eVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlByb3BlcnR5UHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBQcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlJhbmdlVmFyaWFibGU6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaEdyb3VwVmFyaWFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5SZWZlcmVuY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhHcm91cC5HbHlwaFJlZmVyZW5jZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlN0cnVjdHVyZVB1YmxpYzpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguU3RydWN0dXJlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoR3JvdXBTdHJ1Y3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5UeXBlUGFyYW1ldGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoR3JvdXAuR2x5cGhHcm91cFR5cGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5VcDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRG93bjpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTGVmdDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRvdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEdyb3VwLkdseXBoQXJyb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXJndW1lbnRFeGNlcHRpb24oXCJnbHlwaFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgU3RhbmRhcmRHbHlwaEl0ZW0gR2V0U3RhbmRhcmRHbHlwaEl0ZW0oR2x5cGggaWNvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaWNvbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5DbGFzc1Byb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkRlbGVnYXRlUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FbnVtUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudFByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRmllbGRQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkludGVyZmFjZVByb3RlY3RlZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kUHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Nb2R1bGVQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLlByb3BlcnR5UHJvdGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVQcm90ZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0YW5kYXJkR2x5cGhJdGVtLkdseXBoSXRlbVByb3RlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkNsYXNzUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5EZWxlZ2F0ZVByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkVudW1Qcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudFByaXZhdGU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLkZpZWxkUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguSW50ZXJmYWNlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTW9kdWxlUHJpdmF0ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguUHJvcGVydHlQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVQcml2YXRlOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdGFuZGFyZEdseXBoSXRlbS5HbHlwaEl0ZW1Qcml2YXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ2xhc3NJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguQ29uc3RhbnRJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRGVsZWdhdGVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguRW51bUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5FdmVudEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5GaWVsZEludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5JbnRlcmZhY2VJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgIGNhc2UgR2x5cGguTWV0aG9kSW50ZXJuYWw6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdseXBoLk1vZHVsZUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5Qcm9wZXJ0eUludGVybmFsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBHbHlwaC5TdHJ1Y3R1cmVJbnRlcm5hbDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEl0ZW0uR2x5cGhJdGVtRnJpZW5kO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCBhbnkgb3ZlcmxheXNcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RhbmRhcmRHbHlwaEl0ZW0uR2x5cGhJdGVtUHVibGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIERlc2NyaWJlcyB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIGdseXBocyB0aGF0IGNhbiBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgY29tcGxldGlvbiB0b29sIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIHB1YmxpYyBlbnVtIFN0YW5kYXJkR2x5cGhHcm91cFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBjbGFzc2VzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwQ2xhc3MgPSAwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGNvbnN0YW50cy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cENvbnN0YW50ID0gNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBkZWxlZ2F0ZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBEZWxlZ2F0ZSA9IDEyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGVudW1lcmF0aW9ucy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEVudW0gPSAxOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBlbnVtZXJhdGlvbiBtZW1iZXJzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwRW51bU1lbWJlciA9IDI0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGV2ZW50cy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEV2ZW50ID0gMzAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZXhjZXB0aW9ucy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEV4Y2VwdGlvbiA9IDM2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGZpZWxkcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEZpZWxkID0gNDIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgaW50ZXJmYWNlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEludGVyZmFjZSA9IDQ4LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG1hY3Jvcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE1hY3JvID0gNTQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgbWFwcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE1hcCA9IDYwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG1hcCBpdGVtcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE1hcEl0ZW0gPSA2NixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwTWV0aG9kID0gNzIsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Igb3ZlcmxvYWRzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwT3ZlcmxvYWQgPSA3OCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBtb2R1bGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwTW9kdWxlID0gODQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgbmFtZXNwYWNlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE5hbWVzcGFjZSA9IDkwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG9wZXJhdG9ycy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cE9wZXJhdG9yID0gOTYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFByb3BlcnR5ID0gMTAyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHN0cnVjdHVyZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBTdHJ1Y3QgPSAxMDgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgdGVtcGxhdGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwVGVtcGxhdGUgPSAxMTQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgdHlwZWRlZnMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBUeXBlZGVmID0gMTIwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHR5cGVzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwVHlwZSA9IDEyNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB1bmlvbnMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBVbmlvbiA9IDEzMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB2YXJpYWJsZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBWYXJpYWJsZSA9IDEzOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciB2YWx1ZSB0eXBlcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cFZhbHVlVHlwZSA9IDE0NCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBpbnRyaW5zaWMgc3ltYm9scy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEludHJpbnNpYyA9IDE1MCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBKIyBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwSlNoYXJwTWV0aG9kID0gMTU2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIGZpZWxkcy5cclxuICAgICAgICAgICAgR2x5cGhHcm91cEpTaGFycEZpZWxkID0gMTYyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIGNsYXNzZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBKU2hhcnBDbGFzcyA9IDE2OCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBKIyBuYW1lc3BhY2VzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwSlNoYXJwTmFtZXNwYWNlID0gMTc0LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIGludGVyZmFjZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBKU2hhcnBJbnRlcmZhY2UgPSAxODAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZXJyb3JzLlxyXG4gICAgICAgICAgICBHbHlwaEdyb3VwRXJyb3IgPSAxODYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQlNDIGZpbGVzLlxyXG4gICAgICAgICAgICBHbHlwaEJzY0ZpbGUgPSAxOTEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgYXNzZW1ibGllcy5cclxuICAgICAgICAgICAgR2x5cGhBc3NlbWJseSA9IDE5MixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBsaWJyYXJpZXMuXHJcbiAgICAgICAgICAgIEdseXBoTGlicmFyeSA9IDE5MyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBWQiBwcm9qZWN0cy5cclxuICAgICAgICAgICAgR2x5cGhWQlByb2plY3QgPSAxOTQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQyMgcHJvamVjdHMuXHJcbiAgICAgICAgICAgIEdseXBoQ29vbFByb2plY3QgPSAxOTYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQysrIHByb2plY3RzLlxyXG4gICAgICAgICAgICBHbHlwaENwcFByb2plY3QgPSAxOTksXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZGlhbG9nIGlkZW50aWZpZXJzLlxyXG4gICAgICAgICAgICBHbHlwaERpYWxvZ0lkID0gMjAwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIG9wZW4gZm9sZGVycy5cclxuICAgICAgICAgICAgR2x5cGhPcGVuRm9sZGVyID0gMjAxLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGNsb3NlZCBmb2xkZXJzLlxyXG4gICAgICAgICAgICBHbHlwaENsb3NlZEZvbGRlciA9IDIwMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhcnJvdyBzeW1ib2xzLlxyXG4gICAgICAgICAgICBHbHlwaEFycm93ID0gMjAzLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEMjIGZpbGVzLlxyXG4gICAgICAgICAgICBHbHlwaENTaGFycEZpbGUgPSAyMDQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgQyMgZXhwYW5zaW9ucy5cclxuICAgICAgICAgICAgR2x5cGhDU2hhcnBFeHBhbnNpb24gPSAyMDUsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Iga2V5d29yZHMuXHJcbiAgICAgICAgICAgIEdseXBoS2V5d29yZCA9IDIwNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBpbmZvcm1hdGlvbi5cclxuICAgICAgICAgICAgR2x5cGhJbmZvcm1hdGlvbiA9IDIwNyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciByZWZlcmVuY2VzLlxyXG4gICAgICAgICAgICBHbHlwaFJlZmVyZW5jZSA9IDIwOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciByZWN1cnNpb24uXHJcbiAgICAgICAgICAgIEdseXBoUmVjdXJzaW9uID0gMjA5LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIFhNTCBpdGVtcy5cclxuICAgICAgICAgICAgR2x5cGhYbWxJdGVtID0gMjEwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIEojIHByb2plY3RzLlxyXG4gICAgICAgICAgICBHbHlwaEpTaGFycFByb2plY3QgPSAyMTEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgSiMgZG9jdW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaEpTaGFycERvY3VtZW50ID0gMjEyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGZvcndhcmRlZCB0eXBlcy5cclxuICAgICAgICAgICAgR2x5cGhGb3J3YXJkVHlwZSA9IDIxMyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBjYWxsZXJzIGdyYXBocy5cclxuICAgICAgICAgICAgR2x5cGhDYWxsZXJzR3JhcGggPSAyMTQsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY2FsbCBncmFwaHMuXHJcbiAgICAgICAgICAgIEdseXBoQ2FsbEdyYXBoID0gMjE1LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGJ1aWxkIHdhcm5pbmdzLlxyXG4gICAgICAgICAgICBHbHlwaFdhcm5pbmcgPSAyMTYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3Igc29tZXRoaW5nIHRoYXQgbWF5IGJlIGEgcmVmZXJlbmNlLlxyXG4gICAgICAgICAgICBHbHlwaE1heWJlUmVmZXJlbmNlID0gMjE3LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHNvbWV0aGluZyB0aGF0IG1heSBiZSBhIGNhbGxlci5cclxuICAgICAgICAgICAgR2x5cGhNYXliZUNhbGxlciA9IDIxOCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBzb21ldGhpbmcgdGhhdCBtYXkgYmUgYSBjYWxsLlxyXG4gICAgICAgICAgICBHbHlwaE1heWJlQ2FsbCA9IDIxOSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBleHRlbnNpb24gbWV0aG9kcy5cclxuICAgICAgICAgICAgR2x5cGhFeHRlbnNpb25NZXRob2QgPSAyMjAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgaW50ZXJuYWwgZXh0ZW5zaW9uIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoRXh0ZW5zaW9uTWV0aG9kSW50ZXJuYWwgPSAyMjEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgZnJpZW5kIGV4dGVuc2lvbiBtZXRob2RzLlxyXG4gICAgICAgICAgICBHbHlwaEV4dGVuc2lvbk1ldGhvZEZyaWVuZCA9IDIyMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBwcm90ZWN0ZWQgZXh0ZW5zaW9uIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoRXh0ZW5zaW9uTWV0aG9kUHJvdGVjdGVkID0gMjIzLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHByaXZhdGUgZXh0ZW5zaW9uIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIEdseXBoRXh0ZW5zaW9uTWV0aG9kUHJpdmF0ZSA9IDIyNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBleHRlbnNpb24gbWV0aG9kIHNob3J0Y3V0cy5cclxuICAgICAgICAgICAgR2x5cGhFeHRlbnNpb25NZXRob2RTaG9ydGN1dCA9IDIyNSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIGZvciBYTUwgYXR0cmlidXRlcy5cclxuICAgICAgICAgICAgR2x5cGhYbWxBdHRyaWJ1dGUgPSAyMjYsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY2hpbGQgWE1MIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbENoaWxkID0gMjI3LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIGRlc2NlbmRhbnQgWE1MIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbERlc2NlbmRhbnQgPSAyMjgsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgWE1MIG5hbWVzcGFjZXMuXHJcbiAgICAgICAgICAgIEdseXBoWG1sTmFtZXNwYWNlID0gMjI5LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIHF1ZXN0aW9uIG1hcmsgZm9yIFhNTCBhdHRyaWJ1dGVzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbEF0dHJpYnV0ZVF1ZXN0aW9uID0gMjMwLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIGNoZWNrIG1hcmsgZm9yIFhNTCBhdHRyaWJ1dGVzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbEF0dHJpYnV0ZUNoZWNrID0gMjMxLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIHF1ZXN0aW9uIG1hcmsgZm9yIFhNTCBjaGlsZCBlbGVtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhYbWxDaGlsZFF1ZXN0aW9uID0gMjMyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIGNoZWNrIG1hcmsgZm9yIFhNTCBjaGlsZCBlbGVtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhYbWxDaGlsZENoZWNrID0gMjMzLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgd2l0aCBhIHF1ZXN0aW9uIG1hcmsgZm9yIFhNTCBkZXNjZW5kYW50IGVsZW1lbnRzLlxyXG4gICAgICAgICAgICBHbHlwaFhtbERlc2NlbmRhbnRRdWVzdGlvbiA9IDIzNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBzeW1ib2xzIHdpdGggYSBjaGVjayBtYXJrIGZvciBYTUwgZGVzY2VuZGFudCBlbGVtZW50cy5cclxuICAgICAgICAgICAgR2x5cGhYbWxEZXNjZW5kYW50Q2hlY2sgPSAyMzUsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgc3ltYm9scyBmb3IgY29tcGxldGlvbiB3YXJuaW5nc1xyXG4gICAgICAgICAgICBHbHlwaENvbXBsZXRpb25XYXJuaW5nID0gMjM2LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIHN5bWJvbHMgZm9yIHVua25vd24gdHlwZXMuXHJcbiAgICAgICAgICAgIEdseXBoR3JvdXBVbmtub3duID0gMjM3XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIERlc2NyaWJlcyBpY29ucyBvciBnbHlwaHMgdGhhdCBhcmUgdXNlZCBpbiBzdGF0ZW1lbnQgY29tcGxldGlvbi5cclxuICAgICAgICBwdWJsaWMgZW51bSBTdGFuZGFyZEdseXBoSXRlbVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhIHB1YmxpYyBzeW1ib2wuXHJcbiAgICAgICAgICAgIEdseXBoSXRlbVB1YmxpYyA9IDAsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgYW4gaW50ZXJuYWwgc3ltYm9sLlxyXG4gICAgICAgICAgICBHbHlwaEl0ZW1JbnRlcm5hbCA9IDEsXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgICAgIC8vICAgICBEZXNjcmliZXMgYSBmcmllbmQgc3ltYm9sLlxyXG4gICAgICAgICAgICBHbHlwaEl0ZW1GcmllbmQgPSAyLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGEgcHJvdGVjdGVkIHN5bWJvbC5cclxuICAgICAgICAgICAgR2x5cGhJdGVtUHJvdGVjdGVkID0gMyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhIHByaXZhdGUgc3ltYm9sLlxyXG4gICAgICAgICAgICBHbHlwaEl0ZW1Qcml2YXRlID0gNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIERlc2NyaWJlcyBhIHNob3J0Y3V0IHN5bWJvbC5cclxuICAgICAgICAgICAgR2x5cGhJdGVtU2hvcnRjdXQgPSA1LFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgICAgICAvLyAgICAgRGVzY3JpYmVzIGEgc3ltYm9sIHRoYXQgaGFzIGFsbCAob3Igbm9uZSkgb2YgdGhlIHN0YW5kYXJkIGF0dHJpYnV0ZXMuXHJcbiAgICAgICAgICAgIFRvdGFsR2x5cGhJdGVtcyA9IDZcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgTmV3dG9uc29mdC5Kc29uO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgQ29tcGF0aWJpbGl0eUV4dGVuc2lvbnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZyBUb0xvd2VySW52YXJpYW50KHRoaXMgc3RyaW5nIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLlRvTG93ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDb2RleC5PYmplY3RNb2RlbFxyXG57XHJcbiAgICBwYXJ0aWFsIHN0cnVjdCBTeW1ib2xJZFxyXG4gICAge1xyXG4gICAgICAgIFtKc29uQ29uc3RydWN0b3JdXHJcbiAgICAgICAgcHVibGljIFN5bWJvbElkKHN0cmluZyB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5TZGsuU2VhcmNoXHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGludGVyZmFjZSBJSW5kZXhcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEhpZ2ggbGV2ZWwgcXVlcnkgb3BlcmF0aW9ucyBmb3IgaW5kZXhlZCBjb2RlXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGFic3RyYWN0IHBhcnRpYWwgY2xhc3MgSW5kZXg8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSW5kZXhRdWVyeTxUPiBDcmVhdGVRdWVyeSgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSVByZWZpeFByb3BlcnR5PFQ+IENyZWF0ZVByZWZpeFByb3BlcnR5KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJVGVybVByb3BlcnR5PFQ+IENyZWF0ZVRlcm1Qcm9wZXJ0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBJbmRleFF1ZXJ5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEluZGV4RmlsdGVyPFQ+IEZpbHRlciB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG1heGltdW0gbnVtYmVyIG9mIHJlc3VsdHMgdG8gcmV0dXJuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgaW50IE1heFJlc3VsdHMgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgVGFzazxJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPFQ+PiBFeGVjdXRlQXN5bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgUHJlZml4RnVsbE5hbWVJbmRleFByb3BlcnR5PFQ+IDogVGVybUluZGV4UHJvcGVydHk8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSW5kZXhGaWx0ZXI8VD4gUHJlZml4RnVsbE5hbWUoc3RyaW5nIHByZWZpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIFByZWZpeEluZGV4UHJvcGVydHk8VD4gOiBUZXJtSW5kZXhQcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJbmRleEZpbHRlcjxUPiBQcmVmaXgoc3RyaW5nIHByZWZpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIE5vcm1hbGl6ZWRLZXl3b3JkSW5kZXhQcm9wZXJ0eTxUPiA6IFRlcm1JbmRleFByb3BlcnR5PFQ+XHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIEZ1bGxUZXh0SW5kZXhQcm9wZXJ0eTxUPiA6IFRlcm1JbmRleFByb3BlcnR5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IEluZGV4RmlsdGVyPFQ+IENvbnRhaW5zKHN0cmluZyBwaHJhc2UpO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgSW5kZXhGaWx0ZXI8VD4gQ29udGFpbnNBbGwoc3RyaW5nW10gdGVybXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IFNvcnR3b3JkIGlzIG5vcm1hbGx5IGFsc28gYSBub3JtYWxpemVkIGtleXdvcmQuIElzIHRoaXMgYWx3YXlzIHRoZSBjYXNlP1xyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIFNvcnR3b3JkSW5kZXhQcm9wZXJ0eTxUPiA6IFRlcm1JbmRleFByb3BlcnR5PFQ+XHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBUZXJtSW5kZXhQcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBJbmRleEZpbHRlcjxUPiBNYXRjaDxUVmFsdWU+KFRWYWx1ZSB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJUHJlZml4UHJvcGVydHk8VD4gOiBJVGVybVByb3BlcnR5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgSW5kZXhGaWx0ZXI8VD4gUHJlZml4KHN0cmluZyBwcmVmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVRlcm1Qcm9wZXJ0eTxUPlxyXG4gICAge1xyXG4gICAgICAgIEluZGV4RmlsdGVyPFQ+IE1hdGNoPFRWYWx1ZT4oVFZhbHVlIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bSBCaW5hcnlPcGVyYXRvclxyXG4gICAge1xyXG4gICAgICAgIEFuZCxcclxuICAgICAgICBPcixcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQmluYXJ5RmlsdGVyPFQ+IDogSW5kZXhGaWx0ZXI8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgQmluYXJ5T3BlcmF0b3IgT3BlcmF0b3I7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IEluZGV4RmlsdGVyPFQ+IExlZnQ7XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IEluZGV4RmlsdGVyPFQ+IFJpZ2h0O1xyXG5cclxuICAgICAgICBwdWJsaWMgQmluYXJ5RmlsdGVyKEJpbmFyeU9wZXJhdG9yIG9wLCBJbmRleEZpbHRlcjxUPiBsZWZ0LCBJbmRleEZpbHRlcjxUPiByaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9wZXJhdG9yID0gb3A7XHJcbiAgICAgICAgICAgIExlZnQgPSBsZWZ0O1xyXG4gICAgICAgICAgICBSaWdodCA9IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSW5kZXhGaWx0ZXI8VD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEluZGV4RmlsdGVyPFQ+IG9wZXJhdG9yICYoSW5kZXhGaWx0ZXI8VD4gbGVmdCwgSW5kZXhGaWx0ZXI8VD4gcmlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpbmFyeUZpbHRlcjxUPihCaW5hcnlPcGVyYXRvci5BbmQsIGxlZnQsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSW5kZXhGaWx0ZXI8VD4gb3BlcmF0b3IgfChJbmRleEZpbHRlcjxUPiBsZWZ0LCBJbmRleEZpbHRlcjxUPiByaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmluYXJ5RmlsdGVyPFQ+KEJpbmFyeU9wZXJhdG9yLk9yLCBsZWZ0LCByaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSUluZGV4UXVlcnk8VD5cclxuICAgIHtcclxuICAgICAgICBJSW5kZXhRdWVyeUZpbHRlcjxUPiBGaWx0ZXIgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBtYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHRvIHJldHVyblxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgaW50IE1heFJlc3VsdHMgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBUYXNrPEluZGV4UXVlcnlSZXNwb25zZTxUPj4gRXhlY3V0ZUFzeW5jKCk7XHJcblxyXG4gICAgICAgIHZvaWQgRXhjbHVkZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElJbmRleFF1ZXJ5RmlsdGVyPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgdm9pZCBFeGNsdWRlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlNkay5TZWFyY2hcclxue1xyXG4gICAgLy8gK1RPRE86IEdlbmVyYXRlIEFTUC5OZXQgZW5kcG9pbnQgd2hpY2ggaGFuZGxlcyBhbGwgdGhlc2UgY2FsbHMuIFBvdGVudGlhbGx5IGFsc28gaW1wbGVtZW50XHJcbiAgICAvLyBjYWxsZXIgKGkuZS4gV2ViQXBpQ29kZXggOiBJQ29kZXgpXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSGlnaCBsZXZlbCBvcGVyYXRpb25zIGZvciBjb2RleCBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElDb2RleFxyXG4gICAge1xyXG4gICAgICAgIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0Pj4gU2VhcmNoQXN5bmMoU2VhcmNoQXJndW1lbnRzIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIFRhc2s8SW5kZXhRdWVyeVJlc3BvbnNlPFJlZmVyZW5jZXNSZXN1bHQ+PiBGaW5kQWxsUmVmZXJlbmNlc0FzeW5jKEZpbmRBbGxSZWZlcmVuY2VzQXJndW1lbnRzIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRmluZCBkZWZpbml0aW9uIGZvciBhIHN5bWJvbFxyXG4gICAgICAgIC8vLyBVc2FnZTogRG9jdW1lbnRhdGlvbiBob3ZlciB0b29sdGlwXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBUYXNrPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SURlZmluaXRpb25TZWFyY2hNb2RlbD4+IEZpbmREZWZpbml0aW9uQXN5bmMoRmluZERlZmluaXRpb25Bcmd1bWVudHMgYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBGaW5kIGRlZmluaXRpb24gbG9jYXRpb24gZm9yIGEgc3ltYm9sXHJcbiAgICAgICAgLy8vIFVzYWdlOiBHbyBUbyBEZWZpbml0aW9uXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBUYXNrPEluZGV4UXVlcnlSZXNwb25zZTxSZWZlcmVuY2VzUmVzdWx0Pj4gRmluZERlZmluaXRpb25Mb2NhdGlvbkFzeW5jKEZpbmREZWZpbml0aW9uTG9jYXRpb25Bcmd1bWVudHMgYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgVGFzazxJbmRleFF1ZXJ5UmVzcG9uc2U8SUJvdW5kU291cmNlRmlsZT4+IEdldFNvdXJjZUFzeW5jKEdldFNvdXJjZUFyZ3VtZW50cyBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtIENvZGV4U2VydmljZU1ldGhvZFxyXG4gICAge1xyXG4gICAgICAgIFNlYXJjaCxcclxuICAgICAgICBGaW5kQWxsUmVmcyxcclxuICAgICAgICBGaW5kRGVmLFxyXG4gICAgICAgIEZpbmREZWZMb2NhdGlvbixcclxuICAgICAgICBHZXRTb3VyY2VcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQ29kZXhBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgbWF4aW11bSBudW1iZXIgb2YgcmVzdWx0cyB0byByZXR1cm5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBpbnQgTWF4UmVzdWx0cyB7IGdldDsgc2V0OyB9XHJcblxuICAgIFxucHJpdmF0ZSBpbnQgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX01heFJlc3VsdHM9MTAwO31cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQ29udGV4dENvZGV4QXJndW1lbnRzQmFzZSA6IENvZGV4QXJndW1lbnRzQmFzZVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkIG9mIHRoZSByZXBvc2l0b3J5IHJlZmVyZW5jaW5nIHRoZSBzeW1ib2wuXHJcbiAgICAgICAgLy8vIE5PVEU6IFRoaXMgaXMgdXNlZCB0byBwcmlvcml0eSBpbnRlci1yZXBvc2l0b3J5IG1hdGNoZXMgb3ZlclxyXG4gICAgICAgIC8vLyBtYXRjaGVzIGZyb20gb3V0c2lkZSB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBSZWZlcmVuY2luZ1JlcG9zaXRvcnlJZCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkIG9mIHRoZSBwcm9qZWN0IHJlZmVyZW5jaW5nIHRoZSBzeW1ib2wuXHJcbiAgICAgICAgLy8vIE5PVEU6IFRoaXMgaXMgdXNlZCB0byBwcmlvcml0eSBpbnRlci1yZXBvc2l0b3J5IG1hdGNoZXMgb3ZlclxyXG4gICAgICAgIC8vLyBtYXRjaGVzIGZyb20gb3V0c2lkZSB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBSZWZlcmVuY2luZ1Byb2plY3RJZCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGlkIG9mIHRoZSBmaWxlIHJlZmVyZW5jaW5nIHRoZSBzeW1ib2wuXHJcbiAgICAgICAgLy8vIE5PVEU6IFRoaXMgaXMgdXNlZCB0byBwcmlvcml0eSBpbnRlci1yZXBvc2l0b3J5IG1hdGNoZXMgb3ZlclxyXG4gICAgICAgIC8vLyBtYXRjaGVzIGZyb20gb3V0c2lkZSB0aGUgcmVwb3NpdG9yeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBSZWZlcmVuY2luZ0ZpbGVJZCB7IGdldDsgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZpbmRTeW1ib2xBcmd1bWVudHNCYXNlIDogQ29udGV4dENvZGV4QXJndW1lbnRzQmFzZVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHN5bWJvbCBpZCBvZiB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN5bWJvbElkIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcHJvamVjdCBpZCBvZiB0aGUgc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFByb2plY3RJZCB7IGdldDsgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZpbmREZWZpbml0aW9uQXJndW1lbnRzIDogRmluZFN5bWJvbEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZpbmRBbGxSZWZlcmVuY2VzQXJndW1lbnRzIDogRmluZFN5bWJvbEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRmluZERlZmluaXRpb25Mb2NhdGlvbkFyZ3VtZW50cyA6IEZpbmRTeW1ib2xBcmd1bWVudHNCYXNlXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFNlYXJjaEFyZ3VtZW50cyA6IENvbnRleHRDb2RleEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNlYXJjaFN0cmluZyB7IGdldDsgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEdldFNvdXJjZUFyZ3VtZW50cyA6IENvbnRleHRDb2RleEFyZ3VtZW50c0Jhc2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFByb2plY3RJZCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUHJvamVjdFJlbGF0aXZlUGF0aCB7IGdldDsgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJUmVmZXJlbmNlU2VhcmNoUmVzdWx0IDogSVByb2plY3RGaWxlU2NvcGVFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJUmVmZXJlbmNlU3BhbiBSZWZlcmVuY2VTcGFuIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVRleHRMaW5lU3BhblJlc3VsdCA6IElQcm9qZWN0RmlsZVNjb3BlRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgSVRleHRMaW5lU3BhbiBUZXh0U3BhbiB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElTZWFyY2hSZXN1bHRcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSB0ZXh0IHNwYW4gZm9yIGEgdGV4dCByZXN1bHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElUZXh0TGluZVNwYW5SZXN1bHQgVGV4dExpbmUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGRlZmluaXRpb24gb2YgdGhlIHNlYXJjaCByZXN1bHRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElEZWZpbml0aW9uU3ltYm9sIERlZmluaXRpb24geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0cnVjdCBTZXJpYWxpemFibGVUaW1lU3BhblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBsb25nIFRpY2tzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIFNlcmlhbGl6YWJsZVRpbWVTcGFuKFRpbWVTcGFuIHRpbWVzcGFuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGlja3MgPSB0aW1lc3Bhbi5UaWNrcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUaW1lU3BhbiBBc1RpbWVTcGFuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBUaW1lU3Bhbi5Gcm9tVGlja3MoVGlja3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbXBsaWNpdCBvcGVyYXRvciBUaW1lU3BhbihTZXJpYWxpemFibGVUaW1lU3BhbiB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5Bc1RpbWVTcGFuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGltcGxpY2l0IG9wZXJhdG9yIFNlcmlhbGl6YWJsZVRpbWVTcGFuKFRpbWVTcGFuIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTZXJpYWxpemFibGVUaW1lU3Bhbih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRvU3RyaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBBc1RpbWVTcGFuKCkuVG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEluZGV4UXVlcnlSZXNwb25zZVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gSWYgdGhlIHF1ZXJ5IGZhaWxlZCwgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRXJyb3IgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByYXcgcXVlcnkgc2VudCB0byB0aGUgaW5kZXggc2VydmVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgTGlzdDxzdHJpbmc+IFJhd1F1ZXJpZXMgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzcGVudCBleGVjdXRpbmcgdGhlIHF1ZXJ5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgU2VyaWFsaXphYmxlVGltZVNwYW4gRHVyYXRpb24geyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzcGVudCBleGVjdXRpbmcgdGhlIHF1ZXJ5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgU2VyaWFsaXphYmxlVGltZVNwYW4gU2VydmVyVGltZSB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVG9TdHJpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCJFcnJvcjogezB9LCBEdXJhdGlvbjogezF9XCIsRXJyb3IsRHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSW5kZXhRdWVyeVJlc3BvbnNlPFQ+IDogSW5kZXhRdWVyeVJlc3BvbnNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgcmVzdWx0cyBvZiB0aGUgcXVlcnlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBUIFJlc3VsdCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVG9TdHJpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCJSZXN1bHQ6IHswfSwgezF9XCIsUmVzdWx0LGJhc2UuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBJbmRleFF1ZXJ5SGl0czxUPlxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRvdGFsIG51bWJlciBvZiByZXN1bHRzIG1hdGNoaW5nIHRoZSBxdWVyeS4gXHJcbiAgICAgICAgLy8vIE5PVEU6IFRoaXMgbWF5IGJlIGdyZWF0ZXIgdGhhbiB0aGUgbnVtYmVyIG9mIGhpdHMgcmV0dXJuZWQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgbG9uZyBUb3RhbCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHJlc3VsdHMgb2YgdGhlIHF1ZXJ5XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgTGlzdDxUPiBIaXRzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUb1N0cmluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcIlRvdGFsOiB7MH0sIHsxfVwiLFRvdGFsLGJhc2UuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBSZWZlcmVuY2VzUmVzdWx0IDogSW5kZXhRdWVyeUhpdHM8SVJlZmVyZW5jZVNlYXJjaFJlc3VsdD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN5bWJvbERpc3BsYXlOYW1lIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxUPiA6IEluZGV4UXVlcnlSZXNwb25zZTxJbmRleFF1ZXJ5SGl0czxUPj5cclxuICAgIHtcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLkxpbnEuRXhwcmVzc2lvbnM7XHJcbnVzaW5nIFN5c3RlbS5SdW50aW1lLkNvbXBpbGVyU2VydmljZXM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4XHJcbntcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBTZWFyY2hUeXBlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBOYW1lIHsgZ2V0OyBwcm90ZWN0ZWQgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBJbmRleE5hbWUgeyBnZXQ7IHByb3RlY3RlZCBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgaW50IElkIHsgZ2V0OyBwcm90ZWN0ZWQgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZTxUPiBDcmVhdGU8VD4oTGlzdDxTZWFyY2hUeXBlPiByZWdpc3RlcmVkU2VhcmNoVHlwZXMsIFtDYWxsZXJNZW1iZXJOYW1lXXN0cmluZyBuYW1lID0gbnVsbClcclxuICAgICAgICAgICAgd2hlcmUgVCA6IGNsYXNzLCBJU2VhcmNoRW50aXR5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VhcmNoVHlwZSA9IG5ldyBTZWFyY2hUeXBlPFQ+KG5hbWUpO1xyXG4gICAgICAgICAgICBzZWFyY2hUeXBlLklkID0gcmVnaXN0ZXJlZFNlYXJjaFR5cGVzLkNvdW50O1xyXG4gICAgICAgICAgICByZWdpc3RlcmVkU2VhcmNoVHlwZXMuQWRkKHNlYXJjaFR5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBUeXBlIFR5cGUgeyBnZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgU2VhcmNoVHlwZTxUU2VhcmNoVHlwZT4gOiBTZWFyY2hUeXBlXHJcbiAgICAgICAgd2hlcmUgVFNlYXJjaFR5cGUgOiBjbGFzcywgSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBUeXBlIFR5cGUge2dldHtyZXR1cm4gdHlwZW9mKFRTZWFyY2hUeXBlKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgTGlzdDxUdXBsZTxFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+LCBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+Pj4gQ29weVRvRmllbGRzID0gbmV3IExpc3Q8VHVwbGU8RXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiwgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+Pj4+KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBMaXN0PFR1cGxlPEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4sIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgb2JqZWN0Pj4+PiBJbmhlcml0RmllbGRzID0gbmV3IExpc3Q8VHVwbGU8RXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiwgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+Pj4+KCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZWFyY2hUeXBlKHN0cmluZyBuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIEluZGV4TmFtZSA9IE5hbWUuVG9Mb3dlckludmFyaWFudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFR5cGU8VFNlYXJjaFR5cGU+IEluaGVyaXQ8VD4oXHJcbiAgICAgICAgICAgIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgVD4+IHByb3ZpZGVyRmllbGQsXHJcbiAgICAgICAgICAgIEV4cHJlc3Npb248RnVuYzxUU2VhcmNoVHlwZSwgVD4+IHNlYXJjaEZpZWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoVHlwZTxUU2VhcmNoVHlwZT4gQ29weVRvKFxyXG4gICAgICAgICAgICBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+IHNvdXJjZUZpZWxkLFxyXG4gICAgICAgICAgICBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIG9iamVjdD4+IHRhcmdldEZpZWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2VhcmNoVHlwZTxUU2VhcmNoVHlwZT4gRXhjbHVkZShcclxuICAgICAgICAgICAgRXhwcmVzc2lvbjxGdW5jPFRTZWFyY2hUeXBlLCBvYmplY3Q+PiBzZWFyY2hGaWVsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNlYXJjaFR5cGU8VFNlYXJjaFR5cGU+IFNlYXJjaEFzPFQ+KFxyXG4gICAgICAgICAgICBFeHByZXNzaW9uPEZ1bmM8VFNlYXJjaFR5cGUsIFQ+PiBzZWFyY2hGaWVsZCxcclxuICAgICAgICAgICAgU2VhcmNoQmVoYXZpb3IgYmVoYXZpb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uTGlucS5FeHByZXNzaW9ucztcclxudXNpbmcgU3lzdGVtLlJ1bnRpbWUuQ29tcGlsZXJTZXJ2aWNlcztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXhcclxue1xyXG4gICAgLypcclxuICAgICAqIFR5cGVzIGluIHRoaXMgZmlsZSBkZWZpbmUgc2VhcmNoIGJlaGF2aW9ycy4gQ2hhbmdlcyBzaG91bGQgYmUgbWFkZSB3aXRoIGNhdXRpb24gYXMgdGhleSBjYW4gYWZmZWN0XHJcbiAgICAgKiB0aGUgbWFwcGluZyBzY2hlbWEgZm9yIGluZGljZXMgYW5kIHdpbGwgZ2VuZXJhbGx5IG5lZWQgdG8gYmUgYmFja3dhcmQgY29tcGF0aWJsZS5cclxuICAgICAqIEFkZGl0aW9ucyBzaG91bGQgYmUgZ2VuZXJhbGx5IHNhZmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGFzcyBTZWFyY2hUeXBlc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTGlzdDxTZWFyY2hUeXBlPiBSZWdpc3RlcmVkU2VhcmNoVHlwZXMgPSBuZXcgTGlzdDxTZWFyY2hUeXBlPigpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgRGVmaW5pdGlvbiA9IFNlYXJjaFR5cGUuQ3JlYXRlPElEZWZpbml0aW9uU2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcbiAgICAgICAgLy8uQ29weVRvKGRzID0+IGRzLkRlZmluaXRpb24uTW9kaWZpZXJzLCBkcyA9PiBkcy5LZXl3b3JkcylcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5LaW5kLCBkcyA9PiBkcy5LaW5kKVxyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLkV4Y2x1ZGVGcm9tRGVmYXVsdFNlYXJjaCwgZHMgPT4gZHMuRXhjbHVkZUZyb21EZWZhdWx0U2VhcmNoKVxyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLktpbmQsIGRzID0+IGRzLktleXdvcmRzKVxyXG4gICAgICAgIC8vLkNvcHlUbyhkcyA9PiBkcy5EZWZpbml0aW9uLlNob3J0TmFtZSwgZHMgPT4gZHMuU2hvcnROYW1lKVxyXG4gICAgICAgIC8vLy8uQ29weVRvKGRzID0+IGRzLkxhbmd1YWdlLCBkcyA9PiBkcy5LZXl3b3JkcylcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5Qcm9qZWN0SWQsIGRzID0+IGRzLlByb2plY3RJZClcclxuICAgICAgICAvLy5Db3B5VG8oZHMgPT4gZHMuRGVmaW5pdGlvbi5Qcm9qZWN0SWQsIGRzID0+IGRzLktleXdvcmRzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFJlZmVyZW5jZSA9IFNlYXJjaFR5cGUuQ3JlYXRlPElSZWZlcmVuY2VTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuICAgICAgICAvLy5Db3B5VG8ocnMgPT4gcnMuU3BhbnMuRmlyc3QoKS5SZWZlcmVuY2UsIHJzID0+IHJzLlJlZmVyZW5jZSk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBUZXh0U291cmNlID0gU2VhcmNoVHlwZS5DcmVhdGU8SVRleHRTb3VyY2VTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuRmlsZS5Tb3VyY2VGaWxlLkNvbnRlbnQsIHNzID0+IHNzLkNvbnRlbnQpXHJcbiAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGUuU291cmNlRmlsZS5JbmZvLlJlcG9SZWxhdGl2ZVBhdGgsIHNzID0+IHNzLlJlcG9SZWxhdGl2ZVBhdGgpXHJcbiAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGUuUHJvamVjdElkLCBzcyA9PiBzcy5Qcm9qZWN0SWQpXHJcbiAgICAgICAgLy8uQ29weVRvKHNzID0+IHNzLkZpbGUuSW5mby5QYXRoLCBzcyA9PiBzcy5GaWxlUGF0aCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBCb3VuZFNvdXJjZSA9IFNlYXJjaFR5cGUuQ3JlYXRlPElCb3VuZFNvdXJjZVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG4gICAgICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuRmlsZS5Tb3VyY2VGaWxlLkNvbnRlbnQsIHNzID0+IHNzLkNvbnRlbnQpXHJcbiAgICAgICAgICAgIC8vLkNvcHlUbyhzcyA9PiBzcy5GaWxlLlNvdXJjZUZpbGUuSW5mby5SZXBvUmVsYXRpdmVQYXRoLCBzcyA9PiBzcy5SZXBvUmVsYXRpdmVQYXRoKVxyXG4gICAgICAgICAgICAvLy5Db3B5VG8oc3MgPT4gc3MuQmluZGluZ0luZm8uUHJvamVjdElkLCBzcyA9PiBzcy5Qcm9qZWN0SWQpXHJcbiAgICAgICAgICAgIC8vLkNvcHlUbyhzcyA9PiBzcy5GaWxlUGF0aCwgc3MgPT4gc3MuRmlsZVBhdGgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgTGFuZ3VhZ2UgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJTGFuZ3VhZ2VTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFJlcG9zaXRvcnkgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJUmVwb3NpdG9yeVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgUHJvamVjdCA9IFNlYXJjaFR5cGUuQ3JlYXRlPElQcm9qZWN0U2VhcmNoTW9kZWw+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcylcclxuICAgICAgICAgICAgLkV4Y2x1ZGUoc20gPT4gU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5GaXJzdDxnbG9iYWw6OkNvZGV4LklSZWZlcmVuY2VkUHJvamVjdD4oc20uUHJvamVjdC5Qcm9qZWN0UmVmZXJlbmNlcykuRGVmaW5pdGlvbnMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgQ29tbWl0ID0gU2VhcmNoVHlwZS5DcmVhdGU8SUNvbW1pdFNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgQ29tbWl0RmlsZXMgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJQ29tbWl0RmlsZXNTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFByb2plY3RSZWZlcmVuY2UgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJUHJvamVjdFJlZmVyZW5jZVNlYXJjaE1vZGVsPihSZWdpc3RlcmVkU2VhcmNoVHlwZXMpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlYXJjaFR5cGUgUHJvcGVydHkgPSBTZWFyY2hUeXBlLkNyZWF0ZTxJUHJvcGVydHlTZWFyY2hNb2RlbD4oUmVnaXN0ZXJlZFNlYXJjaFR5cGVzKTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTZWFyY2hUeXBlIFN0b3JlZEZpbHRlciA9IFNlYXJjaFR5cGUuQ3JlYXRlPElTdG9yZWRGaWx0ZXI+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHlwZSBSZWdpc3RlcmVkRW50aXR5ID0gU2VhcmNoVHlwZS5DcmVhdGU8SVJlZ2lzdGVyZWRFbnRpdHk+KFJlZ2lzdGVyZWRTZWFyY2hUeXBlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEluIG9yZGVyIHRvIGNvbXB1dGUgYSBzdGFibGUgaW50ZWdyYWwgaWQgZm9yIGVhY2ggZW50aXR5LiBUaGlzIHR5cGUgaXMgdXNlZCB0byBzdG9yZSBpbnRvIGEgJ2ZvbGxvdycgaW5kZXggd2hpY2hcclxuICAgIC8vLyBzdG9yZXMgZW50aXRpZXMgb2YgdGhpcyB0eXBlIHVzaW5nIHRoZSA8c2VlIGNyZWY9XCJJU2VhcmNoRW50aXR5LlVpZFwiLz4gb2YgdGhlIGNvcnJlc3BvbmRpbmcgc2VhcmNoIGVudGl0eS4gVGhlbiB0aGVcclxuICAgIC8vLyBzZXF1ZW5jZSBudW1iZXIgYXNzaWduZWQgYnkgRWxhc3RpY1NlYXJjaCBpcyB1c2VkIGFzIHRoZSBzaGFyZCBzdGFibGUgaWQgKDxzZWUgY3JlZj1cIklTZWFyY2hFbnRpdHkuU2hhcmRTdGFibGVJZFwiLz4pXHJcbiAgICAvLy8gZm9yIHRoZSBlbnRpdHkuIFRoaXMgYXBwcm9hY2ggaXMgdXNlZCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgc3RhYmxlIGlkIGFwcGVhcnMgYXMgYW4gZXhwbGljaXQgZmllbGQgaW4gdGhlIGRvY3VtZW50IHJhdGhlclxyXG4gICAgLy8vIHdoaWNoIGFsbG93cyBjb25maWd1cmF0aW9uIG9mIGhvdyB0aGUgZmllbGQgaXMgaW5kZXhlZCAobm90IHRydWUgZm9yIHNlcXVlbmNlIG51bWJlciBmaWVsZCB3aXRob3V0IGNvZGUgY2hhbmdlcyB0byBFUykuXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGludGVyZmFjZSBJUmVnaXN0ZXJlZEVudGl0eSA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBkYXRlIGluIHdoaWNoIHRoZSBlbnRpdHkgd2FzIHJlZ2lzdGVyZWQgKGkuZS4gYWRkZWQgdG8gdGhlIHN0b3JlKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgRGF0ZVRpbWUgRGF0ZUFkZGVkIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gRGVmaW5lcyBhIHN0b3JlZCBmaWx0ZXIgd2hpY2ggbWF0Y2hlcyBlbnRpdGllcyBpbiBhIHBhcnRpY3VsYXIgaW5kZXggc2hhcmQgaW4gYSBzdGFibGUgbWFubmVyXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGludGVyZmFjZSBJU3RvcmVkRmlsdGVyIDogSVNlYXJjaEVudGl0eVxyXG4gICAge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHRpbWUgb2YgdGhlIGxhc3QgdXBkYXRlIHRvIHRoZSBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBEYXRlVGltZSBEYXRlVXBkYXRlZCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIG5hbWUgb2YgdGhlIGluZGV4IHRvIHdoaWNoIHRoZSBzdG9yZWQgZmlsdGVyIGFwcGxpZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHN0cmluZyBJbmRleE5hbWUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIHNoYXJkIHRvIHdoaWNoIHRoZSBzdG9yZWQgZmlsdGVyIGFwcGxpZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIGludCBTaGFyZCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHN0YWJsZSBpZHMgdG8gaW5jbHVkZSBpbiB0aGUgc3RvcmVkIGZpbHRlci5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElSZWFkT25seUxpc3Q8bG9uZz4gU3RhYmxlSWRzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIExpc3Qgb2YgdWlkcyB0byBmb3Igc3RvcmVkIGZpbHRlcnMgd2hpY2ggd2lsbCBiZSB1bmlvbmVkIHdpdGggdGhlIGdpdmVuIHN0b3JlZCBmaWx0ZXJcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElSZWFkT25seUxpc3Q8c3RyaW5nPiBCYXNlVWlkcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBMaXN0IG9mIHN0b3JlZCBmaWx0ZXJzIHdoaWNoIHdpbGwgYmUgdW5pb25lZCB3aXRoIHRoZSBnaXZlbiBzdG9yZWQgZmlsdGVyXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBJUmVhZE9ubHlMaXN0PGJ5dGVbXT4gVW5pb25GaWx0ZXJzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBzdG9yZWQgZmlsdGVyIGJpdCBzZXQgd2hpY2ggbWF0Y2hlcyB0aGUgc3RvcmVkIGZpbHRlciBkb2N1bWVudHNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIGJ5dGVbXSBGaWx0ZXIgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGhhc2ggb2YgPHNlZSBjcmVmPVwiRmlsdGVyXCIvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgc3RyaW5nIEZpbHRlckhhc2ggeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVGhlIGNvdW50IG9mIGVsZW1lbnRzIG1hdGNoZWQgYnkgPHNlZSBjcmVmPVwiRmlsdGVyXCIvPlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgaW50IEZpbHRlckNvdW50IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSURlZmluaXRpb25TZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJRGVmaW5pdGlvblN5bWJvbCBEZWZpbml0aW9uIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBOb3Qgc3VyZSB0aGF0IHRoaXMgaXMgYWN0dWFsbHkgbmVlZGVkXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBLZXl3b3JkcyBhcmUgYWRkaXRpb25hbCB0ZXJtcyB3aGljaCBjYW4gYmUgdXNlZCB0byBmaW5kIGEgZ2l2ZW4gc3ltYm9sLlxyXG4gICAgICAgIC8vLyBOT1RFOiBLZXl3b3JkcyBjYW4gb25seSBiZSB1c2VkIHRvIHNlbGVjdCBmcm9tIHN5bWJvbHMgd2hpY2ggaGF2ZVxyXG4gICAgICAgIC8vLyBhIHByaW1hcnkgdGVybSBtYXRjaFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW1NlYXJjaEJlaGF2aW9yKFNlYXJjaEJlaGF2aW9yLk5vcm1hbGl6ZWRLZXl3b3JkKV1cclxuICAgICAgICBJUmVhZE9ubHlMaXN0PHN0cmluZz4gS2V5d29yZHMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJTGFuZ3VhZ2VTZWFyY2hNb2RlbCA6IElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICBJTGFuZ3VhZ2VJbmZvIExhbmd1YWdlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSVJlZmVyZW5jZVNlYXJjaE1vZGVsIDogSVByb2plY3RGaWxlU2NvcGVFbnRpdHksIElTZWFyY2hFbnRpdHlcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSByZWZlcmVuY2Ugc3ltYm9sXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBJUmVmZXJlbmNlU3ltYm9sIFJlZmVyZW5jZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8gVE9ETzogTmVlZCBzb21lIHNvcnQgb2Ygb3ZlcnJpZGUgZm9yIHNlYXJjaGluZyBSZWxhdGVkRGVmaW5pdGlvbiBvZiB0aGVcclxuICAgICAgICAvLyBSZWZlcmVuY2VTcGFuXHJcbiAgICAgICAgW1NlYXJjaEJlaGF2aW9yKFNlYXJjaEJlaGF2aW9yLk5vbmUpXVxyXG4gICAgICAgIFtSZWFkT25seUxpc3RdXHJcbiAgICAgICAgW0NvZXJjZUdldF1cclxuICAgICAgICBJUmVhZE9ubHlMaXN0PElTeW1ib2xTcGFuPiBTcGFucyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDb21wcmVzc2VkIGxpc3Qgb2Ygc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFtTZWFyY2hCZWhhdmlvcihTZWFyY2hCZWhhdmlvci5Ob25lKV1cclxuICAgICAgICBJU3ltYm9sTGluZVNwYW5MaXN0IENvbXByZXNzZWRTcGFucyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElTb3VyY2VTZWFyY2hNb2RlbEJhc2UgOiBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGUgZnJvbSBzb3VyY2UgY29udHJvbCBwcm92aWRlciAobWF5IGJlIG51bGwpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBJU291cmNlQ29udHJvbEZpbGVJbmZvIFNvdXJjZUNvbnRyb2xJbmZvIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcmZhY2UgSUJvdW5kU291cmNlU2VhcmNoTW9kZWwgOiBJU291cmNlU2VhcmNoTW9kZWxCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGFzc29jaWF0ZWQgPHNlZSBjcmVmPVwiSVNvdXJjZUZpbGVcIi8+XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBzdHJpbmcgVGV4dFVpZCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc291cmNlIGZpbGVcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElTb3VyY2VGaWxlSW5mbyBTb3VyY2VJbmZvIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRoZSBiaW5kaW5nIGluZm9cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIElCb3VuZFNvdXJjZUluZm8gQmluZGluZ0luZm8geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ29tcHJlc3NlZCBsaXN0IG9mIGNsYXNzaWZpY2F0aW9uIHNwYW5zXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBbU2VhcmNoQmVoYXZpb3IoU2VhcmNoQmVoYXZpb3IuTm9uZSldXHJcbiAgICAgICAgSUNsYXNzaWZpY2F0aW9uTGlzdCBDb21wcmVzc2VkQ2xhc3NpZmljYXRpb25zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIENvbXByZXNzZWQgbGlzdCBvZiByZWZlcmVuY2Ugc3BhbnNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIFtTZWFyY2hCZWhhdmlvcihTZWFyY2hCZWhhdmlvci5Ob25lKV1cclxuICAgICAgICBJUmVmZXJlbmNlTGlzdCBDb21wcmVzc2VkUmVmZXJlbmNlcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElUZXh0U291cmNlU2VhcmNoTW9kZWwgOiBJU291cmNlU2VhcmNoTW9kZWxCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgSVNvdXJjZUZpbGUgRmlsZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElSZXBvc2l0b3J5U2VhcmNoTW9kZWwgOiBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgSVJlcG9zaXRvcnkgUmVwb3NpdG9yeSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElQcm9qZWN0U2VhcmNoTW9kZWwgOiBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgSVByb2plY3QgUHJvamVjdCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElQcm9qZWN0UmVmZXJlbmNlU2VhcmNoTW9kZWwgOiBJUHJvamVjdFNjb3BlRW50aXR5LCBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgSVJlZmVyZW5jZWRQcm9qZWN0IFByb2plY3RSZWZlcmVuY2UgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJQ29tbWl0U2VhcmNoTW9kZWwgOiBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgSUNvbW1pdCBDb21taXQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIFRoZSBzZXQgb2YgZmlsZXMgcHJlc2VudCBpbiB0aGUgcmVwb3NpdG9yeSBhdCBhIGdpdmVuIGNvbW1pdC5cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElDb21taXRGaWxlc1NlYXJjaE1vZGVsIDogSUNvbW1pdFNjb3BlRW50aXR5LCBJUmVwb1Njb3BlRW50aXR5LCBJU2VhcmNoRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgSVJlYWRPbmx5TGlzdDxJQ29tbWl0RmlsZUxpbms+IENvbW1pdEZpbGVzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIENvZGV4Lk9iamVjdE1vZGVsO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlV0aWxpdGllc1xyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnRpYWwgY2xhc3MgQ29sbGVjdGlvblV0aWxpdGllc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBFbXB0eTxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMaXN0PFQ+IExpc3QgPSBuZXcgTGlzdDxUPigwKTtcclxuXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVFtdIEFycmF5ID0gbmV3IFRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5VdGlsaXRpZXNcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBTZXJpYWxpemF0aW9uVXRpbGl0aWVzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBUIEFzc2lnbkR1cGxpY2F0ZTxUPihUIHZhbHVlLCByZWYgVCBsYXN0VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoRXF1YWxpdHlDb21wYXJlcjxUPi5EZWZhdWx0LkVxdWFscyh2YWx1ZSwgZGVmYXVsdChUKSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsYXN0VmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYXN0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBUIFJlbW92ZUR1cGxpY2F0ZTxUPihUIHZhbHVlLCByZWYgVCBsYXN0VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoRXF1YWxpdHlDb21wYXJlcjxUPi5EZWZhdWx0LkVxdWFscyh2YWx1ZSwgZGVmYXVsdChUKSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0KFQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5UaHJlYWRpbmc7XHJcbiNpZiBCUklER0VcclxudXNpbmcgQ29kZXguVmlldy5XZWI7XHJcbiNlbHNlXHJcbnVzaW5nIENvZGV4LkVsYXN0aWNTZWFyY2guU2VhcmNoO1xyXG4jZW5kaWZcclxubmFtZXNwYWNlIENvZGV4LlZpZXdcclxue1xyXG4gICAgcGFydGlhbCBjbGFzcyBBcHBcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHVibGljIEFwcCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTdHlsZXMuSW5pdGlhbGl6ZSgpO1xyXG4jaWYgQlJJREdFXHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgc2hvdWxkIGJlIGNvbmZpZ3VyYWJsZSB0aHJvdWdoIGJ1aWxkIHByb3BlcnRpZXMgc29tZWhvd1xyXG4gICAgICAgICAgICBDb2RleFByb3ZpZGVyLkluc3RhbmNlID0gbmV3IFdlYkFwaUNvZGV4KFwiaHR0cDovL2xvY2FsaG9zdDo5NDkxL2FwaS9jb2RleC9cIik7XHJcbiNlbHNlXHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgc2hvdWxkIGJlIGNvbmZpZ3VyYWJsZSB0aHJvdWdoIGJ1aWxkIHByb3BlcnRpZXMgc29tZWhvd1xyXG4gICAgICAgICAgICBDb2RleFByb3ZpZGVyLkluc3RhbmNlID0gbmV3IEVsYXN0aWNTZWFyY2hDb2RleChuZXcgRWxhc3RpY1NlYXJjaC5FbGFzdGljU2VhcmNoU3RvcmVDb25maWd1cmF0aW9uKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJlZml4ID0gXCJhcHB0ZXN0XCJcclxuICAgICAgICAgICAgfSwgbmV3IEVsYXN0aWNTZWFyY2guRWxhc3RpY1NlYXJjaFNlcnZpY2UobmV3IEVsYXN0aWNTZWFyY2guRWxhc3RpY1NlYXJjaFNlcnZpY2VDb25maWd1cmF0aW9uKFwiaHR0cDovL2xvY2FsaG9zdDo5MjAwXCIpKSk7XHJcbiNlbmRpZlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDb2RleC5PYmplY3RNb2RlbDtcclxudXNpbmcgQ29kZXguU2RrLlNlYXJjaDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLk9iamVjdE1vZGVsO1xyXG51c2luZyBTeXN0ZW0uQ29tcG9uZW50TW9kZWw7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uUnVudGltZS5Db21waWxlclNlcnZpY2VzO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLklucHV0O1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlZpZXdcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgVGV4dFNwYW5TZWFyY2hSZXN1bHRWaWV3TW9kZWwgOiBGaWxlSXRlbVJlc3VsdFZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBJQ29tbWFuZCBDb21tYW5kIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgU2VhcmNoUmVzdWx0IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IExpbmVOdW1iZXIgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBQcmVmaXhUZXh0IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29udGVudFRleHQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTdWZmaXhUZXh0IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVGV4dFNwYW5TZWFyY2hSZXN1bHRWaWV3TW9kZWwoSVRleHRMaW5lU3BhblJlc3VsdCByZXN1bHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb21tYW5kID0gQ29tbWFuZHMuR29Ub1NwYW47XHJcbiAgICAgICAgICAgIFNlYXJjaFJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgdmFyIHJlZmVycmluZ1NwYW4gPSByZXN1bHQuVGV4dFNwYW47XHJcbiAgICAgICAgICAgIExpbmVOdW1iZXIgPSByZWZlcnJpbmdTcGFuLkxpbmVOdW1iZXI7XHJcbiAgICAgICAgICAgIHN0cmluZyBsaW5lU3BhblRleHQgPSByZWZlcnJpbmdTcGFuLkxpbmVTcGFuVGV4dDtcclxuICAgICAgICAgICAgaWYgKGxpbmVTcGFuVGV4dCAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQcmVmaXhUZXh0ID0gbGluZVNwYW5UZXh0LlN1YnN0cmluZygwLCByZWZlcnJpbmdTcGFuLkxpbmVTcGFuU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgQ29udGVudFRleHQgPSBsaW5lU3BhblRleHQuU3Vic3RyaW5nKHJlZmVycmluZ1NwYW4uTGluZVNwYW5TdGFydCwgcmVmZXJyaW5nU3Bhbi5MZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgU3VmZml4VGV4dCA9IGxpbmVTcGFuVGV4dC5TdWJzdHJpbmcocmVmZXJyaW5nU3Bhbi5MaW5lU3BhblN0YXJ0ICsgcmVmZXJyaW5nU3Bhbi5MZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVGV4dFNwYW5TZWFyY2hSZXN1bHRWaWV3TW9kZWwoSVJlZmVyZW5jZVNlYXJjaFJlc3VsdCByZXN1bHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb21tYW5kID0gQ29tbWFuZHMuR29Ub1JlZmVyZW5jZTtcclxuICAgICAgICAgICAgU2VhcmNoUmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB2YXIgcmVmZXJyaW5nU3BhbiA9IHJlc3VsdC5SZWZlcmVuY2VTcGFuO1xyXG4gICAgICAgICAgICBMaW5lTnVtYmVyID0gcmVmZXJyaW5nU3Bhbi5MaW5lTnVtYmVyO1xyXG4gICAgICAgICAgICBzdHJpbmcgbGluZVNwYW5UZXh0ID0gcmVmZXJyaW5nU3Bhbi5MaW5lU3BhblRleHQ7XHJcbiAgICAgICAgICAgIGlmIChsaW5lU3BhblRleHQgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJlZml4VGV4dCA9IGxpbmVTcGFuVGV4dC5TdWJzdHJpbmcoMCwgcmVmZXJyaW5nU3Bhbi5MaW5lU3BhblN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIENvbnRlbnRUZXh0ID0gbGluZVNwYW5UZXh0LlN1YnN0cmluZyhyZWZlcnJpbmdTcGFuLkxpbmVTcGFuU3RhcnQsIHJlZmVycmluZ1NwYW4uTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIFN1ZmZpeFRleHQgPSBsaW5lU3BhblRleHQuU3Vic3RyaW5nKHJlZmVycmluZ1NwYW4uTGluZVNwYW5TdGFydCArIHJlZmVycmluZ1NwYW4uTGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQcm9qZWN0SXRlbVJlc3VsdFZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEZpbGVJdGVtUmVzdWx0Vmlld01vZGVsXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgRmlsZVJlc3VsdHNWaWV3TW9kZWwgOiBQcm9qZWN0SXRlbVJlc3VsdFZpZXdNb2RlbCwgSVJlc3VsdHNTdGF0c1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBDb3VudGVyIENvdW50ZXIgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBQYXRoIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgSVJlYWRPbmx5TGlzdDxGaWxlSXRlbVJlc3VsdFZpZXdNb2RlbD4gSXRlbXMgeyBnZXQ7IHNldDsgfVxyXG5cbiAgICBcbnByaXZhdGUgQ291bnRlciBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fQ291bnRlcj1uZXcgQ291bnRlcigpO31cclxuXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTeW1ib2xSZXN1bHRWaWV3TW9kZWwgOiBQcm9qZWN0SXRlbVJlc3VsdFZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBJUmVmZXJlbmNlU3ltYm9sIFN5bWJvbCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNob3J0TmFtZSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBEaXNwbGF5TmFtZSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTeW1ib2xLaW5kIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFByb2plY3RJZCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSW1hZ2VNb25pa2VyIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgaW50IFNvcnRPcmRlciB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBJZGVudGlmaWVyTGVuZ3RoIHtnZXR7cmV0dXJuIFNob3J0TmFtZS5MZW5ndGg7fX1cclxuXHJcbiAgICAgICAgcHVibGljIFN5bWJvbFJlc3VsdFZpZXdNb2RlbChJRGVmaW5pdGlvblN5bWJvbCBzeW1ib2wpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTeW1ib2wgPSBzeW1ib2w7XHJcbiAgICAgICAgICAgIFNob3J0TmFtZSA9IHN5bWJvbC5TaG9ydE5hbWU7XHJcbiAgICAgICAgICAgIERpc3BsYXlOYW1lID0gc3ltYm9sLkRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICBQcm9qZWN0SWQgPSBzeW1ib2wuUHJvamVjdElkO1xyXG4gICAgICAgICAgICBTeW1ib2xLaW5kID0gZ2xvYmFsOjpCcmlkZ2UuU2NyaXB0LlRvVGVtcChcImtleTFcIixzeW1ib2wuS2luZCkhPW51bGw/Z2xvYmFsOjpCcmlkZ2UuU2NyaXB0LkZyb21UZW1wPHN0cmluZz4oXCJrZXkxXCIpLlRvTG93ZXJJbnZhcmlhbnQoKTooc3RyaW5nKW51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFByb2plY3RHcm91cFJlc3VsdHNWaWV3TW9kZWwgOiBJUmVzdWx0c1N0YXRzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIENvdW50ZXIgQ291bnRlciB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBQcm9qZWN0TmFtZSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIElSZWFkT25seUxpc3Q8UHJvamVjdEl0ZW1SZXN1bHRWaWV3TW9kZWw+IEl0ZW1zIHsgZ2V0OyBzZXQ7IH1cclxuXG4gICAgXG5wcml2YXRlIENvdW50ZXIgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX0NvdW50ZXI9bmV3IENvdW50ZXIoKTt9XHJcblxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvamVjdFJlc3VsdHNWaWV3TW9kZWwgOiBMZWZ0UGFuZUNvbnRlbnQsIElSZXN1bHRzU3RhdHNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQ291bnRlciBDb3VudGVyIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgTGlzdDxQcm9qZWN0R3JvdXBSZXN1bHRzVmlld01vZGVsPiBQcm9qZWN0R3JvdXBzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIFByb2plY3RSZXN1bHRzVmlld01vZGVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFByb2plY3RHcm91cHMgPSBuZXcgTGlzdDxQcm9qZWN0R3JvdXBSZXN1bHRzVmlld01vZGVsPigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFByb2plY3RSZXN1bHRzVmlld01vZGVsKHN0cmluZyBzZWFyY2hTdHJpbmcsIEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8SVNlYXJjaFJlc3VsdD4gcmVzcG9uc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcm9qZWN0R3JvdXBzID0gU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQsZ2xvYmFsOjpDb2RleC5JRGVmaW5pdGlvblN5bWJvbD4ocmVzcG9uc2UuUmVzdWx0LkhpdHMsKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklTZWFyY2hSZXN1bHQsIGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2w+KShzciA9PiBzci5EZWZpbml0aW9uKSkuR3JvdXBCeTxzdHJpbmc+KChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2wsIHN0cmluZz4pKHNyID0+IHNyLlByb2plY3RJZCkpLlNlbGVjdDxnbG9iYWw6OkNvZGV4LlZpZXcuUHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbD4oKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpTeXN0ZW0uTGlucS5Hcm91cGluZzxzdHJpbmcsIGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2w+LCBnbG9iYWw6OkNvZGV4LlZpZXcuUHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbD4pKHByb2plY3RHcm91cCA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvamVjdENvdW50ZXIgPSBuZXcgQ291bnRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENvZGV4LlZpZXcuVmlld1V0aWxpdGllcy5BZGRUbzxnbG9iYWw6OkNvZGV4LlZpZXcuUHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbD4oQ29kZXguVmlldy5WaWV3VXRpbGl0aWVzLkFkZEZyb208Z2xvYmFsOjpDb2RleC5WaWV3LlByb2plY3RHcm91cFJlc3VsdHNWaWV3TW9kZWw+KG5ldyBQcm9qZWN0R3JvdXBSZXN1bHRzVmlld01vZGVsKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0TmFtZSA9IHByb2plY3RHcm91cC5LZXksXHJcbiAgICAgICAgICAgICAgICAgICAgSXRlbXMgPSBwcm9qZWN0R3JvdXAuU2VsZWN0PGdsb2JhbDo6Q29kZXguVmlldy5TeW1ib2xSZXN1bHRWaWV3TW9kZWw+KChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguSURlZmluaXRpb25TeW1ib2wsIGdsb2JhbDo6Q29kZXguVmlldy5TeW1ib2xSZXN1bHRWaWV3TW9kZWw+KShzeW1ib2wgPT4gQ29kZXguVmlldy5WaWV3VXRpbGl0aWVzLkluY3JlbWVudDxnbG9iYWw6OkNvZGV4LlZpZXcuU3ltYm9sUmVzdWx0Vmlld01vZGVsPihuZXcgU3ltYm9sUmVzdWx0Vmlld01vZGVsKHN5bWJvbCkscHJvamVjdENvdW50ZXIpKSkuVG9MaXN0KClcclxuICAgICAgICAgICAgICAgIH1cclxuLHByb2plY3RDb3VudGVyKVxyXG4sQ291bnRlcik7XHJcbiAgICAgICAgICAgIH0pKS5Ub0xpc3QoKTtcclxuICAgICAgICB9XHJcblxuICAgIFxucHJpdmF0ZSBDb3VudGVyIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19Db3VudGVyPW5ldyBDb3VudGVyKCk7fVxyXG5cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENhdGVnb3J5R3JvdXBTZWFyY2hSZXN1bHRzVmlld01vZGVsIDogSVJlc3VsdHNTdGF0c1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBDb3VudGVyIENvdW50ZXIgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBWaXNpYmlsaXR5IEhlYWRlclZpc2liaWxpdHkge2dldHtyZXR1cm4gc3RyaW5nLklzTnVsbE9yRW1wdHkoSGVhZGVyKSA/IFZpc2liaWxpdHkuQ29sbGFwc2VkIDogVmlzaWJpbGl0eS5WaXNpYmxlO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSGVhZGVyIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUHJvamVjdFJlc3VsdHNWaWV3TW9kZWwgUHJvamVjdFJlc3VsdHMgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ2F0ZWdvcnlHcm91cFNlYXJjaFJlc3VsdHNWaWV3TW9kZWwoc3RyaW5nIHNlYXJjaFN0cmluZywgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0PiByZXNwb25zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXNwb25zZS5SZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICBQb3B1bGF0ZVByb2plY3RHcm91cHM8Z2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQ+KFN5c3RlbS5MaW5xLkVudW1lcmFibGUuU2VsZWN0PGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JU2VhcmNoUmVzdWx0LGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JVGV4dExpbmVTcGFuUmVzdWx0PihyZXN1bHQuSGl0cywoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVNlYXJjaFJlc3VsdCwgZ2xvYmFsOjpDb2RleC5TZGsuU2VhcmNoLklUZXh0TGluZVNwYW5SZXN1bHQ+KShzciA9PiBzci5UZXh0TGluZSkpLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVRleHRMaW5lU3BhblJlc3VsdCwgZ2xvYmFsOjpDb2RleC5WaWV3LlRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsPikoc3IgPT4gbmV3IFRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsKHNyKSkpO1xyXG4gICAgICAgICAgICBIZWFkZXIgPSBzdHJpbmcuRm9ybWF0KFwiezB9IHRleHQgc2VhcmNoIGhpdHMgZm9yICd7MX0nXCIscmVzdWx0LkhpdHMuQ291bnQsc2VhcmNoU3RyaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDYXRlZ29yeUdyb3VwU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbChSZWZlcmVuY2VLaW5kIGtpbmQsIHN0cmluZyBzeW1ib2xOYW1lLCBJRW51bWVyYWJsZTxJUmVmZXJlbmNlU2VhcmNoUmVzdWx0PiByZWZlcmVuY2VzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUG9wdWxhdGVQcm9qZWN0R3JvdXBzPGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JUmVmZXJlbmNlU2VhcmNoUmVzdWx0PihyZWZlcmVuY2VzLCAoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVJlZmVyZW5jZVNlYXJjaFJlc3VsdCwgZ2xvYmFsOjpDb2RleC5WaWV3LlRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsPikoc3IgPT4gbmV3IFRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsKHNyKSkpO1xyXG4gICAgICAgICAgICBIZWFkZXIgPSBWaWV3VXRpbGl0aWVzLkdldFJlZmVyZW5jZXNIZWFkZXIoa2luZCwgU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Db3VudDxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVJlZmVyZW5jZVNlYXJjaFJlc3VsdD4ocmVmZXJlbmNlcyksIHN5bWJvbE5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFBvcHVsYXRlUHJvamVjdEdyb3VwczxUPihJRW51bWVyYWJsZTxUPiBpdGVtcywgRnVuYzxULCBUZXh0U3BhblNlYXJjaFJlc3VsdFZpZXdNb2RlbD4gdmlld01vZGVsRmFjdG9yeSkgd2hlcmUgVCA6IElQcm9qZWN0RmlsZVNjb3BlRW50aXR5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcm9qZWN0UmVzdWx0cy5Qcm9qZWN0R3JvdXBzLkFkZFJhbmdlKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuR3JvdXBCeTxULHN0cmluZz4oaXRlbXMsKGdsb2JhbDo6U3lzdGVtLkZ1bmM8VCwgc3RyaW5nPikoc3IgPT4gc3IuUHJvamVjdElkKSkuU2VsZWN0PGdsb2JhbDo6Q29kZXguVmlldy5Qcm9qZWN0R3JvdXBSZXN1bHRzVmlld01vZGVsPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OlN5c3RlbS5MaW5xLkdyb3VwaW5nPHN0cmluZywgVD4sIGdsb2JhbDo6Q29kZXguVmlldy5Qcm9qZWN0R3JvdXBSZXN1bHRzVmlld01vZGVsPikocHJvamVjdEdyb3VwID0+IG5ldyBQcm9qZWN0R3JvdXBSZXN1bHRzVmlld01vZGVsKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJvamVjdE5hbWUgPSBwcm9qZWN0R3JvdXAuS2V5LFxyXG4gICAgICAgICAgICAgICAgSXRlbXMgPSBwcm9qZWN0R3JvdXAuR3JvdXBCeTxzdHJpbmc+KChnbG9iYWw6OlN5c3RlbS5GdW5jPFQsIHN0cmluZz4pKHNyID0+IHNyLlByb2plY3RSZWxhdGl2ZVBhdGgpKS5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5WaWV3LkZpbGVSZXN1bHRzVmlld01vZGVsPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OlN5c3RlbS5MaW5xLkdyb3VwaW5nPHN0cmluZywgVD4sIGdsb2JhbDo6Q29kZXguVmlldy5GaWxlUmVzdWx0c1ZpZXdNb2RlbD4pKGZpbGVHcm91cCA9PiBDb2RleC5WaWV3LlZpZXdVdGlsaXRpZXMuQWRkVG88Z2xvYmFsOjpDb2RleC5WaWV3LkZpbGVSZXN1bHRzVmlld01vZGVsPihDb2RleC5WaWV3LlZpZXdVdGlsaXRpZXMuQWRkPGdsb2JhbDo6Q29kZXguVmlldy5GaWxlUmVzdWx0c1ZpZXdNb2RlbD4obmV3IEZpbGVSZXN1bHRzVmlld01vZGVsKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBQYXRoID0gZmlsZUdyb3VwLktleSxcclxuICAgICAgICAgICAgICAgICAgICBJdGVtcyA9IGZpbGVHcm91cC5TZWxlY3Q8Z2xvYmFsOjpDb2RleC5WaWV3LlRleHRTcGFuU2VhcmNoUmVzdWx0Vmlld01vZGVsPigoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxULCBnbG9iYWw6OkNvZGV4LlZpZXcuVGV4dFNwYW5TZWFyY2hSZXN1bHRWaWV3TW9kZWw+KShzciA9PiB2aWV3TW9kZWxGYWN0b3J5KHNyKSkpLlRvTGlzdCgpXHJcbiAgICAgICAgICAgICAgICB9LChnbG9iYWw6OlN5c3RlbS5GdW5jPGdsb2JhbDo6Q29kZXguVmlldy5GaWxlUmVzdWx0c1ZpZXdNb2RlbCwgaW50PikoZiA9PiBmLkl0ZW1zLkNvdW50KSksQ291bnRlcikpKS5Ub0xpc3QoKVxyXG4gICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgIH1cclxuXG4gICAgXG5wcml2YXRlIENvdW50ZXIgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX0NvdW50ZXI9bmV3IENvdW50ZXIoKTtwcml2YXRlIFByb2plY3RSZXN1bHRzVmlld01vZGVsIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19Qcm9qZWN0UmVzdWx0cz1uZXcgUHJvamVjdFJlc3VsdHNWaWV3TW9kZWwoKTt9XHJcblxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQ2F0ZWdvcml6ZWRTZWFyY2hSZXN1bHRzVmlld01vZGVsIDogTGVmdFBhbmVDb250ZW50LCBJUmVzdWx0c1N0YXRzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExpc3Q8Q2F0ZWdvcnlHcm91cFNlYXJjaFJlc3VsdHNWaWV3TW9kZWw+IENhdGVnb3JpZXMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb3VudGVyIENvdW50ZXIgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDYXRlZ29yaXplZFNlYXJjaFJlc3VsdHNWaWV3TW9kZWwoc3RyaW5nIHNlYXJjaFN0cmluZywgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0PiByZXNwb25zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENhdGVnb3JpZXMgPSBnbG9iYWw6OkJyaWRnZS5TY3JpcHQuQ2FsbEZvcihuZXcgTGlzdDxDYXRlZ29yeUdyb3VwU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbD4oKSwoX28xKT0+e19vMS5BZGQoQ29kZXguVmlldy5WaWV3VXRpbGl0aWVzLkFkZFRvPGdsb2JhbDo6Q29kZXguVmlldy5DYXRlZ29yeUdyb3VwU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbD4oICAgICAgICAgICAgICAgIG5ldyBDYXRlZ29yeUdyb3VwU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbChzZWFyY2hTdHJpbmcsIHJlc3BvbnNlKSxDb3VudGVyKSk7cmV0dXJuIF9vMTt9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDYXRlZ29yaXplZFNlYXJjaFJlc3VsdHNWaWV3TW9kZWwoc3RyaW5nIHN5bWJvbE5hbWUsIElFbnVtZXJhYmxlPElSZWZlcmVuY2VTZWFyY2hSZXN1bHQ+IHJlZmVyZW5jZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDYXRlZ29yaWVzID0gU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Hcm91cEJ5PGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JUmVmZXJlbmNlU2VhcmNoUmVzdWx0LHN0cmluZz4ocmVmZXJlbmNlcywoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxnbG9iYWw6OkNvZGV4LlNkay5TZWFyY2guSVJlZmVyZW5jZVNlYXJjaFJlc3VsdCwgc3RyaW5nPikociA9PiByLlJlZmVyZW5jZVNwYW4uUmVmZXJlbmNlLlJlZmVyZW5jZUtpbmQuVG9Mb3dlcigpKSkuU2VsZWN0PGdsb2JhbDo6Q29kZXguVmlldy5DYXRlZ29yeUdyb3VwU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbD4oKGdsb2JhbDo6U3lzdGVtLkZ1bmM8Z2xvYmFsOjpTeXN0ZW0uTGlucS5Hcm91cGluZzxzdHJpbmcsIGdsb2JhbDo6Q29kZXguU2RrLlNlYXJjaC5JUmVmZXJlbmNlU2VhcmNoUmVzdWx0PiwgZ2xvYmFsOjpDb2RleC5WaWV3LkNhdGVnb3J5R3JvdXBTZWFyY2hSZXN1bHRzVmlld01vZGVsPikocmVmZXJlbmNlR3JvdXAgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUmVmZXJlbmNlS2luZCByZWZlcmVuY2VLaW5kO1xyXG4gICAgICAgICAgICAgICAgRW51bS5UcnlQYXJzZTxnbG9iYWw6OkNvZGV4Lk9iamVjdE1vZGVsLlJlZmVyZW5jZUtpbmQ+KHJlZmVyZW5jZUdyb3VwLktleSwgdHJ1ZSwgb3V0IHJlZmVyZW5jZUtpbmQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENvZGV4LlZpZXcuVmlld1V0aWxpdGllcy5BZGRUbzxnbG9iYWw6OkNvZGV4LlZpZXcuQ2F0ZWdvcnlHcm91cFNlYXJjaFJlc3VsdHNWaWV3TW9kZWw+KG5ldyBDYXRlZ29yeUdyb3VwU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbChyZWZlcmVuY2VLaW5kLCBzeW1ib2xOYW1lLCByZWZlcmVuY2VHcm91cCksQ291bnRlcik7XHJcbiAgICAgICAgICAgIH0pKS5Ub0xpc3QoKTtcclxuICAgICAgICB9XHJcblxuICAgIFxucHJpdmF0ZSBDb3VudGVyIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19Db3VudGVyPW5ldyBDb3VudGVyKCk7fVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBwYXJ0aWFsIGNsYXNzIExlZnRQYW5lQ29udGVudFxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIExlZnRQYW5lVmlld01vZGVsIDogUGFuZVZpZXdNb2RlbEJhc2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgVmlzaWJpbGl0eSBTZWFyY2hJbmZvVmlzaWJpbGl0eSB7Z2V0e3JldHVybiAhc3RyaW5nLklzTnVsbE9yRW1wdHkoU2VhcmNoSW5mbykgPyBWaXNpYmlsaXR5LlZpc2libGUgOiBWaXNpYmlsaXR5LkNvbGxhcHNlZDt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNlYXJjaEluZm8geyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVmlzaWJpbGl0eSBDb250ZW50VmlzaWJpbGl0eSB7Z2V0e3JldHVybiBDb250ZW50ICE9IG51bGwgPyBWaXNpYmlsaXR5LlZpc2libGUgOiBWaXNpYmlsaXR5LkNvbGxhcHNlZDt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgTGVmdFBhbmVDb250ZW50IENvbnRlbnQgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExlZnRQYW5lVmlld01vZGVsIEluaXRpYWwgPSBuZXcgTGVmdFBhbmVWaWV3TW9kZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2VhcmNoSW5mbyA9IFwiRW50ZXIgYSBzZWFyY2ggc3RyaW5nLiBTdGFydCB3aXRoIGAgZm9yIGZ1bGwgdGV4dCBzZWFyY2ggcmVzdWx0cyBvbmx5LlwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBMZWZ0UGFuZVZpZXdNb2RlbCBGcm9tUmVmZXJlbmNlc1Jlc3BvbnNlKEluZGV4UXVlcnlSZXNwb25zZTxSZWZlcmVuY2VzUmVzdWx0PiByZXNwb25zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5FcnJvciAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExlZnRQYW5lVmlld01vZGVsKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2hJbmZvID0gcmVzcG9uc2UuRXJyb3JcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKGdsb2JhbDo6QnJpZGdlLlNjcmlwdC5Ub1RlbXAoXCJrZXkyXCIscmVzcG9uc2UuUmVzdWx0KSE9bnVsbD9nbG9iYWw6OkJyaWRnZS5TY3JpcHQuRnJvbVRlbXA8UmVmZXJlbmNlc1Jlc3VsdD4oXCJrZXkyXCIpLkhpdHM6KExpc3Q8SVJlZmVyZW5jZVNlYXJjaFJlc3VsdD4pbnVsbCkgPT0gbnVsbCB8fCByZXNwb25zZS5SZXN1bHQuSGl0cy5Db3VudCA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExlZnRQYW5lVmlld01vZGVsKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2hJbmZvID0gc3RyaW5nLkZvcm1hdChcIk5vIHJlZmVyZW5jZXMgZm91bmQuXCIpICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXNwb25zZS5SZXN1bHQ7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGVmdFBhbmVWaWV3TW9kZWwoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDb250ZW50ID0gbmV3IENhdGVnb3JpemVkU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbChyZXNwb25zZS5SZXN1bHQuU3ltYm9sRGlzcGxheU5hbWUgPz8gcmVzcG9uc2UuUmVzdWx0LkhpdHNbMF0uUmVmZXJlbmNlU3Bhbi5SZWZlcmVuY2UuSWQuVmFsdWUsIHJlc3BvbnNlLlJlc3VsdC5IaXRzKSxcclxuICAgICAgICAgICAgICAgIFNlYXJjaEluZm8gPSBudWxsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIExlZnRQYW5lVmlld01vZGVsIEZyb21TZWFyY2hSZXNwb25zZShzdHJpbmcgc2VhcmNoU3RyaW5nLCBJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElTZWFyY2hSZXN1bHQ+IHJlc3BvbnNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLkVycm9yICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTGVmdFBhbmVWaWV3TW9kZWwoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaEluZm8gPSByZXNwb25zZS5FcnJvclxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgoZ2xvYmFsOjpCcmlkZ2UuU2NyaXB0LlRvVGVtcChcImtleTNcIixyZXNwb25zZS5SZXN1bHQpIT1udWxsP2dsb2JhbDo6QnJpZGdlLlNjcmlwdC5Gcm9tVGVtcDxJbmRleFF1ZXJ5SGl0czxJU2VhcmNoUmVzdWx0Pj4oXCJrZXkzXCIpLkhpdHM6KExpc3Q8SVNlYXJjaFJlc3VsdD4pbnVsbCkgPT0gbnVsbCB8fCByZXNwb25zZS5SZXN1bHQuSGl0cy5Db3VudCA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExlZnRQYW5lVmlld01vZGVsKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2hJbmZvID0gc3RyaW5nLkZvcm1hdChcIk5vIHJlc3VsdHMgZm91bmQuXCIpICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXNwb25zZS5SZXN1bHQ7XHJcbiAgICAgICAgICAgIGJvb2wgaXNEZWZpbml0aW9uc1Jlc3VsdCA9IHJlc3VsdC5IaXRzWzBdLkRlZmluaXRpb24gIT0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMZWZ0UGFuZVZpZXdNb2RlbCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENvbnRlbnQgPSBpc0RlZmluaXRpb25zUmVzdWx0ID9cclxuICAgICAgICAgICAgICAgICAgICAoTGVmdFBhbmVDb250ZW50KW5ldyBQcm9qZWN0UmVzdWx0c1ZpZXdNb2RlbChzZWFyY2hTdHJpbmcsIHJlc3BvbnNlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhdGVnb3JpemVkU2VhcmNoUmVzdWx0c1ZpZXdNb2RlbChzZWFyY2hTdHJpbmcsIHJlc3BvbnNlKSxcclxuICAgICAgICAgICAgICAgIFNlYXJjaEluZm8gPSBpc0RlZmluaXRpb25zUmVzdWx0ID9cclxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0LkhpdHMuQ291bnQgPCByZXN1bHQuVG90YWwgP1xyXG5zdHJpbmcuRm9ybWF0KFwiRGlzcGxheWluZyB0b3AgezB9IHJlc3VsdHMgb3V0IG9mIHsxfTpcIixyZXN1bHQuSGl0cy5Db3VudCxyZXN1bHQuVG90YWwpOlxyXG5zdHJpbmcuRm9ybWF0KFwiezB9IHJlc3VsdHMgZm91bmQ6XCIscmVzdWx0LkhpdHMuQ291bnQpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogc3RyaW5nLkVtcHR5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cbiAgICBcbnByaXZhdGUgc3RyaW5nIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19TZWFyY2hJbmZvPW51bGw7fVxyXG5cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFJpZ2h0UGFuZVZpZXdNb2RlbCA6IFBhbmVWaWV3TW9kZWxCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFZpc2liaWxpdHkgRXJyb3JWaXNpYmlsaXR5IHtnZXR7cmV0dXJuICFzdHJpbmcuSXNOdWxsT3JFbXB0eShFcnJvcikgPyBWaXNpYmlsaXR5LlZpc2libGUgOiBWaXNpYmlsaXR5LkNvbGxhcHNlZDt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEVycm9yIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVmlzaWJpbGl0eSBFZGl0b3JWaXNpYmlsaXR5IHtnZXR7cmV0dXJuIFNvdXJjZUZpbGUgIT0gbnVsbCA/IFZpc2liaWxpdHkuVmlzaWJsZSA6IFZpc2liaWxpdHkuSGlkZGVuO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBJQm91bmRTb3VyY2VGaWxlIFNvdXJjZUZpbGUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBCaW5kYWJsZVZhbHVlPElMaW5lU3Bhbj4gVGFyZ2V0U3BhbiB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIFJpZ2h0UGFuZVZpZXdNb2RlbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJpZ2h0UGFuZVZpZXdNb2RlbChJbmRleFF1ZXJ5UmVzcG9uc2U8SUJvdW5kU291cmNlRmlsZT4gc291cmNlRmlsZVJlc3BvbnNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRXJyb3IgPSBzb3VyY2VGaWxlUmVzcG9uc2UuRXJyb3I7XHJcbiAgICAgICAgICAgIFNvdXJjZUZpbGUgPSBzb3VyY2VGaWxlUmVzcG9uc2UuUmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJpZ2h0UGFuZVZpZXdNb2RlbChJbmRleFF1ZXJ5UmVzcG9uc2UgcmVzcG9uc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFcnJvciA9IHJlc3BvbnNlLkVycm9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJpZ2h0UGFuZVZpZXdNb2RlbChJQm91bmRTb3VyY2VGaWxlIHNvdXJjZUZpbGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTb3VyY2VGaWxlID0gc291cmNlRmlsZTtcclxuICAgICAgICB9XHJcblxuICAgIFxucHJpdmF0ZSBCaW5kYWJsZVZhbHVlPElMaW5lU3Bhbj4gX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX1RhcmdldFNwYW49bmV3IEJpbmRhYmxlVmFsdWU8SUxpbmVTcGFuPigpO31cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQmluZGFibGVWYWx1ZTxUPiA6IE5vdGlmeVByb3BlcnR5Q2hhbmdlZEJhc2VcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIFQgdmFsdWU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBUIFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgT25Qcm9wZXJ0eUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIE5vdGlmeVByb3BlcnR5Q2hhbmdlZEJhc2UgOiBJTm90aWZ5UHJvcGVydHlDaGFuZ2VkXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgT25Qcm9wZXJ0eUNoYW5nZWQoW0NhbGxlck1lbWJlck5hbWVdIHN0cmluZyBtZW1iZXJOYW1lID0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5Q2hhbmdlZCE9bnVsbD9nbG9iYWw6OkJyaWRnZS5TY3JpcHQuRnJvbUxhbWJkYSgoKT0+cHJvcGVydHlDaGFuZ2VkLkludm9rZSh0aGlzLCBuZXcgUHJvcGVydHlDaGFuZ2VkRXZlbnRBcmdzKG1lbWJlck5hbWUpKSk6bnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZXZlbnQgUHJvcGVydHlDaGFuZ2VkRXZlbnRIYW5kbGVyIHByb3BlcnR5Q2hhbmdlZDtcclxuICAgICAgICBwdWJsaWMgZXZlbnQgUHJvcGVydHlDaGFuZ2VkRXZlbnRIYW5kbGVyIFByb3BlcnR5Q2hhbmdlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWRkXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5Q2hhbmdlZCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVtb3ZlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5Q2hhbmdlZCAtPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgUGFuZVZpZXdNb2RlbEJhc2UgOiBOb3RpZnlQcm9wZXJ0eUNoYW5nZWRCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFZpZXdNb2RlbERhdGFDb250ZXh0IERhdGFDb250ZXh0IHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJmYWNlIElSZXN1bHRzU3RhdHNcclxuICAgIHtcclxuICAgICAgICBDb3VudGVyIENvdW50ZXIgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIENvdW50ZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQ291bnRlciBQYXJlbnQ7XHJcbiAgICAgICAgcHVibGljIGludCBDb3VudDtcclxuXHJcbiAgICAgICAgcHVibGljIENvdW50ZXIgQ3JlYXRlQ2hpbGQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb3VudGVyKCkgeyBQYXJlbnQgPSB0aGlzIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbmNyZW1lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ291bnQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChpbnQgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb3VudCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgVmlld01vZGVsRGF0YUNvbnRleHQgOiBOb3RpZnlQcm9wZXJ0eUNoYW5nZWRCYXNlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBMZWZ0UGFuZVZpZXdNb2RlbCBsZWZ0UGFuZTtcclxuXHJcbiAgICAgICAgcHVibGljIExlZnRQYW5lVmlld01vZGVsIExlZnRQYW5lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnRQYW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGVmdFBhbmUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE9uUHJvcGVydHlDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgUmlnaHRQYW5lVmlld01vZGVsIHJpZ2h0UGFuZSA9IG5ldyBSaWdodFBhbmVWaWV3TW9kZWwoKTtcclxuXHJcbiAgICAgICAgcHVibGljIFJpZ2h0UGFuZVZpZXdNb2RlbCBSaWdodFBhbmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmlnaHRQYW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmlnaHRQYW5lID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBPblByb3BlcnR5Q2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbml0aWFsaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExlZnRQYW5lID0gTGVmdFBhbmVWaWV3TW9kZWwuSW5pdGlhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ29kZXguU2RrLlNlYXJjaDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLlJ1bnRpbWUuQ29tcGlsZXJTZXJ2aWNlcztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Db250cm9scztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuSW5wdXQ7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1lZGlhO1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlZpZXdcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBDb21tYW5kc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUm91dGVkQ29tbWFuZCBHb1RvRGVmaW5pdGlvbiA9IENyZWF0ZUNvbW1hbmQoKTtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJvdXRlZENvbW1hbmQgR29Ub1NwYW4gPSBDcmVhdGVDb21tYW5kKCk7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSb3V0ZWRDb21tYW5kIEdvVG9SZWZlcmVuY2UgPSBDcmVhdGVDb21tYW5kKCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFJvdXRlZENvbW1hbmQgQ3JlYXRlQ29tbWFuZChbQ2FsbGVyTWVtYmVyTmFtZV0gc3RyaW5nIG5hbWUgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZWRDb21tYW5kKG5hbWUsIHR5cGVvZihDb21tYW5kcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgR29Ub0RlZmluaXRpb25Db21tYW5kQmluZGluZyA6IFR5cGVkQ29tbWFuZEJpbmRpbmc8SVJlZmVyZW5jZVN5bWJvbD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgR29Ub0RlZmluaXRpb25Db21tYW5kQmluZGluZygpIDogYmFzZShDb21tYW5kcy5Hb1RvRGVmaW5pdGlvbikgeyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEdvVG9TcGFuQ29tbWFuZEJpbmRpbmcgOiBUeXBlZENvbW1hbmRCaW5kaW5nPElUZXh0TGluZVNwYW5SZXN1bHQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEdvVG9TcGFuQ29tbWFuZEJpbmRpbmcoKSA6IGJhc2UoQ29tbWFuZHMuR29Ub1NwYW4pIHsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBHb1RvUmVmZXJlbmNlQ29tbWFuZEJpbmRpbmcgOiBUeXBlZENvbW1hbmRCaW5kaW5nPElSZWZlcmVuY2VTZWFyY2hSZXN1bHQ+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEdvVG9SZWZlcmVuY2VDb21tYW5kQmluZGluZygpIDogYmFzZShDb21tYW5kcy5Hb1RvUmVmZXJlbmNlKSB7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgVHlwZWRDb21tYW5kQmluZGluZzxUPiA6IENvbW1hbmRCaW5kaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGV2ZW50IFR5cGVkRXhlY3V0ZWRSb3V0ZWRFdmVudEhhbmRsZXI8VD4gQ29tbWFuZEV4ZWN1dGVkO1xyXG5cclxuICAgICAgICBwdWJsaWMgVHlwZWRDb21tYW5kQmluZGluZyhSb3V0ZWRDb21tYW5kIGNvbW1hbmQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb21tYW5kID0gY29tbWFuZDtcclxuICAgICAgICAgICAgYmFzZS5FeGVjdXRlZCArPSBUeXBlZENvbW1hbmRCaW5kaW5nX0V4ZWN1dGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFR5cGVkQ29tbWFuZEJpbmRpbmdfRXhlY3V0ZWQob2JqZWN0IHNlbmRlciwgRXhlY3V0ZWRSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbWV0ZXIgPSBlLlBhcmFtZXRlcjtcclxuICAgICAgICAgICAgdmFyIHR5cGVkUGFyYW1ldGVyID0gKFQpcGFyYW1ldGVyO1xyXG4gICAgICAgICAgICBDb21tYW5kRXhlY3V0ZWQhPW51bGw/Z2xvYmFsOjpCcmlkZ2UuU2NyaXB0LkZyb21MYW1iZGEoKCk9PkNvbW1hbmRFeGVjdXRlZC5JbnZva2UodHlwZWRQYXJhbWV0ZXIpKTpudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZWdhdGUgdm9pZCBUeXBlZEV4ZWN1dGVkUm91dGVkRXZlbnRIYW5kbGVyPFQ+KFQgcGFyYW1ldGVyKTtcclxufVxyXG4iLCJ1c2luZyBTeXN0ZW0uV2luZG93cztcclxudXNpbmcgQnJpZGdlO1xyXG51c2luZyBCcmlkZ2UuSHRtbDU7XHJcbnVzaW5nIEdyYW51bGFyLlByZXNlbnRhdGlvbi5XZWI7XHJcbnVzaW5nIE1vbmFjbztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTWVkaWE7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLlRocmVhZGluZztcclxudXNpbmcgR3JhbnVsYXIuSG9zdDtcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIEVkaXRvckhvc3RDb250cm9sIDogRnJhbWV3b3JrRWxlbWVudCwgSUh0bWxFbGVtZW50SG9zdFxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgSFRNTEVsZW1lbnQgbV9odG1sRWxlbWVudDtcclxuICAgICAgICBwcml2YXRlIG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yIG1fZWRpdG9yO1xyXG4gICAgICAgIHByaXZhdGUgUmVuZGVyUXVldWUgcmVuZGVyUXVldWUgPSBuZXcgUmVuZGVyUXVldWUoKTtcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBtX3RleHQgPSBcIkhlbGxvIFdvcmxkXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhc3luYyB2b2lkIFNldFJlbmRlckVsZW1lbnQoSFRNTEVsZW1lbnQgaHRtbEVsZW1lbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtX2h0bWxFbGVtZW50ID0gaHRtbEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG1fZWRpdG9yID0gYXdhaXQgRWRpdG9yLkNyZWF0ZShodG1sRWxlbWVudCwgbmV3IEVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG1fdGV4dCxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlID0gXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICByZWFkT25seSA9IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlZpc3VhbElzSGl0VGVzdFZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBWaXN1YWxCYWNrZ3JvdW5kID0gQnJ1c2hlcy5UcmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBTaXplIEFycmFuZ2VPdmVycmlkZShTaXplIGZpbmFsU2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2l6ZSA9IFZpc3VhbEJvdW5kcy5TaXplO1xyXG4gICAgICAgICAgICBmaW5hbFNpemUgPSBiYXNlLkFycmFuZ2VPdmVycmlkZShmaW5hbFNpemUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjdXJyZW50U2l6ZS5Jc0Nsb3NlKGZpbmFsU2l6ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChtX2VkaXRvciAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclF1ZXVlLkludm9rZUFzeW5jKChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtX2VkaXRvci5sYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmaW5hbFNpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJ0aWFsIHZvaWQgT25Tb3VyY2VGaWxlQ2hhbmdlZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtX3RleHQgPSAoZ2xvYmFsOjpCcmlkZ2UuU2NyaXB0LlRvVGVtcChcImtleTFcIixTb3VyY2VGaWxlKSE9bnVsbD9nbG9iYWw6OkJyaWRnZS5TY3JpcHQuRnJvbVRlbXA8SUJvdW5kU291cmNlRmlsZT4oXCJrZXkxXCIpLlNvdXJjZUZpbGUuQ29udGVudDooc3RyaW5nKW51bGwpID8/IHN0cmluZy5FbXB0eTtcclxuICAgICAgICAgICAgbV9lZGl0b3Iuc2V0VmFsdWUobV90ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTWFya3VwO1xyXG4jaWYgR1JBTlVMQVJcclxudXNpbmcgSVNlcnZpY2VQcm92aWRlciA9IFN5c3RlbS5XaW5kb3dzLk1hcmt1cC5Jbml0aWFsaXplQ29udGV4dDtcclxuI2VuZGlmXHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIEdyYW51bGFyRXh0ZW5zaW9uc1xyXG4gICAge1xyXG4jaWYgR1JBTlVMQVJcclxuICAgICAgICBwdWJsaWMgc3RhdGljIElQcm9wZXJ0eVBhdGhFbGVtZW50IEFzVHJpZ2dlclByb3BlcnR5KHRoaXMgRGVwZW5kZW5jeVByb3BlcnR5IGRlcGVuZGVuY3lQcm9wZXJ0eSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGVwZW5kZW5jeVByb3BlcnR5UGF0aEVsZW1lbnQoZGVwZW5kZW5jeVByb3BlcnR5KTtcclxuICAgICAgICB9XHJcbiNlbHNlXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBEZXBlbmRlbmN5UHJvcGVydHkgQXNUcmlnZ2VyUHJvcGVydHkodGhpcyBEZXBlbmRlbmN5UHJvcGVydHkgZGVwZW5kZW5jeVByb3BlcnR5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlcGVuZGVuY3lQcm9wZXJ0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9wdWJsaWMgc3RhdGljIFR5cGUgR2V0TWFya3VwVGFyZ2V0VHlwZSh0aGlzIElTZXJ2aWNlUHJvdmlkZXIgcHJvdmlkZXIpXHJcbiAgICAgICAgLy97XHJcbiAgICAgICAgLy8gICAgdmFyIHRhcmdldFByb3ZpZGVyID0gKElQcm92aWRlVmFsdWVUYXJnZXQpcHJvdmlkZXIuR2V0U2VydmljZSh0eXBlb2YoKSlcclxuICAgICAgICAvL31cclxuI2VuZGlmXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVHJpZ2dlciBXaXRoU2V0dGVycyh0aGlzIFRyaWdnZXIgdHJpZ2dlciwgcGFyYW1zIFNldHRlcltdIHNldHRlcnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgc2V0dGVyIGluIHNldHRlcnMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXIuU2V0dGVycy5BZGQoc2V0dGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG51c2luZyBCcmlkZ2U7XHJcbnVzaW5nIEJyaWRnZS5IdG1sNTtcclxudXNpbmcgR3JhbnVsYXIuUHJlc2VudGF0aW9uLldlYjtcclxudXNpbmcgTW9uYWNvO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5NZWRpYTtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuVGhyZWFkaW5nO1xyXG51c2luZyBHcmFudWxhci5Ib3N0O1xyXG5cclxubmFtZXNwYWNlIENvZGV4LlZpZXdcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgTGVmdFBhbmVWaWV3IDogSUh0bWxFbGVtZW50SG9zdFxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgSFRNTEVsZW1lbnQgbV9odG1sRWxlbWVudDtcclxuICAgICAgICBwcml2YXRlIEhUTUxEaXZFbGVtZW50IG1fY2hpbGRyZW5Ib3N0O1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRSZW5kZXJFbGVtZW50KEhUTUxFbGVtZW50IGh0bWxFbGVtZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbV9odG1sRWxlbWVudCA9IGh0bWxFbGVtZW50O1xyXG4gICAgICAgICAgICAvL3RoaXMuVmlzdWFsSXNIaXRUZXN0VmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vVmlzdWFsQmFja2dyb3VuZCA9IEJydXNoZXMuVHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAvL1JlbmRlclZpZXcodGhpcywgVmlld01vZGVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBSZW5kZXJWaWV3KExlZnRQYW5lVmlldyB2aWV3LCBMZWZ0UGFuZVZpZXdNb2RlbCB2aWV3TW9kZWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAobV9jaGlsZHJlbkhvc3QgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbV9jaGlsZHJlbkhvc3QuUmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2aWV3TW9kZWwgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDb2RleC5PYmplY3RNb2RlbDtcclxudXNpbmcgQ29kZXguU2RrLlNlYXJjaDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nO1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuQ29udHJvbHM7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkRvY3VtZW50cztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuSW5wdXQ7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1lZGlhO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5NZWRpYS5JbWFnaW5nO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5OYXZpZ2F0aW9uO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5TaGFwZXM7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW50ZXJhY3Rpb24gbG9naWMgZm9yIE1haW5XaW5kb3cueGFtbFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIE1haW5XaW5kb3cgOiBXaW5kb3dcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgSUNvZGV4IENvZGV4U2VydmljZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBWaWV3TW9kZWxEYXRhQ29udGV4dCBWaWV3TW9kZWwgPSBuZXcgVmlld01vZGVsRGF0YUNvbnRleHQoKTtcclxuXHJcbiAgICAgICAgcHVibGljIE1haW5XaW5kb3coKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLkRhdGFDb250ZXh0ID0gVmlld01vZGVsO1xyXG4gICAgICAgICAgICBWaWV3TW9kZWwuSW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICBTZWFyY2hCb3guVGV4dCA9IFwiYXNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBHcmlkX0xvYWRlZChvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiR3JpZF9Mb2FkZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYXN5bmMgdm9pZCBTZWFyY2hUZXh0Q2hhbmdlZChvYmplY3Qgc2VuZGVyLCBUZXh0Q2hhbmdlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHNlYXJjaFN0cmluZyA9IFNlYXJjaEJveC5UZXh0O1xyXG4gICAgICAgICAgICBzZWFyY2hTdHJpbmcgPSBzZWFyY2hTdHJpbmcuVHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlYXJjaFN0cmluZyA9PSBcImFzc1wiKVxyXG4gICAgICAgICAgICB7XHJcbiNpZiAhQlJJREdFXHJcbiAgICAgICAgICAgICAgICBVSVRyYWNlLlN0YXJ0KCk7XHJcbiNlbmRpZlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4jaWYgIUJSSURHRVxyXG4gICAgICAgICAgICAgICAgVUlUcmFjZS5TdG9wKCk7XHJcbiNlbmRpZlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VhcmNoU3RyaW5nLkxlbmd0aCA8IDMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFZpZXdNb2RlbC5MZWZ0UGFuZSA9IG5ldyBMZWZ0UGFuZVZpZXdNb2RlbCgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoSW5mbyA9IFwiRW50ZXIgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzLlwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBDb2RleFNlcnZpY2UuU2VhcmNoQXN5bmMobmV3IFNlYXJjaEFyZ3VtZW50cygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNlYXJjaFN0cmluZyA9IHNlYXJjaFN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFZpZXdNb2RlbC5MZWZ0UGFuZSA9IExlZnRQYW5lVmlld01vZGVsLkZyb21TZWFyY2hSZXNwb25zZShzZWFyY2hTdHJpbmcsIHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhc3luYyB2b2lkIEdvVG9TcGFuRXhlY3V0ZWQoSVRleHRMaW5lU3BhblJlc3VsdCBsaW5lU3BhbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzb3VyY2VGaWxlUmVzcG9uc2UgPSBhd2FpdCBDb2RleFNlcnZpY2UuR2V0U291cmNlQXN5bmMobmV3IEdldFNvdXJjZUFyZ3VtZW50cygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFByb2plY3RJZCA9IGxpbmVTcGFuLlByb2plY3RJZCxcclxuICAgICAgICAgICAgICAgIFByb2plY3RSZWxhdGl2ZVBhdGggPSBsaW5lU3Bhbi5Qcm9qZWN0UmVsYXRpdmVQYXRoLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFZpZXdNb2RlbC5SaWdodFBhbmUgPSBuZXcgUmlnaHRQYW5lVmlld01vZGVsKHNvdXJjZUZpbGVSZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYXN5bmMgdm9pZCBHb1RvUmVmZXJlbmNlRXhlY3V0ZWQoSVJlZmVyZW5jZVNlYXJjaFJlc3VsdCByZWZlcmVuY2VSZXN1bHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc291cmNlRmlsZVJlc3BvbnNlID0gYXdhaXQgQ29kZXhTZXJ2aWNlLkdldFNvdXJjZUFzeW5jKG5ldyBHZXRTb3VyY2VBcmd1bWVudHMoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0SWQgPSByZWZlcmVuY2VSZXN1bHQuUHJvamVjdElkLFxyXG4gICAgICAgICAgICAgICAgUHJvamVjdFJlbGF0aXZlUGF0aCA9IHJlZmVyZW5jZVJlc3VsdC5Qcm9qZWN0UmVsYXRpdmVQYXRoLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFZpZXdNb2RlbC5SaWdodFBhbmUgPSBuZXcgUmlnaHRQYW5lVmlld01vZGVsKHNvdXJjZUZpbGVSZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYXN5bmMgdm9pZCBGaW5kQWxsUmVmZXJlbmNlc0V4ZWN1dGVkKElSZWZlcmVuY2VTeW1ib2wgc3ltYm9sKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgQ29kZXhTZXJ2aWNlLkZpbmRBbGxSZWZlcmVuY2VzQXN5bmMobmV3IEZpbmRBbGxSZWZlcmVuY2VzQXJndW1lbnRzKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJvamVjdElkID0gc3ltYm9sLlByb2plY3RJZCxcclxuICAgICAgICAgICAgICAgIFN5bWJvbElkID0gc3ltYm9sLklkLlZhbHVlLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFZpZXdNb2RlbC5MZWZ0UGFuZSA9IExlZnRQYW5lVmlld01vZGVsLkZyb21SZWZlcmVuY2VzUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFzeW5jIHZvaWQgR29Ub0RlZmluaXRpb25FeGVjdXRlZChJUmVmZXJlbmNlU3ltYm9sIHN5bWJvbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IENvZGV4U2VydmljZS5GaW5kRGVmaW5pdGlvbkxvY2F0aW9uQXN5bmMobmV3IEZpbmREZWZpbml0aW9uTG9jYXRpb25Bcmd1bWVudHMoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0SWQgPSBzeW1ib2wuUHJvamVjdElkLFxyXG4gICAgICAgICAgICAgICAgU3ltYm9sSWQgPSBzeW1ib2wuSWQuVmFsdWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLkVycm9yICE9IG51bGwgfHwgcmVzcG9uc2UuUmVzdWx0LkhpdHMuQ291bnQgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVmlld01vZGVsLlJpZ2h0UGFuZSA9IG5ldyBSaWdodFBhbmVWaWV3TW9kZWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLlJlc3VsdC5IaXRzLkNvdW50ID4gMSB8fCByZXNwb25zZS5SZXN1bHQuSGl0c1swXS5SZWZlcmVuY2VTcGFuLlJlZmVyZW5jZS5SZWZlcmVuY2VLaW5kICE9IFwiRGVmaW5pdGlvblwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBTaG93IGRlZmluaXRpb25zIGluIGxlZnQgcGFuZVxyXG4gICAgICAgICAgICAgICAgVmlld01vZGVsLkxlZnRQYW5lID0gTGVmdFBhbmVWaWV3TW9kZWwuRnJvbVJlZmVyZW5jZXNSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBJUmVmZXJlbmNlU2VhcmNoUmVzdWx0IHJlZmVyZW5jZSA9IHJlc3BvbnNlLlJlc3VsdC5IaXRzWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZUZpbGVSZXNwb25zZSA9IGF3YWl0IENvZGV4U2VydmljZS5HZXRTb3VyY2VBc3luYyhuZXcgR2V0U291cmNlQXJndW1lbnRzKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0SWQgPSByZWZlcmVuY2UuUHJvamVjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIFByb2plY3RSZWxhdGl2ZVBhdGggPSByZWZlcmVuY2UuUHJvamVjdFJlbGF0aXZlUGF0aCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIFZpZXdNb2RlbC5SaWdodFBhbmUgPSBuZXcgUmlnaHRQYW5lVmlld01vZGVsKHNvdXJjZUZpbGVSZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhc3luYyB2b2lkIFVwZGF0ZVJpZ2h0UGFuZShGdW5jPFRhc2s8UmlnaHRQYW5lVmlld01vZGVsPj4gZ2V0Vmlld01vZGVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0Vmlld01vZGVsID0gYXdhaXQgZ2V0Vmlld01vZGVsKCk7XHJcbiAgICAgICAgICAgIFZpZXdNb2RlbC5SaWdodFBhbmUgPSByaWdodFZpZXdNb2RlbDtcclxuICAgICAgICB9XHJcblxuICAgIFxucHJpdmF0ZSBJQ29kZXggX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX0NvZGV4U2VydmljZT1Db2RleFByb3ZpZGVyLkluc3RhbmNlO31cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Db250cm9scztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRGF0YTtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRG9jdW1lbnRzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5JbnB1dDtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTWVkaWE7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1lZGlhLkltYWdpbmc7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk5hdmlnYXRpb247XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLlNoYXBlcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbnRlcmFjdGlvbiBsb2dpYyBmb3IgUmlnaHRQYW5lVmlldy54YW1sXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUmlnaHRQYW5lVmlldyA6IFVzZXJDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFJpZ2h0UGFuZVZpZXcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkNvbnRyb2xzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5NZWRpYTtcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgU3R5bGVzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIEdldElzTW91c2VPdmVySGVhZGVyKERlcGVuZGVuY3lPYmplY3Qgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChib29sKW9iai5HZXRWYWx1ZShJc01vdXNlT3ZlckhlYWRlclByb3BlcnR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBTZXRJc01vdXNlT3ZlckhlYWRlcihEZXBlbmRlbmN5T2JqZWN0IG9iaiwgYm9vbCB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iai5TZXRWYWx1ZShJc01vdXNlT3ZlckhlYWRlclByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVc2luZyBhIERlcGVuZGVuY3lQcm9wZXJ0eSBhcyB0aGUgYmFja2luZyBzdG9yZSBmb3IgSXNNb3VzZU92ZXJIZWFkZXIuICBUaGlzIGVuYWJsZXMgYW5pbWF0aW9uLCBzdHlsaW5nLCBiaW5kaW5nLCBldGMuLi5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERlcGVuZGVuY3lQcm9wZXJ0eSBJc01vdXNlT3ZlckhlYWRlclByb3BlcnR5ID1cclxuICAgICAgICAgICAgRGVwZW5kZW5jeVByb3BlcnR5LlJlZ2lzdGVyQXR0YWNoZWQoXCJJc01vdXNlT3ZlckhlYWRlclwiLCB0eXBlb2YoYm9vbCksIHR5cGVvZihTdHlsZXMpLCBuZXcgUHJvcGVydHlNZXRhZGF0YShmYWxzZSkpO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIE9yaWVudGF0aW9uIEdldEhlYWRlck9yaWVudGF0aW9uKERlcGVuZGVuY3lPYmplY3Qgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChPcmllbnRhdGlvbilvYmouR2V0VmFsdWUoSGVhZGVyT3JpZW50YXRpb25Qcm9wZXJ0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgU2V0SGVhZGVyT3JpZW50YXRpb24oRGVwZW5kZW5jeU9iamVjdCBvYmosIE9yaWVudGF0aW9uIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2JqLlNldFZhbHVlKEhlYWRlck9yaWVudGF0aW9uUHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVzaW5nIGEgRGVwZW5kZW5jeVByb3BlcnR5IGFzIHRoZSBiYWNraW5nIHN0b3JlIGZvciBIZWFkZXJPcmllbnRhdGlvbi4gIFRoaXMgZW5hYmxlcyBhbmltYXRpb24sIHN0eWxpbmcsIGJpbmRpbmcsIGV0Yy4uLlxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRGVwZW5kZW5jeVByb3BlcnR5IEhlYWRlck9yaWVudGF0aW9uUHJvcGVydHkgPVxyXG4gICAgICAgICAgICBEZXBlbmRlbmN5UHJvcGVydHkuUmVnaXN0ZXJBdHRhY2hlZChcIkhlYWRlck9yaWVudGF0aW9uXCIsIHR5cGVvZihPcmllbnRhdGlvbiksIHR5cGVvZihTdHlsZXMpLCBuZXcgUHJvcGVydHlNZXRhZGF0YShPcmllbnRhdGlvbi5Ib3Jpem9udGFsKSk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBJbml0aWFsaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEJyaWRnZS5IdG1sNTtcclxudXNpbmcgQ29kZXguT2JqZWN0TW9kZWw7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5SdW50aW1lLkNvbXBpbGVyU2VydmljZXM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uV2luZG93cztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgcGFydGlhbCBjbGFzcyBWaWV3VXRpbGl0aWVzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRvZ2dsZUV4cGFuZENvbGxhcHNlKE1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+IGFyZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBoZWFkZXJFbGVtZW50ID0gYXJnLkN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgIHZhciBjb2xsYXBzaWJsZSA9IGhlYWRlckVsZW1lbnQuTmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBpZiAoKERpc3BsYXkpY29sbGFwc2libGUuU3R5bGUuRGlzcGxheSA9PSBEaXNwbGF5Lk5vbmUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlLlN0eWxlLkRpc3BsYXkgPSBEaXNwbGF5LkJsb2NrO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyRWxlbWVudC5TZXRCYWNrZ3JvdW5kSWNvbihcIm1pbnVzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2libGUuU3R5bGUuRGlzcGxheSA9IERpc3BsYXkuTm9uZTtcclxuICAgICAgICAgICAgICAgIGhlYWRlckVsZW1lbnQuU2V0QmFja2dyb3VuZEljb24oXCJwbHVzXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhcmcuU3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEhUTUxFbGVtZW50IFNldEJhY2tncm91bmRJY29uKHRoaXMgSFRNTEVsZW1lbnQgZWxlbWVudCwgc3RyaW5nIGltYWdlTmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuU3R5bGUuQmFja2dyb3VuZEltYWdlID0gc3RyaW5nLkZvcm1hdChcInVybChjb250ZW50L2ljb25zL3swfS5wbmcpXCIsaW1hZ2VOYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEhUTUxEaXZFbGVtZW50IFJlbmRlckhlYWRlcmVkQ29udGVudChIVE1MRWxlbWVudCBwYXJlbnRFbGVtZW50LCBzdHJpbmcgaGVhZGVyQ2xhc3MsIHN0cmluZyBoZWFkZXJUZXh0LCBzdHJpbmcgY29udGVudENsYXNzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gSGVhZGVyXHJcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ2xhc3NOYW1lID0gaGVhZGVyQ2xhc3MsXHJcbiAgICAgICAgICAgICAgICBPbkNsaWNrID0gVmlld1V0aWxpdGllcy5Ub2dnbGVFeHBhbmRDb2xsYXBzZSxcclxuICAgICAgICAgICAgICAgIFRleHRDb250ZW50ID0gaGVhZGVyVGV4dFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbnRlbnRcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnRFbGVtZW50ID0gbmV3IEhUTUxEaXZFbGVtZW50KCkgeyBDbGFzc05hbWUgPSBjb250ZW50Q2xhc3MgfTtcclxuICAgICAgICAgICAgcGFyZW50RWxlbWVudC5BcHBlbmRDaGlsZChjb250ZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYm9vbCBFbmRzV2l0aCh0aGlzIHN0cmluZyBzLCBzdHJpbmcgdmFsdWUsIFN0cmluZ0NvbXBhcmlzb24gY29tcGFyaXNvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdWZmaXhTdGFydEluZGV4ID0gcy5MZW5ndGggLSB2YWx1ZS5MZW5ndGg7XHJcbiAgICAgICAgICAgIHJldHVybiBzLkluZGV4T2YodmFsdWUsIHN1ZmZpeFN0YXJ0SW5kZXgsIGNvbXBhcmlzb24pID09IHN1ZmZpeFN0YXJ0SW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZyBHZXRGaWxlTmFtZUdseXBoKHN0cmluZyBmaWxlTmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlTmFtZS5FbmRzV2l0aChcIi5jc1wiLCBTdHJpbmdDb21wYXJpc29uLk9yZGluYWxJZ25vcmVDYXNlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY3NoYXJwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsZU5hbWUuRW5kc1dpdGgoXCIudmJcIiwgU3RyaW5nQ29tcGFyaXNvbi5PcmRpbmFsSWdub3JlQ2FzZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInZiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsZU5hbWUuRW5kc1dpdGgoXCIudHNcIiwgU3RyaW5nQ29tcGFyaXNvbi5PcmRpbmFsSWdub3JlQ2FzZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlR5cGVTY3JpcHRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmaWxlTmFtZS5FbmRzV2l0aChcIi54YW1sXCIsIFN0cmluZ0NvbXBhcmlzb24uT3JkaW5hbElnbm9yZUNhc2UpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ4YW1sXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBcIjIxMlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIEJyaWRnZS5IdG1sNTtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIE1vbmFjb1xyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIEVkaXRvclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgVGFzazxtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvcj4gQ3JlYXRlKEhUTUxFbGVtZW50IGh0bWxFbGVtZW50LCBFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zIG9wdGlvbnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhd2FpdCBNb25hY29MaWJyYXJ5LkluaXRpYWxpemVBc3luYygpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1vbmFjby5lZGl0b3IuY3JlYXRlKGh0bWxFbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIEJyaWRnZS5IdG1sNTtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxuW0V4dGVybmFsXVxyXG5bTW9kdWxlKHRydWUsIExvYWROYW1lID0gXCJ2cy9lZGl0b3IvZWRpdG9yLm1haW5cIiwgTmFtZSA9IFwibW9uYWNvX2VkaXRvcl9pZ25vcmVkXCIpXVxyXG5wdWJsaWMgc3RhdGljIHBhcnRpYWwgY2xhc3MgbW9uYWNvIHsgfVxyXG5cclxubmFtZXNwYWNlIE1vbmFjb1xyXG57XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gUmVzcG9uc2libGUgZm9yIGxvYWRpbmcgdGhlIG1vbmFjbyBlZGl0b3IgamF2YXNjcmlwdCBsaWJyYXJ5IHVzaW5nIHRoZSBsb2FkZXIuanNcclxuICAgIC8vLyBpbmNsdWRlZCB3aXRoIG1vbmFjb1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgTW9uYWNvTGlicmFyeVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIFRhc2sgaW5pdGlhbGl6ZVRhc2s7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVGFzayBJbml0aWFsaXplQXN5bmMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGluaXRpYWxpemVUYXNrID09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgaW5pdGlhbGl6ZSBvbmNlXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplVGFzayA9IEluaXRpYWxpemVDb3JlQXN5bmMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxpemVUYXNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgVGFzayBJbml0aWFsaXplQ29yZUFzeW5jKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNjcmlwdC5Xcml0ZShcInJlcXVpcmUuY29uZmlnKHsgcGF0aHM6IHsgJ3ZzJzogJ25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2Rldi92cycgfSB9KVwiKTtcclxuICAgICAgICAgICAgYXdhaXQgQnJpZGdlLk1vZHVsZS5Mb2FkKHR5cGVvZihtb25hY28pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXhcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEVudGl0eUJhc2UgOiBJU2VyaWFsaXphYmxlRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBJbml0aWFsaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIE9uU2VyaWFsaXppbmdDb3JlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIE9uRGVzZXJpYWxpemVkQ29yZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBJU2VyaWFsaXphYmxlRW50aXR5Lk9uU2VyaWFsaXppbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT25TZXJpYWxpemluZ0NvcmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgSVNlcmlhbGl6YWJsZUVudGl0eS5PbkRlc2VyaWFsaXplZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPbkRlc2VyaWFsaXplZENvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVyZmFjZSBJU2VyaWFsaXphYmxlRW50aXR5XHJcbiAgICB7XHJcbiAgICAgICAgdm9pZCBPbkRlc2VyaWFsaXplZCgpO1xyXG5cclxuICAgICAgICB2b2lkIE9uU2VyaWFsaXppbmcoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIEJyaWRnZTtcclxudXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBHcmFudWxhci5QcmVzZW50YXRpb24uV2ViO1xyXG51c2luZyBNb25hY287XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1lZGlhO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5UaHJlYWRpbmc7XHJcbnVzaW5nIEdyYW51bGFyLkhvc3Q7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBMZWZ0UGFuZVZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlbmRlcihMZWZ0UGFuZVZpZXcgdmlldywgSFRNTEVsZW1lbnQgcGFyZW50RWxlbWVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsb2JhbDo6QnJpZGdlLlNjcmlwdC5Ub1RlbXAoXCJrZXkxXCIsQ29udGVudCkhPW51bGw/Z2xvYmFsOjpCcmlkZ2UuU2NyaXB0LkZyb21MYW1iZGEoKCk9Pmdsb2JhbDo6QnJpZGdlLlNjcmlwdC5Gcm9tVGVtcDxMZWZ0UGFuZUNvbnRlbnQ+KFwia2V5MVwiKS5SZW5kZXIodmlldywgcGFyZW50RWxlbWVudCkpOm51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBwYXJ0aWFsIGNsYXNzIExlZnRQYW5lQ2hpbGRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3Qgdm9pZCBSZW5kZXIoTGVmdFBhbmVWaWV3IHZpZXcsIEhUTUxFbGVtZW50IHBhcmVudEVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIExlZnRQYW5lQ29udGVudCA6IExlZnRQYW5lQ2hpbGRcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgcGFydGlhbCBjbGFzcyBQcm9qZWN0SXRlbVJlc3VsdFZpZXdNb2RlbCA6IExlZnRQYW5lQ2hpbGRcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgcGFydGlhbCBjbGFzcyBGaWxlSXRlbVJlc3VsdFZpZXdNb2RlbCA6IExlZnRQYW5lQ2hpbGRcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBGaWxlUmVzdWx0c1ZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIFJlbmRlcihMZWZ0UGFuZVZpZXcgdmlldywgSFRNTEVsZW1lbnQgcGFyZW50RWxlbWVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBmaWxlR3JvdXBFbGVtZW50ID0gbmV3IEhUTUxEaXZFbGVtZW50KCkgeyBDbGFzc05hbWUgPSBcInJGXCIgfTtcclxuICAgICAgICAgICAgcGFyZW50RWxlbWVudC5BcHBlbmRDaGlsZChmaWxlR3JvdXBFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGZpbGVHcm91cEVsZW1lbnQuQXBwZW5kQ2hpbGQobmV3IEhUTUxEaXZFbGVtZW50KClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ2xhc3NOYW1lID0gXCJyTlwiLFxyXG4gICAgICAgICAgICAgICAgVGV4dENvbnRlbnQgPSBzdHJpbmcuRm9ybWF0KFwiezB9ICh7MX0pXCIsUGF0aCxDb3VudGVyLkNvdW50KSAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLlNldEJhY2tncm91bmRJY29uKENvZGV4LlZpZXcuVmlld1V0aWxpdGllcy5HZXRGaWxlTmFtZUdseXBoKFBhdGgpKSk7XHJcblxyXG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgaXRlbSBpbiBJdGVtcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5SZW5kZXIodmlldywgZmlsZUdyb3VwRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU3ltYm9sUmVzdWx0Vmlld01vZGVsXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgUmVuZGVyKExlZnRQYW5lVmlldyB2aWV3LCBIVE1MRWxlbWVudCBwYXJlbnRFbGVtZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgVGV4dFNwYW5TZWFyY2hSZXN1bHRWaWV3TW9kZWxcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBSZW5kZXIoTGVmdFBhbmVWaWV3IHZpZXcsIEhUTUxFbGVtZW50IHBhcmVudEVsZW1lbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBDYXRlZ29yaXplZFNlYXJjaFJlc3VsdHNWaWV3TW9kZWxcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBSZW5kZXIoTGVmdFBhbmVWaWV3IHZpZXcsIEhUTUxFbGVtZW50IHBhcmVudEVsZW1lbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgY2F0ZWdvcnkgaW4gQ2F0ZWdvcmllcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuUmVuZGVyKHZpZXcsIHBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIENhdGVnb3J5R3JvdXBTZWFyY2hSZXN1bHRzVmlld01vZGVsXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHZvaWQgUmVuZGVyKExlZnRQYW5lVmlldyB2aWV3LCBIVE1MRWxlbWVudCBwYXJlbnRFbGVtZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnRFbGVtZW50ID0gQ29kZXguVmlldy5WaWV3VXRpbGl0aWVzLlJlbmRlckhlYWRlcmVkQ29udGVudChwYXJlbnRFbGVtZW50LCBcInJIXCIsIEhlYWRlciwgXCJyS1wiKTtcclxuICAgICAgICAgICAgUHJvamVjdFJlc3VsdHMuUmVuZGVyKHZpZXcsIGNvbnRlbnRFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvamVjdFJlc3VsdHNWaWV3TW9kZWxcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBSZW5kZXIoTGVmdFBhbmVWaWV3IHZpZXcsIEhUTUxFbGVtZW50IHBhcmVudEVsZW1lbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgcHJvamVjdEdyb3VwIGluIFByb2plY3RHcm91cHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RHcm91cC5SZW5kZXIodmlldywgcGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUHJvamVjdEdyb3VwUmVzdWx0c1ZpZXdNb2RlbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlbmRlcihMZWZ0UGFuZVZpZXcgdmlldywgSFRNTEVsZW1lbnQgcGFyZW50RWxlbWVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50RWxlbWVudCA9IENvZGV4LlZpZXcuVmlld1V0aWxpdGllcy5SZW5kZXJIZWFkZXJlZENvbnRlbnQocGFyZW50RWxlbWVudCwgXCJyQVwiLCBzdHJpbmcuRm9ybWF0KFwiezB9ICh7MX0pXCIsUHJvamVjdE5hbWUsQ291bnRlci5Db3VudCksIFwickdcIik7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBpdGVtIGluIEl0ZW1zKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLlJlbmRlcih2aWV3LCBjb250ZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBDb2RleC5PYmplY3RNb2RlbDtcclxudXNpbmcgQ29kZXguU2RrLlNlYXJjaDtcclxudXNpbmcgTmV3dG9uc29mdC5Kc29uO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVmlldy5XZWJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFdlYkFwaUNvZGV4IDogSUNvZGV4XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBzdHJpbmcgYmFzZVVybDtcclxuXHJcbiAgICAgICAgcHVibGljIFdlYkFwaUNvZGV4KHN0cmluZyBiYXNlVXJsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybC5FbmRzV2l0aChcIi9cIikgPyBiYXNlVXJsIDogYmFzZVVybCArICcvJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUYXNrPEluZGV4UXVlcnlSZXNwb25zZTxSZWZlcmVuY2VzUmVzdWx0Pj4gRmluZEFsbFJlZmVyZW5jZXNBc3luYyhGaW5kQWxsUmVmZXJlbmNlc0FyZ3VtZW50cyBhcmd1bWVudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gUG9zdEFzeW5jPEluZGV4UXVlcnlSZXNwb25zZTxTZXJpYWxpemVkUmVmZXJlbmNlc1Jlc3VsdD4sIEluZGV4UXVlcnlSZXNwb25zZTxSZWZlcmVuY2VzUmVzdWx0Pj4oQ29kZXhTZXJ2aWNlTWV0aG9kLkZpbmRBbGxSZWZzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJRGVmaW5pdGlvblNlYXJjaE1vZGVsPj4gRmluZERlZmluaXRpb25Bc3luYyhGaW5kRGVmaW5pdGlvbkFyZ3VtZW50cyBhcmd1bWVudHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gUG9zdEFzeW5jPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8RGVmaW5pdGlvblNlYXJjaE1vZGVsPiwgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJRGVmaW5pdGlvblNlYXJjaE1vZGVsPj4oQ29kZXhTZXJ2aWNlTWV0aG9kLkZpbmREZWYsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVGFzazxJbmRleFF1ZXJ5UmVzcG9uc2U8UmVmZXJlbmNlc1Jlc3VsdD4+IEZpbmREZWZpbml0aW9uTG9jYXRpb25Bc3luYyhGaW5kRGVmaW5pdGlvbkxvY2F0aW9uQXJndW1lbnRzIGFyZ3VtZW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBQb3N0QXN5bmM8SW5kZXhRdWVyeVJlc3BvbnNlPFNlcmlhbGl6ZWRSZWZlcmVuY2VzUmVzdWx0PiwgSW5kZXhRdWVyeVJlc3BvbnNlPFJlZmVyZW5jZXNSZXN1bHQ+PihDb2RleFNlcnZpY2VNZXRob2QuRmluZERlZkxvY2F0aW9uLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhc2s8SW5kZXhRdWVyeVJlc3BvbnNlPElCb3VuZFNvdXJjZUZpbGU+PiBHZXRTb3VyY2VBc3luYyhHZXRTb3VyY2VBcmd1bWVudHMgYXJndW1lbnRzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBvc3RBc3luYzxJbmRleFF1ZXJ5UmVzcG9uc2U8Qm91bmRTb3VyY2VGaWxlPiwgSW5kZXhRdWVyeVJlc3BvbnNlPElCb3VuZFNvdXJjZUZpbGU+PihDb2RleFNlcnZpY2VNZXRob2QuR2V0U291cmNlLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhc2s8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0Pj4gU2VhcmNoQXN5bmMoU2VhcmNoQXJndW1lbnRzIGFyZ3VtZW50cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMuU2VhcmNoU3RyaW5nID09IFwidGR0XCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBHZXRUZXN0QXN5bmM8SW5kZXhRdWVyeUhpdHNSZXNwb25zZTxTZWFyY2hSZXN1bHQ+LCBJbmRleFF1ZXJ5SGl0c1Jlc3BvbnNlPElTZWFyY2hSZXN1bHQ+PihDb2RleFNlcnZpY2VNZXRob2QuU2VhcmNoLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUG9zdEFzeW5jPEluZGV4UXVlcnlIaXRzUmVzcG9uc2U8U2VhcmNoUmVzdWx0PiwgSW5kZXhRdWVyeUhpdHNSZXNwb25zZTxJU2VhcmNoUmVzdWx0Pj4oQ29kZXhTZXJ2aWNlTWV0aG9kLlNlYXJjaCwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgVGFzazxUUmVzdWx0PiBHZXRUZXN0QXN5bmM8VFNlcmlhbGl6ZWRSZXN1bHQsIFRSZXN1bHQ+KFxyXG4gICAgICAgICAgICBDb2RleFNlcnZpY2VNZXRob2Qgc2VhcmNoTWV0aG9kLFxyXG4gICAgICAgICAgICBvYmplY3QgYXJndW1lbnRzKVxyXG4gICAgICAgICAgICB3aGVyZSBUUmVzdWx0IDogSW5kZXhRdWVyeVJlc3BvbnNlLCBuZXcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGFza0NvbXBsZXRpb25Tb3VyY2U8VFJlc3VsdD4gdGNzID0gbmV3IFRhc2tDb21wbGV0aW9uU291cmNlPFRSZXN1bHQ+KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXJsID0gYmFzZVVybCArIHNlYXJjaE1ldGhvZC5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZSh1cmwpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IG5ldyBSZXR5cGVkLmpxdWVyeS5KUXVlcnlBamF4U2V0dGluZ3NcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gXCJ0ZXN0c2VhcmNoZGF0YS5qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJHRVRcIixcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGNvbnRlbnRUeXBlIG9mIHRoZSByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG5cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSAoZGF0YSwgdGV4dFN0YXR1cywgc3VjY2Vzc1JlcXVlc3QpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGNzLlNldFJlc3VsdChKc29uQ29udmVydC5EZXNlcmlhbGl6ZU9iamVjdDxUU2VyaWFsaXplZFJlc3VsdD4oc3VjY2Vzc1JlcXVlc3QucmVzcG9uc2VUZXh0KS5BczxUUmVzdWx0PigpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSAoZXJyb3JSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0Y3MuU2V0UmVzdWx0KG5ldyBUUmVzdWx0KClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVycm9yID0gc3RyaW5nLkZvcm1hdChcIkVycm9yOiB7MH1cIixlcnJvclRocm93bikgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFJldHlwZWQuanF1ZXJ5LmpRdWVyeS5hamF4KGNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGNzLlRhc2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIFRhc2s8VFJlc3VsdD4gUG9zdEFzeW5jPFRTZXJpYWxpemVkUmVzdWx0LCBUUmVzdWx0PihcclxuICAgICAgICAgICAgQ29kZXhTZXJ2aWNlTWV0aG9kIHNlYXJjaE1ldGhvZCxcclxuICAgICAgICAgICAgb2JqZWN0IGFyZ3VtZW50cylcclxuICAgICAgICAgICAgd2hlcmUgVFJlc3VsdCA6IEluZGV4UXVlcnlSZXNwb25zZSwgbmV3KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRhc2tDb21wbGV0aW9uU291cmNlPFRSZXN1bHQ+IHRjcyA9IG5ldyBUYXNrQ29tcGxldGlvblNvdXJjZTxUUmVzdWx0PigpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVybCA9IGJhc2VVcmwgKyBzZWFyY2hNZXRob2QuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUodXJsKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcmd1bWVudHNEYXRhID0gSnNvbkNvbnZlcnQuU2VyaWFsaXplT2JqZWN0KGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29uZmlnID0gbmV3IFJldHlwZWQuanF1ZXJ5LkpRdWVyeUFqYXhTZXR0aW5nc1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gYXJndW1lbnRzRGF0YSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGNvbnRlbnRUeXBlIG9mIHRoZSByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG5cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSAoZGF0YSwgdGV4dFN0YXR1cywgc3VjY2Vzc1JlcXVlc3QpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGNzLlNldFJlc3VsdChKc29uQ29udmVydC5EZXNlcmlhbGl6ZU9iamVjdDxUU2VyaWFsaXplZFJlc3VsdD4oc3VjY2Vzc1JlcXVlc3QucmVzcG9uc2VUZXh0KS5BczxUUmVzdWx0PigpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSAoZXJyb3JSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0Y3MuU2V0UmVzdWx0KG5ldyBUUmVzdWx0KClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVycm9yID0gc3RyaW5nLkZvcm1hdChcIkVycm9yOiB7MH1cIixlcnJvclRocm93bikgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFJldHlwZWQuanF1ZXJ5LmpRdWVyeS5hamF4KGNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGNzLlRhc2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludGVybmFsIGNsYXNzIFNlcmlhbGl6ZWRSZWZlcmVuY2VzUmVzdWx0IDogSW5kZXhRdWVyeUhpdHM8UmVmZXJlbmNlU2VhcmNoUmVzdWx0PlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU3ltYm9sRGlzcGxheU5hbWUgeyBnZXQ7IHNldDsgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
